import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import AppWithContext from './AppWithContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="flex-col width-full">
      <p className="banner">
        💡 Example of state radio vs react context, use react developer tools
        broswer extension and enable highlight re-renders to see the performance
        difference!
      </p>
      <main className="responsive-flex">
        <App />
        <AppWithContext />
      </main>
    </div>
  </React.StrictMode>
);
