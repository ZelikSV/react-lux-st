import React, { FC } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { Loading } from 'components';

import { Post } from '../PostsList/PostsList.types';
import PostForm from '../PostForm/PostForm';

const PostUpdate: FC = () => {
  const params = useParams<{ id: string }>();
  const GET_POST_ITEM = gql`
    query {
      post(id: ${params.id}) {
        id
        title
        body
      }
    }
  `;

  const UPDATE_POST_ITEM = gql`
    mutation ($id: ID!, $input: UpdatePostInput!) {
      updatePost(id: $id, input: $input) {
        id
        body
      }
    }
  `;

  const { data, loading } = useQuery<{ post: Post }>(GET_POST_ITEM);
  const [updatePostItem] = useMutation(UPDATE_POST_ITEM);

  if (loading) {
    return <Loading />;
  }

  const updateItem = async ({ id, body }: Post) => {
    await updatePostItem({
      variables: {
        id,
        input: {
          body,
        },
      },
    });
  };

  return <PostForm title="Update Post Item" initialValues={data?.post ?? {}} onSubmit={updateItem} mode="update" />;
};

export default PostUpdate;
