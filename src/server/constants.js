const HTTPMethods = {
    GET: 'GET',
    POST: 'POST',
};

const LoginComments = {
    SUCCESS: 'Success login',
    WRONG_PASSWORD: 'Wrong username or password',
};

const RegisterComments = {
    ERROR: 'Что-то пошло не так, попробуйте позже',
    WROND_CODE: 'Неверный код',
};

module.exports = { HTTPMethods, LoginComments, RegisterComments };
