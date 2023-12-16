import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { Form, Button } from 'react-bootstrap';
import apiRoutes from '../../apiRoutes.js';
import { formTrim } from '../../inputTrim.js';
import useAuthHeader from '../../hooks/useAuthHeader.jsx';
import useLogOut from '../../hooks/useLogOut.jsx';
import { actions as modalsActions } from '../../slices/modalsSlice.js';
import { actions as toastActions } from '../../slices/toastSlice.js';
import { validationSchemaChangeUserPassword } from '../../validationSchemas.js';

const ChangeUserPassworForm = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const authHeader = useAuthHeader();
  const logOut = useLogOut();
  const [isDisabled, setIsDisabled] = useState(false);
  const changeUserPasswordPath = apiRoutes.changeUserPassword();

  const [error, setError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowNewPassword, setIsShowNewPassword] = useState(false);
  const [isShowConfirmNewPassword, setIsShowConfirmNewPassword] = useState(false);

  const logOutForbidden = (e) => {
    dispatch(toastActions.toastShowError(e));
    logOut();
  };

  return (
    <Formik
      initialValues={{
        password: '',
        newPassword: '',
        confirmNewPassword: '',
      }}
      onSubmit={async (values) => {
        setIsDisabled(true);
        const { password, newPassword } = values;
        try {
          await axios.post(changeUserPasswordPath, { password, newPassword }, authHeader);
          dispatch(modalsActions.modalHide());
          dispatch(toastActions.toastShowSuccess('toast.userPasswordChanged'));
        } catch (e) {
          const { status } = e.response;
          switch (status) {
            case 401:
              setPasswordError('wrongPassword');
              break;
            case 403:
              logOutForbidden(status);
              break;
            default:
              setError(status);
          }
        } finally {
          setIsDisabled(false);
        }
      }}
      validationSchema={validationSchemaChangeUserPassword(t)}
    >
      {(formProps) => (
        <Form onSubmit={formProps.handleSubmit}>
          <Form.FloatingLabel label={t('forms.inputs.password')}>
            <Form.Control
              id='password'
              name='password'
              type={isShowPassword ? 'text' : 'password'}
              className={error || passwordError ? 'is-invalid' : null}
              placeholder={t('forms.inputs.password')}
              onChange={({ target }) => {
                setError(null);
                setPasswordError(null);
                formProps.setFieldValue('password', target.value);
              }}
              onBlur={formProps.handleBlur}
              disabled={isDisabled}
              value={formProps.values.password}
              required
            />
            {passwordError ? (
              <div className='invalid-tooltip'>{t(`errors.${passwordError}`)}</div>
            ) : null}
          </Form.FloatingLabel>
          <Form.Check
            type='switch'
            label={t('forms.checks.showPassword')}
            className='mt-1 mb-4 text-muted'
            onChange={() => setIsShowPassword(!isShowPassword)}
          />
          <Form.FloatingLabel label={t('forms.inputs.newPassword')}>
            <Form.Control
              id='newPassword'
              name='newPassword'
              type={isShowNewPassword ? 'text' : 'password'}
              className={(formProps.errors.newPassword && formProps.touched.newPassword) || error ? 'is-invalid' : null}
              placeholder={t('forms.inputs.newPassword')}
              onChange={({ target }) => {
                setError(null);
                formProps.setFieldValue('newPassword', formTrim(target.value));
              }}
              onBlur={formProps.handleBlur}
              disabled={isDisabled}
              value={formTrim(formProps.values.newPassword)}
              required
            />
            {formProps.errors.newPassword && formProps.touched.newPassword ? (
              <div className='invalid-tooltip'>{formProps.errors.newPassword}</div>
            ) : null}
          </Form.FloatingLabel>
          <Form.Check
            type='switch'
            label={t('forms.checks.showPassword')}
            className='mt-1 mb-4 text-muted'
            onChange={() => setIsShowNewPassword(!isShowNewPassword)}
          />
          <Form.FloatingLabel label={t('forms.inputs.newPasswordConfirm')}>
            <Form.Control
              id='confirmNewPassword'
              name='confirmNewPassword'
              type={isShowConfirmNewPassword ? 'text' : 'password'}
              className={(formProps.errors.confirmNewPassword && formProps.touched.confirmNewPassword) || error ? 'is-invalid' : null}
              placeholder={t('forms.inputs.confirmNewPassword')}
              onChange={({ target }) => {
                setError(null);
                formProps.setFieldValue('confirmNewPassword', formTrim(target.value));
              }}
              onBlur={formProps.handleBlur}
              disabled={isDisabled}
              value={formTrim(formProps.values.confirmNewPassword)}
              required
            />
            {(formProps.errors.confirmNewPassword && formProps.touched.confirmNewPassword) || error
              ? (
                <div className='invalid-tooltip'>
                  {formProps.errors.confirmNewPassword}
                  {t(`errors.${error}`)}
                </div>
              )
              : null}
          </Form.FloatingLabel>
          <Form.Check
            type='switch'
            label={t('forms.checks.showPassword')}
            className='mt-1 mb-4 text-muted'
            onChange={() => setIsShowConfirmNewPassword(!isShowConfirmNewPassword)}
          />
          <Button type='submit' className='w-100 mb-3' disabled={isDisabled}>{t('forms.buttons.editPassword')}</Button>
        </Form>
      )}
    </Formik>
  );
};

export default ChangeUserPassworForm;
