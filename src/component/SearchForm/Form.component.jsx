import React from 'react';

import { Form } from 'react-bootstrap';

import Input from '../Form-inupt-field/Form-input-field';

import CustomButton from '../Custom-Button/CustomButton';

import './Form.component.scss';

const Forms = ({ handelSumbit, handelChange }) => (
  <Form className="search-form" onSubmit={handelSumbit}>
    <Form.Group style={{ display: 'flex' }}>
      <Input handelChange={handelChange} type="text" placeholder="Search Movies" />
      <CustomButton type="submit">Search</CustomButton>
    </Form.Group>
  </Form>
);

export default Forms;
