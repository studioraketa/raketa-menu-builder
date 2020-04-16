import { rand } from './utils'

export default {
  item: () => ({ id: rand(4), label: 'New item', url: '#', rows: [] }),
  row: () => ({ id: rand(4), columns: [] }),
  column: () => ({ id: rand(4), widgets: [] }),
  widget: (name, settings) => ({ id: rand(4), name, settings }),
}
