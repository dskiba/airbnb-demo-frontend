import React from 'react';
import { Form, Select, Option } from './styled';

const Language = Form.extend`
  margin-top: 48px;
`;

export default () => (
  <Language>
    <Select name="language">
      <Option value="English">English</Option>
      <Option value="Russian">Russian</Option>
    </Select>
  </Language>
);
