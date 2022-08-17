const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        externals: ["react-parcel"],
        output: {
            libraryTarget: "system",
        },
    },
});