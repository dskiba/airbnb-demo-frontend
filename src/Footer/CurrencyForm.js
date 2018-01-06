import React from "react";
import { Form, Select, Option } from "./styled";

const Currency = Form.extend``;

export default () => {
  return (
    <Currency>
      <Select name="currency">
        <Option value="English" selected>
          United States dollar
        </Option>
        <Option value="Russian">Rubles</Option>
      </Select>
    </Currency>
  );
};
