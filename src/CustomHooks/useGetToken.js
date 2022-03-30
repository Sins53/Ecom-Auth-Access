import { useState } from "react";

const useGetToken = () => {
  const [token, setToken] = useState(null);
  const baseUrl = "https://ecom-react-task.herokuapp.com/";

  const getToken = async (body) => {
    await fetch(baseUrl + "auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        setToken(data);
        alert(data.message);
      });
  };

  return { getToken, token };
};

export default useGetToken;
