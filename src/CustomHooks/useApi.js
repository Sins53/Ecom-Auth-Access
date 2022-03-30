import { useState } from "react";

const useApi = () => {
  const baseUrl = "https://ecom-react-task.herokuapp.com/";
  const isToken = localStorage.getItem("token");

  const [apiData, setApiData] = useState(null);

  async function commonApi(url, method, body) {
    await fetch(baseUrl + url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + isToken,
      },
      body: body ? JSON.stringify(body) : undefined,
    })
      .then((response) => response.json())
      .then((data) => {
        setApiData(data);
        alert(data.message);
      });
  }

  return { apiData, commonApi };
};

export default useApi;
