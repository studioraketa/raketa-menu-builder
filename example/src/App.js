import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@raketa-cms/raketa-mir';
import { MenuBuilder } from '@raketa-cms/raketa-menu-builder';
import WIDGETS from './menu-widgets';

const App = () => {
  const [value, setValue] = React.useState({
    tab: 0,
    items: [],
  });

  return (
    <ThemeProvider theme={theme}>
      <MenuBuilder widgets={WIDGETS} value={value} onChange={setValue} />
      <pre>{JSON.stringify(value, null, 2)}</pre>
    </ThemeProvider>
  );
};

export default App;
