// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

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
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "no-lazy",
  },
];
