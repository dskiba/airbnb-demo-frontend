import React from "react";
import { Form, Select, Option } from "./styled";

const LanguageForm = Form.extend``;

export default () => {
  return (
    <LanguageForm>
      <Select name="language">
        <Option value="English">English</Option>
        <Option value="Russian">Russian</Option>
      </Select>
    </LanguageForm>
  );
};
