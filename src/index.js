import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import configManager from './helpers/api/configManager';
import { configureStore } from './redux/store';



const RootApp = () => {
  useEffect(() => {
    // 页面挂载时最早预热配置
    configManager.preload();
  }, []);
  return (
    <React.StrictMode>
      <Provider store={configureStore({})}>
        <App />
      </Provider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RootApp />);