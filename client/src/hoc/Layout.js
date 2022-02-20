import React, { useEffect, useState } from "react";
import useFetch from "react-fetch-hook";
import axios from "axios";
import { useAuthStore } from "../utility/GlobalState";

function Layout({ children }) {
  const [authState, setAuthState] = useAuthStore();
  const [isLoading, setIsLoading] = useState(true);
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const checkAuthenticated = async () => {
    const res = await axios.get("http://localhost:5000/api/authtoken", config);

    try {
      if (res.status === 200) {
        console.log(res);
        setAuthState({
          token: res.data.access_token,
          isAuthenticated: true,
        });

        localStorage.setItem("token", res?.data?.access_token);
        setIsLoading(false);
      } else {
        console.log(res.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      return await checkAuthenticated();
    })();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return <div>{children}</div>;
}

export default Layout;
