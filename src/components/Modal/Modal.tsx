import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

interface ModalProps {
  buttonLabel?: string;
  isOpen: boolean;
  className: string;
  modalTitle: string;
  modalSubmitBtnText: string;
  modalSubmitBtnCallback: () => void;
  toggle: () => void;
}

const ModalComp: React.FC<ModalProps> = ({
  children,
  buttonLabel,
  className,
  isOpen,
  toggle,
  modalTitle,
  modalSubmitBtnText,
  modalSubmitBtnCallback,
}) => {
  return (
    <div>
      {buttonLabel && (
        <Button color="danger" onClick={toggle}>
          {buttonLabel}
        </Button>
      )}
      <Modal isOpen={isOpen} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{modalTitle}</ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={modalSubmitBtnCallback}>
            {modalSubmitBtnText}
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalComp;
