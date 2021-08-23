import React from 'react';
import { gql, useQuery } from '@apollo/client';

import { Loading } from 'components';

import { User } from './UsersList.types';
import { UsersListContainer } from './UsersList.styles';
import UserItem from './UserItem/UserItem';

const GET_USERS = gql`
  query ($options: PageQueryOptions) {
    users(options: $options) {
      data {
        id
        name
        email
        phone
      }
    }
  }
`;

const UsersList = () => {
  const { loading, data } = useQuery<{ users: { data: User[] } }>(GET_USERS, {
    variables: {
      options: {
        paginate: {
          page: 1,
          limit: 100,
        },
      },
    },
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <UsersListContainer>
      {data?.users.data.map((user) => {
        return <UserItem key={user.id} user={user} />;
      })}
    </UsersListContainer>
  );
};

export default UsersList;
