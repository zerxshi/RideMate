import { fetchBaseQuery } from "@reduxjs/toolkit/query"
import type {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
} from "@reduxjs/toolkit/query"
import { setUser, deleteUser } from "@/store/slice/userSlice"
import { Mutex } from "async-mutex"
import { BASE_API_URL } from "@/utils/consts"

// create a new mutex
const mutex = new Mutex()

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_API_URL,
    credentials: "include",
    prepareHeaders: (headers) => {
        const accessToken: string | null = localStorage.getItem("accessToken")
        headers.set("Authorization", "Bearer " + accessToken!)
    },
    method: "POST",
})

export const baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    // wait until the mutex is available without locking it
    await mutex.waitForUnlock()
    let result = await baseQuery(args, api, extraOptions)
    if (result.error && result.error.status === 401) {
        // checking whether the mutex is locked
        if (!mutex.isLocked()) {
            const release = await mutex.acquire()
            try {
                const refreshResult = await baseQuery(
                    "/user/refresh",
                    api,
                    extraOptions,
                )

                if (refreshResult.data) {
                    localStorage.setItem(
                        "accessToken",
                        refreshResult.data.token,
                    )
                    api.dispatch(setUser(refreshResult.data.token))

                    // retry the initial query
                    result = await baseQuery(args, api, extraOptions)
                } else {
                    api.dispatch(deleteUser())
                }
            } finally {
                // release must be called once the mutex should be released again.
                release()
            }
        } else {
            // wait until the mutex is available without locking it
            await mutex.waitForUnlock()
            result = await baseQuery(args, api, extraOptions)
        }
    }
    return result
}
