// App.js
import React from "react";
import Myportfolio from "./Components/Myportfolio";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Myportfolio />
      <ToastContainer
       position="top-right" // Position of the toast container
        autoClose={3000}      // Time in milliseconds after which toast automatically closes
        hideProgressBar={false} // Whether to hide the progress bar of the toast
        newestOnTop={false}    // Whether new toasts should appear on top
        closeOnClick        // Close toast on click
        rtl={false}          // Right-to-left layout support
        pauseOnFocusLoss    // Pause toast when the window loses focus
        draggable           // Allow dragging to close the toast
        pauseOnHover        // Pause toast when hovering over
        theme="dark"
      />
    </>
  );
}

export default App;
