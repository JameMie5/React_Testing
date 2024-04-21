import React, { useState } from "react";
import { Select } from "antd";
import { setLocale } from "../i18n";

const { Option } = Select;

const LanguageButton = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string>("th");

  const changeLanguage = (locale: string) => {
    setLocale(locale);
    setCurrentLanguage(locale);
  };

  return (
    <>
      <Select
        defaultValue="th"
        style={{ width: 120 }}
        onChange={(value) => changeLanguage(value)}
      >
        <Option value="en">English</Option>
        <Option value="th">ไทย</Option>
      </Select>
    </>
  );
};

export default LanguageButton;
