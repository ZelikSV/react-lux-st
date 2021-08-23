import React, { FC } from 'react';
import { Spin } from 'antd';

import './styles.scss';

type Props = {
  customClass?: string;
};

const Loading: FC<Props> = ({ customClass }) => {
  return (
    <div className={`spinner ${customClass ?? ''}`}>
      <Spin />
    </div>
  );
};

export default Loading;
