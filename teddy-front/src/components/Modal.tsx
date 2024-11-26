import React from "react";
import { ModalOverlay, ModalContent, ModalButtons, Button } from "../styles/pages/Clientes.styles";

interface ModalProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  title,
  children,
  isOpen,
  onClose,
  onConfirm,
  confirmLabel = "Confirmar",
  cancelLabel = "Cancelar",
}) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>{title}</h2>
        {children}
        <ModalButtons>
          <Button onClick={onClose}>{cancelLabel}</Button>
          {onConfirm && <Button onClick={onConfirm}>{confirmLabel}</Button>}
        </ModalButtons>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
