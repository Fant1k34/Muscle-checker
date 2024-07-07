const nock = require('nock');
const config = require('../../config/local');

const { checkCredentials } = config.api.services.login;
const checkCredentialsAddress =
    checkCredentials.serviceProtocol +
    '://' +
    checkCredentials.serviceServerName +
    ':' +
    checkCredentials.servicePort;

nock(checkCredentialsAddress)
    .post(checkCredentials.serviceUrl)
    .reply(200, { exists: true, userId: 415841 });

const { checkEmail, register } = config.api.services.register;
const checkEmailAddress =
    checkEmail.serviceProtocol +
    '://' +
    checkEmail.serviceServerName +
    ':' +
    checkEmail.servicePort;

const registerAddress =
    register.serviceProtocol +
    '://' +
    register.serviceServerName +
    ':' +
    register.servicePort;

nock(checkEmailAddress)
    .post(checkEmail.serviceUrl)
    .reply(200, { result: true });

nock(registerAddress).post(register.serviceUrl).reply(200, { result: true });
