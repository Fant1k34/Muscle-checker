const config = {
    server: {
        protocol: "http",
        serverName: "localhost",
        port: 3000,
        pagesUrl: "/",
        bundle: {
            bundleUrl: "/bundle.js",
            bundlePath: "./dist/bundle.js",
        },
        pages: {
            pagesUrl: "/",
            pagesPath: "./dist/index.html",
        },
        static: {
            images: {
                imageUrl: "static/images/*",
                imagePath: "./dist/static/images/",
            },
        }
    },
    api: {
        login: {
            name: "login",
            frontUrl: "",
            redirectUrl: null,
        }
    }
}

exports.config = config;
