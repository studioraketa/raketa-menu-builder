import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@raketa-cms/raketa-mir';

export default ({ Component, settings, onChange, onCancel }) => {
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: settings,
  });

  const Form = Component.admin;

  useEffect(() => {
    Object.keys(settings).forEach((k) => {
      setValue(k, settings[k]);
    });
  }, [settings]);

  return (
    <form onSubmit={handleSubmit(onChange)}>
      <Form register={register} settings={settings} />

      <Button type="submit" variant="primary">Save</Button>
      <Button variant="secondary" onClick={onCancel}>Cancel</Button>
    </form>
  );
}
