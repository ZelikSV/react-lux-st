import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { omit } from 'lodash';

import { User } from 'types';

import UserForm from '../UserForm/UserForm';

const CREATE_USER = gql`
  mutation ($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      name
      username
      phone
      email
    }
  }
`;

const CreateUser = () => {
  const [createUserQuery] = useMutation(CREATE_USER);
  const [data, setData] = useState<User>({
    id: '',
    name: '',
    username: '',
    phone: '',
    email: '',
    website: '',
  });
  const createUser = async (user: User) => {
    setData(user);
    await createUserQuery({
      variables: {
        input: omit(user, ['id']),
      },
    });
  };

  return (
    <div>
      <UserForm onSubmit={createUser} title="Update User" initialValues={data} mode="create" />
    </div>
  );
};

export default CreateUser;
