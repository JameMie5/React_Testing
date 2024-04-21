import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import PersonForm from "./PersonForm";
import PersonList from "./PersonList";
import Shape from './Shape';
import { I18n, t } from "react-i18nify";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: t("Shape"),
    children: (
        <>
          <Shape/>
        </>
      ),
  },
  {
    key: "2",
    label: t("Information"),

    children: (
      <>
        <PersonForm />
        <PersonList />
      </>
    ),
  },
];

const App: React.FC = () => (
  <Tabs  defaultActiveKey="1" items={items} onChange={onChange} />
);

export default App;
