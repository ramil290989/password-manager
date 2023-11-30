const ru = {
  translation: {
    forms: {
      login: 'Авторизация',
      signUp: 'Регистрация',
      addPassword: 'Добавить пароль',
      usernameInput: 'Имя пользователя',
      passwordInput: 'Пароль',
      passwordConfirmInput: 'Подтверждение пароля',
      headerInput: 'Заголовок',
      descriptionInput: 'Краткое описание',
      loginBtn: 'Войти',
      signUpBtn: 'Зарегистрироваться',
      addPasswordBtn: 'Добавить пароль',
      editPasswordBtn: 'Изменить пароль',
    },
    modals: {
      editPassword: {
        head: 'Редактировать пароль',
      },
      remove: {
        head: 'Удалить пароль',
        title: 'Подтвердите удаление пароля',
      },
      btns: {
        save: 'Сохранить',
        cancel: 'Отмена',
        remove: 'Удалить',
      },
    },
    passwordCardBtns: {
      edit: 'Редактировать',
      remove: 'Удалить',
      overlayCopyOk: 'Скопировано',
    },
    validations: {
      min3max20: 'От 3 до 20 символов',
      required: 'Обязательное поле',
      min6: 'Пароль должен содержать минимум 6 символов',
      oneOf: 'Пароль и подтверждение пароля должны совпадать',
    },
    navbar: {
      userInf: 'Вы вошли как ',
      logoutBtn: 'Выйти',
      addPassword: 'Добавить пароль',
      settings: 'Настройки',
    },
    errors: {
      401: 'Неправильное имя пользователя или пароль',
      403: 'Токен недействительный',
      409: 'Такое имя пользователя уже существует',
      431: 'Ошибка на стороне сервера',
      500: 'Ошибка соединения',
    },
    toast: {
      error: 'Ошибка',
      success: 'Выполнено успешно',
      passwordAdded: 'Пароль добавлен',
      passwordChanged: 'Пароль изменен',
      passwordRemoved: 'Пароль удален',
    },
    other: {
      loading: 'Загрузка',
      loadingText: 'пожалуйста подождите, загружаются данные...',
      error: 'Ошибка',
      errorText: 'пожалуйста, попробуйте позже...',
    },
  },
};

export default ru;
