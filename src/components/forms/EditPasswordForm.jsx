/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Formik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { actions as passwordsActions, selectors as passwordSelectors } from '../../slices/passwordsSlice.js';
import { actions as modalsActions } from '../../slices/modalsSlice.js';
import { actions as toastActions } from '../../slices/toastSlice.js';
import apiRoutes from '../../apiRoutes.js';
import useLogOut from '../../hooks/useLogOut.jsx';
import useAuthHeader from '../../hooks/useAuthHeader.jsx';

const EditPasswordForm = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const id = useSelector((state) => state.modals.id);
  const passwordObj = useSelector((state) => passwordSelectors.selectById(state, id));
  const {
    header,
    description,
    userName,
    password,
  } = passwordObj;

  const logOut = useLogOut();
  const authHeader = useAuthHeader();
  return (
    <Formik
      initialValues={{
        header,
        description,
        userName,
        password,
      }}
      onSubmit={async (values) => {
        setIsDisabled(true);
        setError('');
        const editPasswordRoute = apiRoutes.editPassword();
        const postData = { id, values };
        try {
          await axios.post(editPasswordRoute, postData, authHeader);
          dispatch(passwordsActions.updatePassword({ id, changes: values }));
          dispatch(modalsActions.modalHide());
          dispatch(toastActions.toastShowSuccess('toast.passwordChanged'));
        } catch (e) {
          const { status } = e.response;
          setError(status);
          dispatch(toastActions.toastShowError(status));
          status === 403 && logOut();
        } finally {
          setIsDisabled(false);
        }
      }}
    >
      {(formProps) => (
        <Form onSubmit={formProps.handleSubmit}>
          <Form.FloatingLabel className='mb-4' label={t('forms.inputs.header')}>
            <Form.Control
              id='header'
              name='header'
              type='text'
              className={error ? 'is-invalid' : null}
              placeholder={t('forms.inputs.header')}
              onChange={formProps.handleChange}
              onBlur={formProps.handleBlur}
              disabled={isDisabled}
              required
              value={formProps.values.header}
            />
            {formProps.errors.header && formProps.touched.header ? (
              <div className='invalid-tooltip'>{formProps.errors.header}</div>
            ) : null}
          </Form.FloatingLabel>
          <Form.FloatingLabel className='mb-4 text-end' label={t('forms.inputs.description')}>
            <Form.Control
              as="textarea"
              maxLength="100"
              rows={3}
              id='description'
              name='description'
              type='text'
              className={error ? 'is-invalid' : 'h-100'}
              placeholder={t('forms.inputs.description')}
              onChange={formProps.handleChange}
              onBlur={formProps.handleBlur}
              disabled={isDisabled}
              value={formProps.values.description}
            />
            <Form.Text className='text-muted text-end'>
              {100 - formProps.values.description.length}
            </Form.Text>
          </Form.FloatingLabel>
          <Form.FloatingLabel className='mb-4' label={t('forms.inputs.username')}>
            <Form.Control
              id='userName'
              name='userName'
              type='text'
              className={error ? 'is-invalid' : null}
              placeholder={t('forms.inputs.username')}
              onChange={formProps.handleChange}
              onBlur={formProps.handleBlur}
              disabled={isDisabled}
              required
              value={formProps.values.userName}
            />
            {formProps.errors.userName && formProps.touched.userName ? (
              <div className='invalid-tooltip'>{formProps.errors.userName}</div>
            ) : null}
          </Form.FloatingLabel>
          <Form.FloatingLabel className='mb-4' label={t('forms.inputs.password')}>
            <Form.Control
              id='password'
              name='password'
              type='text'
              className={error ? 'is-invalid' : null}
              placeholder={t('forms.inputs.password')}
              onChange={formProps.handleChange}
              onBlur={formProps.handleBlur}
              disabled={isDisabled}
              required
              value={formProps.values.password}
            />
            {formProps.errors.password && formProps.touched.password ? (
              <div className='invalid-tooltip'>{formProps.errors.password}</div>
            ) : null}
          </Form.FloatingLabel>
          <Button type='submit' className='w-100 mb-3' disabled={isDisabled}>{t('forms.buttons.editPassword')}</Button>
        </Form>
      )}
    </Formik>
  );
};

export default EditPasswordForm;
