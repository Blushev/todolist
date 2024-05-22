import styled from 'styled-components';

export const TaskItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

export const TaskTitle = styled.span`
  flex: 1;
`;

export const TaskActions = styled.div`
  display: flex;
  gap: 10px;
`;

export const TaskButton = styled.button`
  padding: 5px 10px;
  cursor: pointer;
`;
