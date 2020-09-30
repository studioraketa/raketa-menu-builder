import React from 'react';
import { Input } from '@raketa-cms/raketa-mir';

const HTML = ({ code }) => (
  <div className='html-widget' dangerouslySetInnerHTML={{ __html: code }} />
);

// HTML.primaryField = 'title';

HTML.defaults = {
  code: '<div>HTML</div>',
};

HTML.admin = ({ settings, onChange }) => {
  return (
    <>
      <Input
        as='textarea'
        name='code'
        value={settings.code}
        onChange={(e) => onChange('code', e.target.value)}
      />
    </>
  );
};

export default HTML;
