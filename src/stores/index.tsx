import React, { useReducer } from "react";
import AuthProvider from "../contexts/auth";
import authReducer, { authInitialState } from "../reducers/auth";

interface componentProps {
  children: React.ReactNode;
}
export default function Store({ children }: componentProps) {
  const [auth, authDispatch] = useReducer(authReducer, { ...authInitialState });
  return (
    <AuthProvider auth={auth} authDispatch={authDispatch}>
      <>{children}</>
    </AuthProvider>
  );
}
