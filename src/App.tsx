import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import { ThemeProvider } from 'styled-components';

import { Header, Sidebar } from 'components';
import { Posts, Gallery, Users } from 'pages';
import { theme } from 'theme';
import { Routing } from 'router';

import './App.scss';

const { Content } = Layout;

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export default App;
