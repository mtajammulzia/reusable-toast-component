import { createContext } from "react";
import { IToastContext } from "../../components/toast/helpers";

export const ToastContext = createContext<IToastContext>({
  toastList: [],
  setToastList: () => {},
});
