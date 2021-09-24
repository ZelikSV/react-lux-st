import React from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';

import useRouting from 'hooks/useRouting';
import { Loading } from 'components';
import { User } from 'types';

import UserForm from '../UserForm/UserForm';

const UPDATE_USER = gql`
  mutation ($id: ID!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
      name
      username
      email
      phone
      website
    }
  }
`;

const UpdateUser = () => {
  const { match } = useRouting();
  const GET_USER = gql`
    query {
      user(id: ${match.params.id}) {
        id
        name
        username
        email
        phone
        website
      }
    }
  `;

  const { data, loading } = useQuery<{ user: User }>(GET_USER);
  const [updateUserById] = useMutation(UPDATE_USER);

  if (loading) {
    return <Loading />;
  }

  const updateUser = async ({ id, name, username, email, phone }: User) => {
    await updateUserById({
      variables: {
        id,
        input: {
          name,
          username,
          email,
          phone,
        },
      },
    });
  };

  return (
    <div>
      <UserForm onSubmit={updateUser} title="Update User" initialValues={data?.user ?? ({} as User)} mode="update" />
    </div>
  );
};

export default UpdateUser;
