const ru = {
  translation: {
    forms: {
      headers: {
        login: 'Авторизация',
        signUp: 'Регистрация',
      },
      inputs: {
        username: 'Имя пользователя',
        password: 'Пароль',
        passwordConfirm: 'Подтверждение пароля',
        newPassword: 'Новый пароль',
        newPasswordConfirm: 'Подтверждение нового пароля',
        header: 'Заголовок',
        description: 'Краткое описание',
      },
      buttons: {
        login: 'Войти',
        signUp: 'Зарегистрироваться',
        editPassword: 'Изменить пароль',
        addPassword: 'Добавить пароль',
      },
      checks: {
        showPassword: 'Показать пароль',
      },
    },
    modals: {
      headers: {
        addPassword: 'Добавить пароль',
        editPassword: 'Редактировать пароль',
        removePassword: 'Удалить пароль',
        changeUserPassword: 'Изменить пароль пользователя',
      },
      titles: {
        confirmRemove: 'Подтвердите удаление пароля',
      },
      buttons: {
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
      language: 'Язык',
      changeUserPassword: 'Изменить пароль пользователя',
    },
    errors: {
      401: 'Неправильное имя пользователя или пароль',
      403: 'Токен недействительный',
      409: 'Такое имя пользователя уже существует',
      431: 'Ошибка на стороне сервера',
      500: 'Ошибка соединения',
      wrongPassword: 'Неправильный пароль',
    },
    footer: {
      developer: 'Рамиль Гарифуллин, 2023'
    },
    toast: {
      error: 'Ошибка',
      success: 'Выполнено успешно',
      passwordAdded: 'Пароль добавлен',
      passwordChanged: 'Пароль изменен',
      passwordRemoved: 'Пароль удален',
      userPasswordChanged: 'Пароль входа в систему успешно изменен',
    },
    other: {
      loading: 'Загрузка',
      loadingText: 'пожалуйста подождите, загружаются данные...',
      error: 'Ошибка',
      errorText: 'пожалуйста, попробуйте позже...',
      404: 'ошибка 404',
      pageNotFound: 'запрошенная страница не найдена',
      toMainPageButton: 'На главную',
    },
  },
};

export default ru;
