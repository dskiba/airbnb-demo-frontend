import React from "react";
import { Form, Select, Option } from "./styled";

const CurrencyForm = Form.extend``;

export default () => {
  return (
    <CurrencyForm>
      <Select name="currency">
        <Option value="English" selected>
          United States dollar
        </Option>
        <Option value="Russian">Rubles</Option>
      </Select>
    </CurrencyForm>
  );
};
