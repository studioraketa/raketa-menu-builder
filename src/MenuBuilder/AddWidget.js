import React from 'react'
import styled from 'styled-components'
import { Modal, buttonReset } from '@raketa-cms/raketa-mir'
import WidgetContext from './WidgetContext'

const WidgetButton = styled.button`
  ${buttonReset};
  width: 100%;
  margin-bottom: 0.5em;
  padding: 1em;
  border: 1px solid ${(props) => props.theme.colors.gray};
  border-radius: 3px;
  font-weight: 500;
  text-align: left;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryLight};
    border-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primary};
  }
`

export default ({ onAdd, onClose }) => {
  return (
    <Modal open title='Select widget' onClose={onClose}>
      <WidgetContext.Consumer>
        {(WIDGETS) => (
          <React.Fragment>
            {Object.keys(WIDGETS).map((widgetName) => (
              <WidgetButton
                key={widgetName}
                onClick={() => onAdd(widgetName, WIDGETS[widgetName])}
              >
                {widgetName}
              </WidgetButton>
            ))}
          </React.Fragment>
        )}
      </WidgetContext.Consumer>
    </Modal>
  )
}
