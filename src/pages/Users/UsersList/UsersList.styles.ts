import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const UsersListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: calc(100vh - 146px);
  overflow: auto;
`;

export const UsersListWrapper = styled.div`
  padding: 20px;
`;

export const UsersListTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin: 0;
  }
`;

export const CreateButton = styled(Link)`
  background: green;
  border-radius: 5px;
  padding: 10px;
  color: #fff;

  &:hover {
    cursor: pointer;
    color: #fff;
    box-shadow: 1px 1px 7px green;
  }
`;
