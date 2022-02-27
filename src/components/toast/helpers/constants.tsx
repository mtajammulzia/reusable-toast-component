import {
  FaCheck,
  FaTimes,
  FaInfoCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import { ToastMap } from ".";

export const toastMap: ToastMap = {
  success: {
    color: "#47d764",
    icon: <FaCheck />,
  },
  error: {
    color: "#ff5670",
    icon: <FaTimes />,
  },
  info: {
    color: "#2d8cf0",
    icon: <FaInfoCircle />,
  },
  warning: {
    color: "#d59f16",
    icon: <FaExclamationCircle />,
  },
};
