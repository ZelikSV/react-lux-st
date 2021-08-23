import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PostsWrapper = styled.div`
  padding: 20px;
`;

export const PostsTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin: 0;
  }
`;

export const PostsContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin-top: 20px;
  width: 100%;
  height: calc(100vh - 175px);
  overflow-y: auto;
  overflow-x: visible;
`;

export const PostItem = styled(Link)`
  padding: 10px;
  color: #111;

  &:hover {
    cursor: pointer;
    color: #111;
    box-shadow: 1px 1px 7px #111;
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
