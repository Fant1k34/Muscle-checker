const config = {
    server: {
        protocol: 'http',
        serverName: 'localhost',
        port: 3000,
        pagesUrl: '/',
        bundle: {
            bundleUrl: '/bundle.js',
            bundlePath: './dist/bundle.js',
        },
        pages: {
            pagesUrl: '/',
            loginPageUrl: '/login',
            pagesPath: './dist/index.html',
        },
        static: {
            images: {
                imageUrl: 'static/images/*',
                imagePath: './dist/static/images/',
            },
        },
    },
    api: {
        apiUrl: '/api',
        services: {
            login: {
                frontUrl: '/login',
                maxLoginTimeMillisec: 10 * 60000,
                checkCredentials: {
                    serviceProtocol: 'http',
                    serviceServerName: '127.0.0.1',
                    servicePort: 5000,
                    serviceMethod: 'POST',
                    serviceUrl: '/api/check-credentials',
                },
                redirectToAfterLogin: '/',
            },
            doesNotExist: {
                name: 'doesNotExist',
            },
        },
    },
};

exports.config = config;
