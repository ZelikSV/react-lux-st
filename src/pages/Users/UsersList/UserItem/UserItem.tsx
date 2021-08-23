import React, { FC } from 'react';
import faker from 'faker';

import useRouting from 'hooks/useRouting';
import { Routing } from 'router';

import { User } from '../UsersList.types';
import { UserItemContainer, UserAvatar, UserInfo } from './UserItem.styles';

type Props = {
  user: User;
};

const UserItem: FC<Props> = ({ user }) => {
  const { redirectTo, formatRoute } = useRouting();

  const selectUser = () => {
    redirectTo(formatRoute(Routing.UpdateUser, { id: user.id }));
  };

  return (
    <UserItemContainer onClick={selectUser}>
      <UserAvatar>
        <img src={faker.image.avatar()} alt={user.name} />
      </UserAvatar>
      <UserInfo>
        <p>{user.name}</p>
        <p>{user.phone}</p>
        <p>{user.email}</p>
      </UserInfo>
    </UserItemContainer>
  );
};

export default UserItem;
