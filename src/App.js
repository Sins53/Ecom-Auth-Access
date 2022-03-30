import { Route, Routes } from "react-router-dom";
import LoginSignup from "./Components/LoginSignup";
import Main from "./Main";
import Role from "./Pages/Admin/Role";
import User from "./Pages/Admin/User";
import UserRoleMap from "./Pages/Admin/UserRoleMap";

function App() {
  const routes = [
    { link: "/", name: Main },
    { link: "/login/", name: LoginSignup },
  ];
  const outletRoutes = [
    { link: "user/", name: User },
    { link: "/user/:id", name: UserRoleMap },
    { link: "roles/", name: Role },
  ];

  return (
    <>
      <Routes key={"DynamicRoutes"}>
        {routes.map((item) => {
          return (
            <Route path={item.link} exact element={<item.name />}>
              {item.link === "/" ? (
                <>
                  {outletRoutes.map((item) => {
                    return (
                      <Route
                        key={"DynamicRoutes"}
                        path={item.link}
                        exact
                        element={<item.name />}
                      />
                    );
                  })}
                </>
              ) : null}
            </Route>
          );
        })}
      </Routes>
    </>
  );
}

export default App;
