"use client";

import { useEffect, useState } from "react";
import axios from "@/helper/axios";
import { toast } from "react-toastify";
import Loader from "@/components/common/loader/Loader";
import { useRouter } from "next/navigation";

export default function VerifyEmail() {
  const router = useRouter();

  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || null);
  }, []);

  useEffect(() => {
    if (token) {
      verifyUser();
    }
  }, [token]);

  const verifyUser = () => {
    setLoading(true);

    axios
      .put(`/auth/verify-account?token=${token}`)
      .then((res) => {
        setLoading(false);

        if (res.data.success) {
          toast.success(res.data.message);
          router.push("/login");
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        toast.error("Something went wrong !!!");
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {loading && <Loader />}
      <h1 className="text-4xl">Verify Email</h1>
      <h2 className="p-2 bg-orange-500 text-black">
        {token ? `${token}` : "no token"}
      </h2>
    </div>
  );
}
