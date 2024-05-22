import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const ModalTitle = styled.h2`
  margin: 0 0 20px;
`;

export const ModalInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
`;

export const ModalButton = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
  cursor: pointer;
`;