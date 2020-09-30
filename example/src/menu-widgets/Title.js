import React from 'react';
import { FormGroup, Label, Input } from '@raketa-cms/raketa-mir';

const Title = ({ title }) => <h5>{title}</h5>;

Title.primaryField = 'title';

Title.defaults = {
  title: 'Title',
};

Title.admin = ({ settings, onChange }) => {
  return (
    <>
      <FormGroup>
        <Label htmlFor='title'>Title</Label>
        <Input
          name='title'
          value={settings.title}
          onChange={(e) => onChange('title', e.target.value)}
        />
      </FormGroup>
    </>
  );
};

export default Title;
