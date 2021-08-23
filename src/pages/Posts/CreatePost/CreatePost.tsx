import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

import PostForm from '../PostForm/PostForm';
import { Post } from '../PostsList/PostsList.types';

const CREATE_POST_ITEM = gql`
  mutation ($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
`;

const CreatePost = () => {
  const [createPostItem] = useMutation(CREATE_POST_ITEM);
  const [data, setData] = useState({
    post: {
      id: '',
      body: '',
      title: '',
    },
  });

  const handleNewFields = async ({ title, body, id }: Post) => {
    setData({ post: { id, title, body } });
    await createPostItem({
      variables: {
        input: {
          title,
          body,
        },
      },
    });
  };

  return <PostForm title="Create New Post" initialValues={data.post} onSubmit={handleNewFields} mode="create" />;
};

export default CreatePost;
