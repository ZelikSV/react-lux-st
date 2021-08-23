import { Link } from 'react-router-dom';
import { Layout } from 'antd';

import './styles.scss';

const { Header: ANDHeader } = Layout;

const Header = () => {
  const headerConfig = [
    { title: 'Home', path: '/' },
    { title: 'Todos', path: '/todos' },
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
