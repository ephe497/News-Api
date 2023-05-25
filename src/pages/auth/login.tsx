import { useAuth } from "@/contexts/auth";
import React from "react";

export default function LoginScreen() {
  const { signIn } = useAuth();

  const handleLogin = async () => {
    try {
      const response = await signIn({
        email: "test@test.com",
        password: "11111111",
      });

      location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return <button onClick={handleLogin}>Login</button>;
}
