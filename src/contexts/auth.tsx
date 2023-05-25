"use client";

import React, { useContext, useMemo } from "react";
import Reat, { createContext } from "react";
import { AuthState } from "../reducers/auth";
import { API } from "@/agent";
import { saveUserSession, setToken } from "@/utils/auth";

interface AuthFunctions {
  signIn: (props: { email: string; password: string }) => Promise<any>;
}

const AuthContext = createContext<
  AuthState | AuthFunctions | { authDispatch: React.Reducer<any, any> } | any
>({});

type componentProps = {
  children: React.ReactNode;
  auth: AuthState;
  authDispatch: React.Reducer<any, any>;
};

export default function AuthProvider({
  children,
  auth,
  authDispatch,
}: componentProps) {
  const authFunctions: AuthFunctions = useMemo(
    () => ({
      signIn: async (props) => {
        const response: any = await API.post("auth", "/signin", {
          body: {
            ...props,
          },
        });
        saveUserSession(response.data.data);
        setToken(response.data.token);

        return response;
      },
    }),
    []
  );
  return (
    <AuthContext.Provider value={{ ...auth, authDispatch, ...authFunctions }}>
      <>{children}</>
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const values = useContext(AuthContext);
  return values;
};
