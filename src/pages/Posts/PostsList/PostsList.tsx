import React, { FC } from 'react';
import { gql, useQuery } from '@apollo/client';

import { Loading } from 'components';
import useRouting from 'hooks/useRouting';

import { Post } from './PostsList.types';
import { PostsWrapper, PostsTitle, PostsContainer, PostItem, CreateButton } from './PostsList.styles';

const GET_POSTS = gql`
  query ($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
        body
      }
      meta {
        totalCount
      }
    }
  }
`;

const PostsList: FC = () => {
  const { formatRoute } = useRouting();
  const { loading, data } = useQuery<{ posts: { data: Post[] } }>(GET_POSTS, {
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
    return <Loading customClass="postsList-spinner" />;
  }

  return (
    <PostsWrapper>
      <PostsTitle>
        <h2>Posts Page</h2>
        <CreateButton to="/posts/new-post">Create new post</CreateButton>
      </PostsTitle>

      <PostsContainer>
        {data?.posts.data.map((el: Post) => (
          <PostItem key={el.id} to={formatRoute('post/:id', { id: el.id })}>
            <h3>{el.title}</h3>
            <p>{el.body}</p>
          </PostItem>
        ))}
      </PostsContainer>
    </PostsWrapper>
  );
};

export default PostsList;
