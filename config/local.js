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
                name: 'login',
                frontUrl: '/login',
                maxLoginTimeMillisec: 10 * 60000,
                checkCredentialsLink: 'http://127.0.0.1:5000/checkCredentials',
                getTokenLink: 'http://127.0.0.1:5000/getToken',
                redirectAfterLogin: '/',
            },
            doesNotExist: {
                name: 'doesNotExist',
            },
        },
    },
};

exports.config = config;
