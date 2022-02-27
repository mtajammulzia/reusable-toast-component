import React, { useContext, useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { ToastContext } from "../../store/contexts/ToastContext";
import { IToast, toastMap } from "./helpers";

import * as Styled from "./styles";

export const Toast: React.FC = () => {
  const { toastList, setToastList } = useContext(ToastContext);
  const [list, setList] = useState<Array<IToast>>([]);

  useEffect(() => {
    setList([...toastList]);
  }, [toastList]);

  useEffect(() => {
    const intervalId = setTimeout(() => {
      if (list.length && toastList.length) {
        if (toastList[0].message) deleteToast(toastList[0].message);
      }
    }, 4500);
    return () => {
      clearInterval(intervalId);
    };
  }, [toastList, list]);

  const deleteToast = (message: string) => {
    const newList = list.filter((toast) => toast.message !== message);
    setToastList([...newList]);
  };

  return (
    <Styled.ToastWrapper>
      {list.map((toast, index) => {
        const { type, title, message } = toast;
        const { color, icon } = toastMap[type];
        return (
          <Styled.Toast key={message + index} color={color}>
            <Styled.Container1 color={color}>{icon}</Styled.Container1>
            <Styled.Container2>
              <Styled.ToastTitle>{title}</Styled.ToastTitle>
              <Styled.ToastMessage>{message}</Styled.ToastMessage>
            </Styled.Container2>
            <Styled.ToastButton>
              <FaTimes />
            </Styled.ToastButton>
          </Styled.Toast>
        );
      })}
    </Styled.ToastWrapper>
  );
};
