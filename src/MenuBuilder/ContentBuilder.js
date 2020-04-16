import React, { useEffect } from 'react'
import { ReactSortable } from 'react-sortablejs'
import WidgetContext from './WidgetContext'
import Factories from './Factories'
import AdminWidget from './AdminWidget'
import AddWidget from './AddWidget'
import { remove, update } from './utils'
import { Edit, Delete } from './icons'
import {
  Button,
  Stack,
  Handle,
  Panel,
  PanelTitle,
  Modal,
} from '@raketa-cms/raketa-mir'

const getWidget = (widgets, name) => widgets[name]
const getTitle = (widgets, widget) => {
  const primaryField = getWidget(widgets, widget.name).primaryField
  return primaryField
    ? `${widget.name}: ${widget.settings[primaryField]}`
    : widget.name
}

export default ({ value, onChange }) => {
  const [widget, setWidget] = React.useState({
    open: false,
    current: null,
  })
  const [open, setOpen] = React.useState(false)
  const [state, setState] = React.useState(value)

  useEffect(() => {
    setState(value)
  }, [value])

  const addWidget = (items, item) => {
    const newState = {
      ...state,
      widgets: [...items, item],
    }

    setOpen(false)
    setState(newState)
    onChange(newState)
  }

  const removeWidget = (items, item) => {
    if (!confirm('Are you sure?')) return

    const newState = {
      ...state,
      widgets: remove(items, item),
    }

    setState(newState)
    onChange(newState)
  }

  const reorder = (widgets) => {
    const newState = { ...state, widgets }

    setState(newState)
    onChange(newState)
  }

  const closeWidget = () => setWidget({ open: false, current: null })

  const updateWidget = (widget, settings) => {
    const newState = {
      ...state,
      widgets: update(state.widgets, { ...widget, settings }),
    }

    closeWidget()
    setState(newState)
    onChange(newState)
  }

  return (
    <WidgetContext.Consumer>
      {(WIDGETS) => (
        <React.Fragment>
          <ReactSortable
            list={state.widgets}
            setList={(widgets) => reorder(widgets)}
            handle='.r-handle'
            direction='vertical'
          >
            {state.widgets.map((widget) => (
              <Panel key={widget.id}>
                <PanelTitle>
                  <Stack v='center'>
                    <Handle className='r-handle' />
                    {getTitle(WIDGETS, widget)}
                  </Stack>

                  <Stack v='center'>
                    <Button
                      variant='secondary'
                      onClick={() => setWidget({ open: true, current: widget })}
                    >
                      <Edit />
                    </Button>
                    <Button
                      variant='secondary'
                      onClick={() => removeWidget(state.widgets, widget)}
                    >
                      <Delete />
                    </Button>
                  </Stack>
                </PanelTitle>
              </Panel>
            ))}
          </ReactSortable>

          <Button variant='secondary' onClick={() => setOpen(true)}>
            Add widget
          </Button>

          {widget.open && (
            <Modal title='Settings' open={widget.open} onClose={closeWidget}>
              <AdminWidget
                Component={getWidget(WIDGETS, widget.current.name)}
                settings={widget.current.settings}
                onChange={(settings) => updateWidget(widget.current, settings)}
                onCancel={closeWidget}
              />
            </Modal>
          )}

          {open && (
            <AddWidget
              onAdd={(widget) =>
                addWidget(
                  state.widgets,
                  Factories.widget(widget.name, widget.defaults)
                )
              }
              onClose={() => setOpen(false)}
            />
          )}
        </React.Fragment>
      )}
    </WidgetContext.Consumer>
  )
}
