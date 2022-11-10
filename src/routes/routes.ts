// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

import {
  FormikAbstractation,
  FormikBasicPage,
  FormikComponents,
  FormikYupPage,
  RegisterPage,
} from "../03-forms/pages";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(
  () =>
    import(/*webpackChunkName: "LazyPage1"*/ "../01-lazyload/layout/LazyLayout")
);

export const routes: Route[] = [
  {
    path: "/lazylayout/*",
    to: "/lazylayout/",
    Component: LazyLayout,
    name: "lazylayout",
  },
  {
    to: "/formik-basic",
    path: "formik-basic",
    Component: FormikYupPage,
    name: "formik-basic",
  },
  {
    to: "/formik-yup",
    path: "formik-yup",
    Component: FormikBasicPage,
    name: "formik-yup",
  },
  {
    to: "/formik-components",
    path: "formik-components",
    Component: FormikComponents,
    name: "formik-components",
  },
  {
    to: "/Formik-Abstractation",
    path: "Formik-Abstractation",
    Component: FormikAbstractation,
    name: "Formik-Abstractation",
  },
  {
    to: "/register",
    path: "register",
    Component: RegisterPage,
    name: "register",
  },
];
