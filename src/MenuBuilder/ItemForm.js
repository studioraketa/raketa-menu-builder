import React from 'react';
import { Copy, Delete } from './icons';
import { Button, Toolbar, Input, Stack } from '@raketa-cms/raketa-mir';

export default ({ item, onChange, onRemove, onDuplicate }) => (
  <div>
    <Stack>
      <Input
        name='label'
        label='Label'
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
      <Input
        name='url'
        label='URL'
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
