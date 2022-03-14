import { rand } from './utils';

export default {
  item: () => ({
    id: rand(4),
    label: 'New item',
    url: '#',
    target: '',
    rows: [],
  }),
  row: () => ({ id: rand(4), columns: [] }),
  column: () => ({ id: rand(4), widgets: [] }),
  widget: (component, settings) => ({ id: rand(4), component, settings }),
};
