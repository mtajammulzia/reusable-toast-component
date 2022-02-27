import React, { useState } from "react";
import { IToast } from "../../components/toast/helpers";
import { ToastContext } from "../contexts/ToastContext";

interface ToastProviderProps {
  children: React.ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toastList, setToastList] = useState<Array<IToast>>([]);
  const value = {
    toastList,
    setToastList,
  };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};
