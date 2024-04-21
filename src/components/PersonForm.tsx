import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Input, Button, Select, Checkbox } from "antd";
import { addPerson } from "../features/person/personSlice";
import { Person } from "../features/person/personTypes";
import { I18n, t } from "react-i18nify";
import { DatePicker } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const PersonForm: React.FC = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values: Person) => {
    setLoading(true);
    dispatch(addPerson(values));
    form.resetFields();
    setLoading(false);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const prefixOptions = [
    { label: "นาย", value: "นาย" },
    { label: "นาง", value: "นาง" },
    { label: "นางสาว", value: "นางสาว" },
  ];

  const nationalityOptions = [
    { label: "ไทย", value: "ไทย" },
    { label: "สหรัฐอเมริกา", value: "สหรัฐอเมริกา" },
    { label: "อังกฤษ", value: "อังกฤษ" },
    { label: "ญี่ปุ่น", value: "ญี่ปุ่น" },
    { label: "จีน", value: "จีน" },
    { label: "ออสเตรเลีย", value: "ออสเตรเลีย" },
    { label: "แคนาดา", value: "แคนาดา" },
    { label: "เยอรมนี", value: "เยอรมนี" },
    { label: "ฝรั่งเศส", value: "ฝรั่งเศส" },
    { label: "อิตาลี", value: "อิตาลี" },
  ];

  return (
    <div>
      <h1>{t('Information')}</h1>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "80%", padding: "40px" }}>
        <Form
          {...layout}
          form={form}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <div style={{ display: "flex" }}>
            <Form.Item
              label={t("Prefix")}
              name="Prefix"
              rules={[
                { required: true, message: "Please select your Prefix!" },
              ]}
              style={{ width: "20%" }}
            >
              <Select>
                {prefixOptions.map((option) => (
                  <Select.Option key={option.value} value={option.value}>
                    {option.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              label={t("FirstName")}
              name="firstName"
              rules={[
                { required: true, message: "Please input your first name!" },
              ]}
              style={{ width: "40%" }}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={t("LastName")}
              name="lastName"
              rules={[
                { required: true, message: "Please input your last name!" },
              ]}
              style={{ width: "40%" }}
            >
              <Input />
            </Form.Item>
          </div>
          <div style={{ display: "flex" }}>
            <Form.Item
              label={t("Birthday")}
              name="birthday"
              rules={[
                { required: true, message: "Please select your birthday!" },
              ]}
              style={{ width: "50%" }}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
              label={t("Nationality")}
              name="nationality"
              rules={[
                { required: true, message: "Please select your nationality!" },
              ]}
              style={{ width: "50%" }}
            >
              <Select>
                {nationalityOptions.map((option) => (
                  <Select.Option key={option.value} value={option.value}>
                    {option.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </div>

          <Form.Item
            label={t("IDCardNumber")}
            name="IDcardnumber"
            rules={[
              { required: true, message: "Please input your ID Card Number!" },
            ]}
            style={{ width: "50%" }}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={t("Gender")}
            name="gender"
            rules={[{ required: true, message: "Please select your Gender!" }]}
            style={{ width: "50%" }}
          >
            <Checkbox.Group>
              <Checkbox value="male">ชาย</Checkbox>
              <Checkbox value="female">หญิง</Checkbox>
              <Checkbox value="other">อื่น ๆ</Checkbox>
            </Checkbox.Group>
          </Form.Item>

          <Form.Item
            label={t("PhoneNumber")}
            name="PhoneNumber"
            rules={[
              { required: true, message: "Please input your Phone Number!" },
            ]}
            style={{ width: "50%" }}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={t("Passport")}
            name="passport"
            rules={[{ required: true, message: "Please input your passport!" }]}
            style={{ width: "50%" }}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={t("ExpectedSalary")}
            name="expectedsalary"
            rules={[
              { required: true, message: "Please input your Expected Salary!" },
            ]}
            style={{ width: "50%" }}
          >
            <Input />
          </Form.Item>
          <div style={{ display: "flex" }}>
            <Form.Item
              label={t("Age")}
              name="age"
              rules={[{ required: true, message: "Please input your age!" }]}
              style={{ width: "50%" }}
            >
              <Input type="number" />
            </Form.Item>

            <Form.Item style={{ width: "50%" }} {...tailLayout}>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                style={{ marginRight: "20px", width: "100px" }}
              >
                Send
              </Button>
              <Button
                htmlType="button"
                onClick={() => form.resetFields()}
                style={{ width: "100px" }}
              >
                Clear
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
    </div>
  );
};

export default PersonForm;
