import React from "react";
import { ToastContainer } from "react-toastify";
import Routing from "./Routes/Routing";
function App() {
  return (
    <div>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
{/* Same as */}
<ToastContainer />
      <Routing />

    </div>
  );
}

export default App;
