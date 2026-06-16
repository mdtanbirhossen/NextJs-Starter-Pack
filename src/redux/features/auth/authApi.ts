import { baseApi } from "@/redux/api/baseApi";

import { setCredentials } from "./authSlice";
import type { AuthResponse, LoginRequest, RegisterRequest } from "./authTypes";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Auth"],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(setCredentials(data));
      },
    }),
    register: builder.mutation<AuthResponse, RegisterRequest>({
      query: (payload) => ({
        url: "auth/register",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Auth"],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(setCredentials(data));
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
