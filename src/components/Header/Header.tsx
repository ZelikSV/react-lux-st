import { Link } from 'react-router-dom';
import { Layout } from 'antd';

import { Routing } from 'router';

import './styles.scss';

const { Header: ANDHeader } = Layout;

const Header = () => {
  const headerConfig = [
    {
      title: 'Gallery',
      path: Routing.Gallery,
    },
    {
      title: 'Users',
      path: Routing.Users,
    },
    {
      title: 'Posts',
      path: Routing.Posts,
    },
  ];

  return (
    <ANDHeader>
      <ul className="header-menu">
        {headerConfig.map((el) => (
          <li key={el.title}>
            <Link to={el.path}>{el.title}</Link>
          </li>
        ))}
      </ul>
    </ANDHeader>
  );
};

export default Header;
