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
        },
    },
    api: {
        apiUrl: "/api",
        services: {
            login: {
                name: "login",
                frontUrl: "/login",
            },
            doesNotExist: {
                name: "doesNotExist",
            }
        }
    }
}

exports.config = config;
