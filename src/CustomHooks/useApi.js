import { useState } from "react";

const useApi = () => {
  const baseUrl = "https://ecom-react-task.herokuapp.com/";
  const isToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMDg5ZjQwMi04NjU0LTQwYTgtOTI3NC0wMWJmZGQ1NDllZDUiLCJpYXQiOjE2NDgxNDE1MzMwODksImV4cCI6MTY0ODE0MTU0MDI4OX0.FP9V0MseZ7wfMZsypdhAwobO6t0ri5Eu29dAFBEcW94";

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
