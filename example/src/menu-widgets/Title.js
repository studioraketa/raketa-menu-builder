import React from 'react';
import { Input } from '@raketa-cms/raketa-mir';

const Title = ({ title }) => <h5>{title}</h5>;

Title.primaryField = 'title';

Title.defaults = {
  title: 'Title',
};

Title.admin = ({ settings, onChange }) => {
  return (
    <>
      <Input
        name='title'
        value={settings.title}
        onChange={(e) => onChange('title', e.target.value)}
      />
    </>
  );
};

export default Title;
