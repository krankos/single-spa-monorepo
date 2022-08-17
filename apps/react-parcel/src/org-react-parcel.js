import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";
import "./index.css";

const singleSpaReactLifecycle = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: Root,
});

export const name = "React Parcel";

export const bootstrap = [singleSpaReactLifecycle.bootstrap];
export const mount = [singleSpaReactLifecycle.mount];

export const unmount = [singleSpaReactLifecycle.unmount];