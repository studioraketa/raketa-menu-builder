import React from 'react';
import { Button } from '@raketa-cms/raketa-mir';

export default ({ Component, settings, onChange, onCancel }) => {
  const [state, setState] = React.useState(settings);
  const Form = Component.admin;

  return (
    <div>
      <Form
        settings={state}
        onChange={(key, value) => {
          setState({ ...state, ...{ [key]: value } });
        }}
      />

      <Button
        type='submit'
        variant='primary'
        onClick={() => onChange({ ...state })}
      >
        Save
      </Button>
      <Button variant='secondary' onClick={onCancel}>
        Cancel
      </Button>
    </div>
  );
};
