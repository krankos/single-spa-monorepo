import Vue from "vue";
import singleSpaVue from "single-spa-vue";

import App from "./App.vue";

Vue.config.productionTip = false;
export var mountParcel;

const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: {
        render(h) {
            return h(App, {
                
            });
        },
    },
});

export const bootstrap = [
    (props) => {
        mountParcel = props.mountParcel;
        return Promise.resolve();
    },
];
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;