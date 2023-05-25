import { useAuth } from "@/contexts/auth";
import DashboardLayout from "@/layouts";
import { getToken } from "@/utils/auth";
import React, { useEffect } from "react";

export default function HomePage() {
  const logs = useAuth();

  useEffect(() => {
    getToken();
  }, []);
  return (
    <DashboardLayout>
      user:<>{logs?.user?.email}</>
    </DashboardLayout>
  );
}
