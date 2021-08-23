import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Routing } from 'router';

import CreatePost from './CreatePost/CreatePost';
import PostsList from './PostsList/PostsList';
import PostUpdate from './PostUpdate/PostUpdate';

const Posts = () => {
  return (
    <Switch>
      <Route path={Routing.NewPost} exact component={CreatePost} />
      <Route path={Routing.Posts} exact component={PostsList} />
      <Route path={Routing.UpdatePost} exact component={PostUpdate} />
    </Switch>
  );
};

export default Posts;
