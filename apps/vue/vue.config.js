const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        externals: ["react-parcel", "@org/root-config"],
        output: {
            libraryTarget: "system",
        },
        // module: {
        //     rules: [{
        //         parser: {
        //             system: false,
        //         },
        //     }, ],
        // },
        // module: {
        //     rules: [{ parser: { system: false } }],
        // },
    },
});
// module.exports = {
//     chainWebpack(config) {
//         config.plugin("SystemJSPublicPathWebpackPlugin").tap((args) => {
//             args[0].rootDirectoryLevel = 1;
//             return args;
//         });
//     },
// };