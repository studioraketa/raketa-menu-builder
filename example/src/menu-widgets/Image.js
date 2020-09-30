import React from 'react';
import { Select, Input, FormGroup, Label } from '@raketa-cms/raketa-mir';

const extractWebpPath = (path) => {
  const arrayPath = path.split('.');
  arrayPath[arrayPath.length - 1] = 'webp';

  return arrayPath.join('.');
};

const Image = ({ image }) => (
  <picture>
    <source srcSet={extractWebpPath(image)} type='image/webp' />
    <source srcSet={image} />
    <img src={image} loading='lazy' />
  </picture>
);

Image.defaults = {
  image: 'https://placehold.it/1920x1080',
  variant: 'lead',
};

Image.admin = ({ settings, onChange }) => {
  return (
    <>
      <FormGroup>
        <Label htmlFor='image'>Image</Label>

        <Input
          name='image'
          type='text'
          value={settings.image}
          onChange={(e) => onChange('image', e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor='variant'>Variant</Label>

        <Select
          name='variant'
          value={settings.variant}
          onChange={(e) => onChange('variant', e.target.value)}
        >
          <option value='lead'>Lead</option>
          <option value='square'>Square</option>
          <option value='card_horizontal'>Card</option>
        </Select>
      </FormGroup>
    </>
  );
};

export default Image;
