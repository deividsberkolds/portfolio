import React from 'react';
import { Alert } from 'reactstrap';

interface AlertProps {
  alertText: string;
  isOpen: boolean;
  toggle: () => void;
  alertType: string;
}

const AlertBanner: React.FC<AlertProps> = ({alertText, isOpen, toggle, alertType}) => {

  return (
    <Alert color={alertType} isOpen={isOpen} toggle={toggle}>
      {alertText}
    </Alert>
  );
}

export default AlertBanner;
