import * as Yup from 'yup';

const validationSchemaSignUp = (t) => Yup.object({
  username: Yup.string()
    .min(3, t('validations.min3max20'))
    .max(20, t('validations.min3max20'))
    .required(t('validations.required')),
  password: Yup.string()
    .min(6, t('validations.min6'))
    .required(t('validations.required')),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], t('validations.oneOf'))
    .required(t('validations.required')),
});

const validationSchemaChangeUserPassword = (t) => Yup.object({
  newPassword: Yup.string()
    .min(6, t('validations.min6'))
    .required(t('validations.required')),
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], t('validations.oneOf'))
    .required(t('validations.required')),
});

export { validationSchemaSignUp, validationSchemaChangeUserPassword };
