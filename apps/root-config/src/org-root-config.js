import { registerApplication, start } from "single-spa";
import {
    constructApplications,
    constructRoutes,
    constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
    routes,
    loadApp({ name }) {
        return System.import(name);
    },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();

import create from "zustand/vanilla";
import { persist } from "zustand/middleware";

const store = create(
    persist((set) => ({
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count - 1 })),
        reset: () => set((state) => ({ count: 0 })),
    }))
);
const { getState, setState, subscribe } = store;
export { getState, setState, subscribe };