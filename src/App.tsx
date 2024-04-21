// src/App.tsx
import React, { useState } from "react";
import { Button, Layout, Switch } from "antd";
import LanguageSwitcherButton from "./components/LanguageSwitcherButton";
import PersonForm from "./components/PersonForm";
import PersonList from "./components/PersonList";
import { Divider, Space, Typography } from 'antd';
import './shape.css';
import infomation from './pages/infomation';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from "i18next";
import './i18n';
import ReactDOM from "react-dom";
import { translate } from "react-i18nify";

const { Content } = Layout;


const App: React.FC = () => {
  
  return (
    <Layout>
      <Content
        style={{
          padding: "50px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ marginRight: "auto" }}>
        </div>
        <LanguageSwitcherButton />
      </Content>
    </Layout>
  
  );
};

export default App;
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
