import React from "react";
import "./App.css";
import { Toast } from "./components";
import { Example } from "./pages";
import { ToastProvider } from "./store/providers/ToastProvider";

const App: React.FC = () => {
  return (
    <div className="App">
      <ToastProvider>
        <Toast />
        <Example />
      </ToastProvider>
    </div>
  );
};

export default App;
