import { Route, Routes } from "react-router-dom";
import Main from "./Main";

function App() {
  const routes = [
    { link: "/", name: Main },
    // { link: "/login/", name: LoginPage },
    // { link: "/home/", name: HomePage },
  ];

  return (
    <>
      <Routes>
        {routes.map((item) => {
          return (
            <Route
              key={"DynamicRoutes"}
              path={item.link}
              exact
              element={<item.name />}
            ></Route>
          );
        })}
      </Routes>
    </>
  );
}

export default App;
