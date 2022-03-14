/* eslint-disable no-undef */
import React from 'react';
import WidgetContext from './WidgetContext';
import MainNavigation from './MainNavigation';
import ItemForm from './ItemForm';
import RowBuilder from './RowBuilder';
import { append, remove, update, rand } from './utils';
import { H } from '@raketa-cms/raketa-mir';

export default ({ widgets, value, onChange }) => {
  const currentTab = value.tab;
  const currentItem = value.items ? value.items[currentTab] : null;

  const addItem = (items) => {
    onChange({ ...value, tab: items.length, items });
  };

  const removeItem = (items, item) => {
    if (!confirm('Are you sure?')) return;

    const newState = {
      ...value,
      tab: 0,
      items: remove(items, item),
    };

    if (onChange) onChange(newState);
  };

  const updateItem = (items, item) => {
    const newState = {
      ...value,
      items: update(items, item),
    };

    if (onChange) onChange(newState);
  };

  const duplicateItem = (items, item) => {
    const newState = {
      ...value,
      items: append(items, {
        ...item,
        id: rand(),
        label: `${item.label} (copy)`,
      }),
    };

    if (onChange) onChange(newState);
  };

  return (
    <WidgetContext.Provider value={widgets}>
      <MainNavigation
        items={value.items}
        tab={currentTab}
        onTab={(tab) => onChange({ ...value, tab })}
        onChange={addItem}
      />

      {currentItem && (
        <div>
          <ItemForm
            item={currentItem}
            onChange={(item) => {
              updateItem(value.items, { ...currentItem, ...item });
            }}
            onRemove={() => removeItem(value.items, currentItem)}
            onDuplicate={() => duplicateItem(value.items, currentItem)}
          />

          <H as='h4' size='large'>
            Menu content
          </H>

          <RowBuilder
            value={currentItem}
            onChange={(item) =>
              updateItem(value.items, { ...currentItem, ...item })
            }
          />
        </div>
      )}
    </WidgetContext.Provider>
  );
};
