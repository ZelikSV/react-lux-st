import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import { Header, Sidebar } from 'components';
import { Posts, Gallery, Users } from 'pages';
import { Routing } from 'router';

import './App.scss';

const { Content } = Layout;

const App: FC = () => {
  return (
    <Router>
      <Header />
      <Layout>
        <Sidebar />
        <Layout>
          <Content className="content">
            <Switch>
              <Route path={Routing.Gallery} component={Gallery} />
              <Route path={Routing.Users} component={Users} />
              <Route path={Routing.Posts} component={Posts} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
