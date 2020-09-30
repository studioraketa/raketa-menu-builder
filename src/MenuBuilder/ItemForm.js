import React from 'react';
import { Copy, Delete } from './icons';
import {
  Button,
  Toolbar,
  FormGroup,
  Label,
  Input,
  Stack,
} from '@raketa-cms/raketa-mir';

export default ({ item, onChange, onRemove, onDuplicate }) => (
  <div>
    <Stack>
      <FormGroup>
        <Label htmlFor='label'>Label</Label>

        <Input
          name='label'
          type='text'
          wrapperProps={{ style: { marginRight: '0.5em' } }}
          value={item.label}
          onChange={(e) =>
            onChange({
              id: item.id,
              label: e.target.value,
              url: item.url,
            })
          }
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor='url'>URL</Label>

        <Input
          name='url'
          type='text'
          value={item.url}
          onChange={(e) =>
            onChange({
              id: item.id,
              label: item.label,
              url: e.target.value,
            })
          }
        />
      </FormGroup>
    </Stack>

    <Toolbar>
      <Stack>
        <Button variant='secondary' onClick={onDuplicate}>
          <Copy />
        </Button>
        <Button variant='secondary' onClick={onRemove}>
          <Delete />
        </Button>
      </Stack>
    </Toolbar>
  </div>
);
