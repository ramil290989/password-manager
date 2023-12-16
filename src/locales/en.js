const en = {
  translation: {
    forms: {
      headers: {
        login: 'Authorization',
        signUp: 'Registration',
      },
      inputs: {
        username: 'Username',
        password: 'Password',
        passwordConfirm: 'Confirm password',
        newPassword: 'New password',
        newPasswordConfirm: 'Confirm new password',
        header: 'Header',
        description: 'Short description',
      },
      buttons: {
        login: 'Log in',
        signUp: 'Sign up',
        editPassword: 'Edit password',
        addPassword: 'Add password',
      },
      checks: {
        showPassword: 'Show password',
      },
    },
    modals: {
      headers: {
        addPassword: 'Add password',
        editPassword: 'Edit password',
        removePassword: 'Remove password',
        changeUserPassword: 'Change user password',
      },
      titles: {
        confirmRemove: 'Confirm password removal',
      },
      buttons: {
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
      language: 'Language',
      changeUserPassword: 'Edit user password',
    },
    errors: {
      401: 'Incorrect username or password',
      403: 'The token is invalid',
      409: 'This username already exists',
      431: 'Connection error',
      500: 'Connection error',
      wrongPassword: 'Wrong password',
    },
    footer: {
      developer: 'Ramil Garifullin, 2023',
    },
    toast: {
      error: 'Error',
      success: 'Success',
      passwordAdded: 'Password added',
      passwordChanged: 'Password changed',
      passwordRemoved: 'Passwor removed',
      userPasswordChanged: 'User password changed',
    },
    other: {
      loading: 'Loading',
      loadingText: 'please wait, data is loading...',
      error: 'Error',
      errorText: 'please try again later...',
      404: 'error 404',
      pageNotFound: 'page not found',
      toMainPageButton: 'To main page',
    },
  },
};

export default en;
