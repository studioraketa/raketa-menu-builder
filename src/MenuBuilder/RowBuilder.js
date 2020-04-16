import React, { useEffect } from 'react'
import { ReactSortable } from 'react-sortablejs'
import Factories from './Factories'
import { remove, update } from './utils'
import ColumnBuilder from './ColumnBuilder'
import { Delete } from './icons'
import {
  Button,
  Toolbar,
  Stack,
  Handle,
  Panel,
  PanelTitle,
  PanelContent,
} from '@raketa-cms/raketa-mir'

export default ({ value, onChange }) => {
  const [state, setState] = React.useState(value)

  useEffect(() => {
    setState(value)
  }, [value])

  const addRow = (items, item) => {
    const newState = {
      ...state,
      rows: [...items, item],
    }

    setState(newState)
    onChange(newState)
  }

  const updateRow = (items, item) => {
    const newState = {
      ...state,
      rows: update(items, item),
    }

    setState(newState)
    onChange(newState)
  }

  const removeRow = (items, item) => {
    if (!confirm('Are you sure?')) return

    const newState = {
      ...state,
      rows: remove(items, item),
    }

    setState(newState)
    onChange(newState)
  }

  const reorder = (rows) => {
    const newState = { ...state, rows }

    setState(newState)
    onChange(newState)
  }

  return (
    <React.Fragment>
      <ReactSortable
        list={state.rows}
        setList={(rows) => reorder(rows)}
        handle='.r-handle'
        direction='vertical'
      >
        {state.rows.map((row, idx) => (
          <Panel key={row.id}>
            <PanelTitle>
              <Stack v='center'>
                <Handle className='r-handle' />
                Row #{idx + 1}
              </Stack>
              <Button
                variant='secondary'
                onClick={() => removeRow(state.rows, row)}
              >
                <Delete />
              </Button>
            </PanelTitle>

            <PanelContent>
              <ColumnBuilder
                value={row}
                onChange={(row) => updateRow(state.rows, row)}
              />
            </PanelContent>
          </Panel>
        ))}
      </ReactSortable>

      <Toolbar>
        <Button
          variant='secondary'
          onClick={() => addRow(state.rows, Factories.row())}
        >
          Add row
        </Button>
      </Toolbar>
    </React.Fragment>
  )
}
