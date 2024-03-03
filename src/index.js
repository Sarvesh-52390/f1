import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import ExpenseTracker from './Tracker/ExpenseTracker';
// import BillSplitter from './BillSplitter/BillSplitter';
import App1 from './file copy/App1';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<App1/>
 {/* <BillSplitter/> */}
 {/* <ExpenseTracker/> */}
  </React.StrictMode>
);

reportWebVitals();
