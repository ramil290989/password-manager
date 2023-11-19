const en = {
  translation: {
    forms: {
      login: 'Authorization',
      signUp: 'Registration',
      usernameInput: 'Username',
      passwordInput: 'Password',
      passwordConfirmInput: 'Confirm password',
      loginBtn: 'Log in',
      signUpBtn: 'Sign up',
    },
    validations: {
      min3max20: 'Enter from 3 to 20 characters',
      required: 'Obligatory field',
      min6: 'Password must contain at least 6 characters',
      oneOf: 'Password and password confirmation must match',
    },
    navbar: {
      userInf: 'Sign in as ',
      logoutBtn: 'Log out',
      addPassword: 'Add password',
      settings: 'Settings',
    },
    errors: {
      401: 'Incorrect username or password',
      403: 'The token is invalid',
      409: 'This username already exists',
      431: 'Connection error',
      500: 'Connection error',
    }
  }
};

export default en;
