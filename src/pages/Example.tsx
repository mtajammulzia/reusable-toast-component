import React, { useContext } from "react";
import { IToast, ToastMapKey } from "../components/toast/helpers";
import { ToastContext } from "../store/contexts/ToastContext";

export const Example: React.FC = () => {
  const { toastList, setToastList } = useContext(ToastContext);

  const createToast = (type: ToastMapKey) => {
    const newToast: IToast = {
      type: type,
      title: "Random Title",
      message: "Random message but longer than title!",
    };
    setToastList([...toastList, newToast]);
  };

  return (
    <div className="example-page">
      <h3>Toast Maker</h3>
      <button className="success" onClick={() => createToast("success")}>
        Success Toast
      </button>
      <button className="error" onClick={() => createToast("error")}>
        Error Toast
      </button>
      <button className="info" onClick={() => createToast("info")}>
        Info Toast
      </button>
      <button className="warning" onClick={() => createToast("warning")}>
        Warning Toast
      </button>
    </div>
  );
};
