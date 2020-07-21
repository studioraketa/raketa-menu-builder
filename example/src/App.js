import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@raketa-cms/raketa-mir'
import { MenuBuilder } from '@raketa-cms/raketa-menu-builder'
import WIDGETS from './menu-widgets'

const MegaMenu = ({ value, onChange }) => {
  const [menu, setMenu] = React.useState({
    tab: 0,
    items: value,
  })

  const onUpdate = (newMenu) => {
    setMenu(newMenu)
    onChange(newMenu.items)
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <MenuBuilder
          widgets={WIDGETS}
          value={menu}
          onChange={(newMenu) => onUpdate(newMenu)}
        />
      </ThemeProvider>
    </>
  )
}

const App = () => {
  const [value, setValue] = React.useState([])

  return <MegaMenu value={value} onChange={setValue} />
}

export default App
