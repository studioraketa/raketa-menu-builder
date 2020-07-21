import React from 'react';
import { Field } from '@raketa-cms/raketa-mir';

const HTML = ({ code }) => (
  <div className="html-widget" dangerouslySetInnerHTML={{ __html: code }} />
);

// HTML.primaryField = 'title';

HTML.defaults = {
  code: '<div>HTML</div>',
};

HTML.admin = ({ register }) => {
  return (
    <>
      <Field r={register} as="textarea" name="code" label="Code" required />
    </>
  );
};

export default HTML;
