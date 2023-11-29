const en = {
  translation: {
    forms: {
      login: 'Authorization',
      signUp: 'Registration',
      addPassword: 'Add password',
      usernameInput: 'Username',
      passwordInput: 'Password',
      passwordConfirmInput: 'Confirm password',
      headerInput: 'Header',
      descriptionInput: 'Short description',
      loginBtn: 'Log in',
      signUpBtn: 'Sign up',
      addPasswordBtn: 'Add password',
    },
    modals: {
      editPassword: {
        head: 'Edit password',
      },
      remove: {
        head: 'Remove password',
        title: 'Confirm password removal',
      },
      btns: {
        save: 'Save',
        cancel: 'Cancel',
        remove: 'Remove',
      },
    },
    passwordCardBtns: {
      edit: 'Edit',
      remove: 'Remove',
      overlayCopyOk: 'Copied',
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
    },
    other: {
      loading: 'Loading',      
      loadingText: 'please wait, data is loading...',
      error: 'Error',
      errorText: 'please try again later...',
    },
  },
};

export default en;
