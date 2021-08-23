import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CreatePost from './CreatePost/CreatePost';
import PostsList from './PostsList/PostsList';
import PostUpdate from './PostUpdate/PostUpdate';

const Posts = () => {
  return (
    <Switch>
      <Route path="/new-post" exact component={CreatePost} />
      <Route path="/" exact component={PostsList} />
      <Route path="/:id" exact component={PostUpdate} />
    </Switch>
  );
};

export default Posts;
