import React from 'react';
import { Copy, Delete } from './icons';
import {
  Button,
  Toolbar,
  FormGroup,
  Label,
  Input,
  Select,
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
              ...item,
              label: e.target.value,
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
              ...item,
              url: e.target.value,
            })
          }
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor='target'>Target</Label>

        <Select
          name='target'
          value={item.target}
          onChange={(e) =>
            onChange({
              ...item,
              target: e.target.value,
            })
          }
        >
          <option value=''>Please select</option>
          <option value='_self'>Open in same tab</option>
          <option value='_blank'>Open in new tab</option>
        </Select>
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
