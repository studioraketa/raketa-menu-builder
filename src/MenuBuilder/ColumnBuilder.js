import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ReactSortable } from "react-sortablejs";
import Factories from './Factories';
import { append, remove, update, rand } from './utils';
import { Copy, Delete } from './icons';
import { Button, Toolbar, Stack, Handle, Panel, PanelTitle, PanelContent } from '@raketa-cms/raketa-mir';
import ContentBuilder from './ContentBuilder';

const Wrapper = styled.div`
  .r-list { display: flex; }
`;

export default ({ value, onChange }) => {
  const [state, setState] = React.useState(value);

  useEffect(() => {
    setState(value);
  }, [value]);

  const addColumn = (items, item) => {
    const newState = {
      ...state,
      columns: [
        ...items,
        item,
      ]
    };

    setState(newState);
    onChange(newState);
  };

  const updateColumn = (items, item) => {
    const newState = {
      ...state,
      columns: update(items, item),
    };

    setState(newState);
    onChange(newState);
  }

  const duplicateColumn = (items, item) => {
    const newState = {
      ...state,
      columns: append(items, { ...item, id: rand(), label: `${item.label} (copy)` }),
    };

    setState(newState);
  };

  const removeColumn = (items, item) => {
    if (!confirm('Are you sure?')) return;

    const newState = {
      ...state,
      columns: remove(items, item),
    };

    setState(newState);
    onChange(newState);
  }

  const reorder = (columns) => {
    const newState = { ...state, columns };

    setState(newState);
    onChange(newState);
  }

  return (
    <Wrapper>
      <Toolbar>
        <Button variant="secondary" onClick={() => addColumn(state.columns, Factories.column())}>Add column</Button>
      </Toolbar>

      <ReactSortable list={state.columns} setList={(columns) => reorder(columns)} className="r-list" handle=".r-chandle" direction="vertical">
        {state.columns.map((column, idx) => (
          <Panel key={column.id} style={{ flex: 1, marginRight: '0.5em' }}>
            <PanelTitle>
              <Stack v="center">
                <Handle className="r-chandle" />
                Column #{idx + 1}
              </Stack>

              <Stack v="center">
                <Button variant="secondary" onClick={() => duplicateColumn(state.columns, column)}><Copy /></Button>
                <Button variant="secondary" onClick={() => removeColumn(state.columns, column)}><Delete /></Button>
              </Stack>
            </PanelTitle>

            <PanelContent>
              <ContentBuilder
                value={column}
                onChange={(column) => updateColumn(state.columns, column)}
              />
            </PanelContent>
          </Panel>
        ))}
      </ReactSortable>
    </Wrapper>
  );
};
