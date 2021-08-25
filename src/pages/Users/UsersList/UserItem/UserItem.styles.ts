import styled from 'styled-components';

export const UserItemContainer = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  cursor: pointer;

  &:hover {
    box-shadow: 1px 1px 7px #ddd;
  }
`;

export const UserAvatar = styled.div`
  width: 150px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const UserInfo = styled.div`
  width: 300px;
`;
