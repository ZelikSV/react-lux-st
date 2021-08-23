import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import { Header, Sidebar } from 'components';
import { Posts, Todos } from 'pages';

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
              <Route path="/todos" component={Todos} />
              <Route path="/" component={Posts} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
