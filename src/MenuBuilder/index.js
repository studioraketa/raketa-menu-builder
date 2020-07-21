/* eslint-disable no-undef */
import React from 'react'
import WidgetContext from './WidgetContext'
import MainNavigation from './MainNavigation'
import ItemForm from './ItemForm'
import RowBuilder from './RowBuilder'
import { append, remove, update, rand } from './utils'
import { H } from '@raketa-cms/raketa-mir'

export default ({ widgets, value, onChange }) => {
  const [state, setState] = React.useState(value)

  const currentTab = state.tab
  const currentItem = state.items ? state.items[currentTab] : null

  const removeItem = (items, item) => {
    if (!confirm('Are you sure?')) return

    const newState = {
      ...state,
      tab: 0,
      items: remove(items, item),
    }

    setState(newState)
    if (onChange) onChange(newState)
  }

  const updateItem = (items, item) => {
    const newState = {
      ...state,
      items: update(items, item),
    }

    setState(newState)
    if (onChange) onChange(newState)
  }

  const duplicateItem = (items, item) => {
    const newState = {
      ...state,
      items: append(items, {
        ...item,
        id: rand(),
        label: `${item.label} (copy)`,
      }),
    }

    setState(newState)
    if (onChange) onChange(newState)
  }

  return (
    <WidgetContext.Provider value={widgets}>
      <MainNavigation
        items={state.items}
        tab={currentTab}
        onTab={(tab) => setState({ ...state, tab })}
        onChange={(items) => setState({ ...state, items })}
      />

      {currentItem && (
        <div>
          <ItemForm
            value={currentItem}
            onChange={(item) =>
              updateItem(state.items, { ...currentItem, ...item })
            }
            onRemove={() => removeItem(state.items, currentItem)}
            onDuplicate={() => duplicateItem(state.items, currentItem)}
          />

          <H as='h4' size='large'>
            Menu content
          </H>
          <RowBuilder
            value={currentItem}
            onChange={(item) =>
              updateItem(state.items, { ...currentItem, ...item })
            }
          />
        </div>
      )}
    </WidgetContext.Provider>
  )
}
