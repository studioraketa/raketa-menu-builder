import React from 'react';
import { Field } from '@raketa-cms/raketa-mir';

const Title = ({ title }) => (
  <h5>{title}</h5>
);

Title.primaryField = 'title';

Title.defaults = {
  title: 'Title',
};

Title.admin = ({ register }) => {
  return (
    <>
      <Field r={register} name="title" label="Title" required />
    </>
  );
};

export default Title;
