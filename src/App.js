import { Route, Routes } from "react-router-dom";
import LoginSignup from "./Components/LoginSignup";
import RequireAuth from "./Components/RequireAuth";
import AdminPage from "./Extra/AdminPage";
import Commonpage from "./Extra/Commonpage";
import CreatorPage from "./Extra/CreatorPage";
import HomePage from "./Extra/HomePage";
import Main from "./Main";
import Check from "./Main/Check";
import Role from "./Pages/Admin/Role";
import User from "./Pages/Admin/User";
import UserRoleMap from "./Pages/Admin/UserRoleMap";
import MissingPage from "./Pages/MissingPage";
import UnautorizedPage from "./Pages/UnautorizedPage";

function App() {
  const routes = [
    // { link: "/", name: Main },
    { link: "/", name: Check },
    { link: "/login/", name: LoginSignup },
    { link: "*", name: MissingPage },
    { link: "/unauthorized/", name: UnautorizedPage },
    { link: "/common/", name: Commonpage },
    { link: "/home/", name: HomePage },
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
        <Route element={<RequireAuth allowedRoles={"admin"} />}>
          <Route path="/admin/" element={<AdminPage />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={"creator"} />}>
          <Route path="/creator/" element={<CreatorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
