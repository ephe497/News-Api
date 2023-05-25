import { useAuth } from "@/contexts/auth";
import React, { useCallback, useEffect } from "react";
import PageLoading from "./loading";
import { getUserSession } from "@/utils/auth";
import { AuthActionTypes } from "@/reducers/auth";

type componentProps = {
  children: React.ReactNode;
};
export default function DashboardLayout({ children }: componentProps) {
  const { isLoading, isLoggedIn, authDispatch } = useAuth();

  //You can move this function to a top level, if you want it to involve fast
  const handleGetSession = useCallback(async () => {
    try {
      authDispatch({
        type: AuthActionTypes.LOADING,
      });
      const user = await getUserSession();
      if (user) {
        authDispatch({
          type: AuthActionTypes.LOGIN_SUCCESS,
          payload: { user },
        });
      } else {
        authDispatch({
          type: AuthActionTypes.LOGOUT,
        });
      }
    } catch (error) {
      authDispatch({
        type: AuthActionTypes.LOGOUT,
      });
    }
  }, [authDispatch]);

  useEffect(() => {
    handleGetSession();
  }, [handleGetSession]);

  if (isLoading) {
    return <PageLoading />;
  }

  if (!isLoading && !isLoggedIn) {
    location.href = "/auth/login";
  }

  return <div>{children}</div>;
}
