import React, { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { ActionButtons, TextField } from 'components/FormElements';
import useRouting from 'hooks/useRouting';
import { User } from 'types';

import { UserFormWrapper, FormTitle } from './UserForm.styles';

type Props = {
  initialValues: User;
  onSubmit: Function;
  title: string;
  mode: 'create' | 'update';
};

const UserForm: FC<Props> = ({ onSubmit, initialValues, title }) => {
  const { history } = useRouting();
  const { handleSubmit, control, errors } = useForm({
    defaultValues: initialValues,
  });

  const handleCancel = () => {
    history.goBack();
  };

  const handleFormSubmit = (values: { [key: string]: any }) => {
    onSubmit({ id: initialValues.id, ...values });
    handleCancel();
  };

  return (
    <UserFormWrapper>
      <FormTitle>{title}</FormTitle>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ onChange, value, name }) => (
            <TextField info={{ name, errors }} value={value} onChange={onChange} label="Name" />
          )}
        />

        <Controller
          name="username"
          control={control}
          render={({ onChange, value, name }) => (
            <TextField info={{ name, errors }} value={value} onChange={onChange} label="User Name" />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ onChange, value, name }) => (
            <TextField info={{ name, errors }} value={value} onChange={onChange} label="Email" />
          )}
        />

        <Controller
          name="phone"
          control={control}
          render={({ onChange, value, name }) => (
            <TextField info={{ name, errors }} value={value} onChange={onChange} label="Phone" />
          )}
        />

        <ActionButtons cancelAction={handleCancel} />
      </form>
    </UserFormWrapper>
  );
};

export default UserForm;
