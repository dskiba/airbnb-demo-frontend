import React from "react";
import { Form, Select, Option } from "./styled";

const Currency = Form.extend`
  margin-top: 48px;
  @media (min-width: 768px) {
    margin-top: 5px;
  }
`;

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
