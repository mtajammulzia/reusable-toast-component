import styled, { keyframes } from "styled-components";

export const ToastWrapper = styled.div`
  width: 425px;
  position: absolute;
  bottom: 50px;
  left: 10px;
  overflow: hidden;
`;

const slideIn = keyframes`
    0% { transform: translateX(-500px)}
    30% { transform: translateX(0px)}
    70% { transform: translateX(0px)}
    100% { transform: translateX(-500px)}
`;

export const Toast = styled.div`
  margin: 20px 0;
  width: 360px;
  height: auto;
  padding: 5px 20px;
  background-color: #fff;
  box-shadow: 0 10px 20px rgba(75, 50, 50, 0.35);
  border-left: 8px solid ${(props) => props.color};
  border-radius: 7px;
  display: grid;
  grid-template-columns: 1fr 6fr 0.5fr;
  animation-name: ${slideIn};
  animation-duration: 5s;
  transform: translate(-500px);
`;

export const Container1 = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  background: ${(props) => props.color};
  font-size: 32px;
  border-radius: 4px;
  color: #fff;
`;

export const Container2 = styled.div`
  padding: 10px 20px;
  align-self: center;
`;

export const ToastTitle = styled.p`
  color: #101020;
  font-weight: 600;
  font-size: 16px;
`;

export const ToastMessage = styled.p`
  color: #101020;
  font-weight: 400;
  font-size: 12px;
`;

export const ToastButton = styled.button`
  align-self: center;
  background-color: transparent;
  line-height: 0;
  border: none;
  font-size: 25px;
  color: #656565;
  cursor: pointer;
`;
