export const rand = (length) => Math.random().toString(36).substring(length);

export const remove = (items, item) => {
  const idx = items.findIndex(i => i.id === item.id);
  return [
    ...items.slice(0, idx),
    ...items.slice(idx + 1),
  ];
}

export const update = (items, item) => {
  const idx = items.findIndex(i => i.id === item.id);

  return [
    ...items.slice(0, idx),
    item,
    ...items.slice(idx + 1),
  ];
}

export const append = (items, item) => [...items, item];
