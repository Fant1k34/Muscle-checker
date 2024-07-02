export const RegisterFormFields = {
    name: {
        name: 'name',
        text: 'Ваше имя',
        required: true,
        messageOnEmpty: 'Пожалуйста, введите имя',
    },
    email: {
        name: 'email',
        text: 'Адрес электронной почты',
        required: true,
        messageOnEmpty: 'Пожалуйста, введите адрес электронной почты',
    },
    password: {
        name: 'password',
        text: 'Пароль',
        required: true,
        messageOnEmpty: 'Пожалуйста, введите пароль',
    },
    password2: {
        name: 'repeat password',
        text: 'Повторите пароль',
        required: true,
        messageOnEmpty: 'Пожалуйста, повторите пароль',
    },
    agreed: {
        name: 'agreed',
        required: true,
        messageOnEmpty: 'Необходимо согласиться с условиями пользования',
    },
};
