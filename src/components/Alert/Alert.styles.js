import styled from 'styled-components';

export const AlertBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AlertBox = styled.div`
  background: white;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const AlertMessage = styled.p`
  margin: 0 0 20px;
`;

export const AlertButton = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
`;