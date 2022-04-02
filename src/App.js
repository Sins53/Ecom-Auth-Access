import { Route, Routes } from "react-router-dom";
import LoginSignup from "./Components/LoginSignup";
import RequireAuth from "./Components/RequireAuth";
import EcomAccess from "./EcomAccess";
import Checkout from "./EcomAccess/Ecom/Checkout";
import ProductPage from "./EcomAccess/Ecom/PrductPage";
import Store from "./EcomAccess/Ecom/Store";
import Home from "./EcomAccess/Home";
import ProductCreators from "./EcomAccess/ProductCreators";
import SingleProduct from "./EcomAccess/ProductCreators/SingleProduct";
import Admin from "./Pages/Admin";
import Role from "./Pages/Admin/Role";
import User from "./Pages/Admin/User";
import UserRoleMap from "./Pages/Admin/UserRoleMap";
import Guide from "./Pages/Guide";
import MissingPage from "./Pages/MissingPage";
import ProductCreator from "./Pages/ProductCreator";
import UnautorizedPage from "./Pages/UnautorizedPage";

function App() {
  const routes = [
    { link: "/", name: EcomAccess },
    { link: "/login/", name: LoginSignup },
    { link: "/home/", name: Home },
    { link: "/store/", name: Store },
    { link: "/product/:id", name: ProductPage },
    { link: "/productcreator/", name: ProductCreators },
    { link: "/productcreator/:id", name: SingleProduct },
    { link: "/checkout/", name: Checkout },
    { link: "/unauthorized/", name: UnautorizedPage },
    { link: "/guide/", name: Guide },
    { link: "*", name: MissingPage },
  ];
  // const outletRoutes = [
  //   { link: "admin/user/", name: User },
  //   { link: "admin/user/:id", name: UserRoleMap },
  //   { link: "roles/", name: Role },
  // ];

  return (
    <>
      <Routes key={"DynamicRoutes"}>
        {routes.map((item) => {
          return <Route path={item.link} exact element={<item.name />}></Route>;
        })}
        <Route element={<RequireAuth allowedRoles={"admin"} />}>
          {/* <Route path="/admin" element={<Main />}>
            {outletRoutes.map((item) => {
              return (
                <Route
                  key={"DynamicRoutes"}
                  path={item.link}

                  element={<item.name />}
                ></Route>
              );
            })}
          </Route> */}

          {/* For admin */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/user" element={<User />} />
          <Route path="/admin/roles" element={<Role />} />
          <Route path="/admin/user/:id" element={<UserRoleMap />} />
        </Route>

        {/* for Product creators */}
        <Route element={<RequireAuth allowedRoles={"creator"} />}>
          <Route path="/creator/" element={<ProductCreator />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
