import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import logo from "../logo.svg";
import { routes } from "./routes";
import { Suspense } from "react";
import { ShoppingPage } from "../02-component-pattern/pages/ShoppingPage";

export const Navigation = () => {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map(({ to, name }) => {
                return (
                  <li key={to}>
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        isActive ? "nav-active" : ""
                      }
                    >
                      {name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Routes>
            {/* {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))} */}
            <Route path="/*" element={<ShoppingPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
