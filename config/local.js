const config = {
    server: {
        protocol: 'http',
        serverName: 'localhost',
        port: 3000,
        mode: 'dev',
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
                frontUrl: '/login-api',
                maxLoginTimeMillisec: 10 * 60000,
                checkCredentials: {
                    serviceProtocol: 'http',
                    serviceServerName: '127.0.0.1',
                    servicePort: 1234,
                    serviceMethod: 'POST',
                    serviceUrl: '/api/check-credentials',
                },
                redirectToAfterLogin: '/',
            },
            register: {
                checkEmail: {
                    frontUrl: '/check-email-api',
                    serviceProtocol: 'http',
                    serviceServerName: '127.0.0.1',
                    servicePort: 1234,
                    serviceMethod: 'POST',
                    serviceUrl: '/api/check-email',
                },
                register: {
                    frontUrl: '/register-api',
                    verifyEmail: {
                        serviceProtocol: 'http',
                        serviceServerName: '127.0.0.1',
                        servicePort: 1234,
                        serviceMethod: 'POST',
                        serviceUrl: '/api/verify-email',
                    },
                    register: {
                        serviceProtocol: 'http',
                        serviceServerName: '127.0.0.1',
                        servicePort: 1234,
                        serviceMethod: 'POST',
                        serviceUrl: '/api/register',
                    },
                },
                redirectToAfterLogin: '/',
            },
            doesNotExist: {
                name: 'doesNotExist',
            },
        },
    },
};

module.exports = config;
