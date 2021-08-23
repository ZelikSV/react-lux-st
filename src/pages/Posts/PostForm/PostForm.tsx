import React, { FC } from 'react';
import { useHistory } from 'react-router';
import { Button } from 'antd';
import { Controller, useForm } from 'react-hook-form';

import { TextField } from 'components/FormElements';

import { PostFormWrapper, SubmitButton, FormTitle } from './PostFrom.styles';

type Props = {
  initialValues: { [key: string]: any };
  onSubmit?: Function;
  title: string;
  mode: 'create' | 'update';
};

const PostForm: FC<Props> = ({ initialValues, onSubmit, title, mode }) => {
  const { handleSubmit, control, watch } = useForm({
    defaultValues: initialValues,
  });
  const history = useHistory();

  const handleCancel = () => {
    history.goBack();
  };

  const handleFormSubmit = (values: { [key: string]: any }) => {
    if (onSubmit) {
      onSubmit({ id: initialValues.id, ...values });
      handleCancel();
    }
  };

  return (
    <PostFormWrapper>
      <FormTitle>{title}</FormTitle>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Controller
          name="title"
          control={control}
          render={(field) => <TextField disabled={mode === 'update'} label="Title" info={field} />}
        />
        <Controller name="body" control={control} render={(field) => <TextField label="Body" info={field} />} />
        <SubmitButton type="primary" htmlType="submit" disabled={!watch('title') || !watch('body')}>
          Save
        </SubmitButton>
        <Button onClick={handleCancel}>Cancel</Button>
      </form>
    </PostFormWrapper>
  );
};

export default PostForm;
