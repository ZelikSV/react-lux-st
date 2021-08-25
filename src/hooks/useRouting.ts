import { useLocation, useHistory, useRouteMatch } from 'react-router-dom';
import { formatRoute } from 'react-router-named-routes';

import { setParams } from 'utils/params';

const useRouting = () => {
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch<{ [key: string]: any }>();

  const getParams = (params?: string[]) => {
    const searchParams = new URLSearchParams(location.search);
    const paramsObj: { [key: string]: any } = {};

    if (params?.length) {
      return params.reduce((acc: Record<string, string | null>, name) => {
        acc[name] = searchParams.get(name);

        return acc;
      }, {});
    }

    searchParams.forEach((value, key) => {
      paramsObj[key] = JSON.parse(value);
    });

    return paramsObj;
  };

  const redirectTo = (path: string, state?: { [key: string]: any }) => {
    history.push(path, state);
  };

  return {
    getParams,
    setParams,
    redirectTo,
    formatRoute,
    match,
    location,
    history,
  };
};

export default useRouting;
