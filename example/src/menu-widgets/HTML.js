import React from 'react';
import { FormGroup, Label, Input } from '@raketa-cms/raketa-mir';

const HTML = ({ code }) => (
  <div className='html-widget' dangerouslySetInnerHTML={{ __html: code }} />
);

HTML.defaults = {
  code: '<div>HTML</div>',
};

HTML.admin = ({ settings, onChange }) => {
  return (
    <>
      <FormGroup>
        <Label htmlFor='code'></Label>

        <Input
          as='textarea'
          name='code'
          value={settings.code}
          onChange={(e) => onChange('code', e.target.value)}
        />
      </FormGroup>
    </>
  );
};

export default HTML;
