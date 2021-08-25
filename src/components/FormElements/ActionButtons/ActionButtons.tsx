import React, { FC } from 'react';
import { Button } from 'antd';

import { SubmitButton, ActionWrapper } from './ActionButtons.styles';

type Props = {
  submitButtonTitle?: string;
  cancelAction?: () => void;
};

const ActionButtons: FC<Props> = ({ cancelAction, submitButtonTitle = 'Save' }) => {
  return (
    <ActionWrapper>
      <SubmitButton type="primary" htmlType="submit">
        {submitButtonTitle}
      </SubmitButton>
      <Button onClick={cancelAction}>Cancel</Button>
    </ActionWrapper>
  );
};

export default ActionButtons;
