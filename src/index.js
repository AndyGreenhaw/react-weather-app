import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Styles
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';

// React 18 root API
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
