import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

import UserForm from '../UserForm/UserForm';
import { User } from '../UsersList/UsersList.types';

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
  const [data, setData] = useState({
    user: {
      id: '',
      name: '',
      username: '',
      phone: '',
      email: '',
    },
  });
  const createUser = async (user: User) => {
    setData({ user });
    await createUserQuery({
      variables: {
        input: user,
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
