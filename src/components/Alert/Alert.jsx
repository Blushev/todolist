import React from "react";
import * as styled from "./Alert.styles";

export const Alert = ({ message, onConfirm, onCancel }) => (
  <styled.AlertBackground>
    <styled.AlertBox>
      <styled.AlertMessage>{message}</styled.AlertMessage>
      <styled.AlertButton onClick={onConfirm}>Yes</styled.AlertButton>
      <styled.AlertButton onClick={onCancel}>No</styled.AlertButton>
    </styled.AlertBox>
  </styled.AlertBackground>
);
