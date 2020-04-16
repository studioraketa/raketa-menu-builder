import React from 'react';
import styled from 'styled-components';
import { ReactSortable } from "react-sortablejs";
import { append } from './utils';
import Factories from './Factories';
import { Plus } from './icons';
import { Button, Stack, Container, Handle, buttonReset } from '@raketa-cms/raketa-mir';

const Item = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5em;
  border: 1px solid ${props => props.active ? props.theme.colors.primary : props.theme.colors.gray};
  border-radius: 3px;
  background-color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.white};
  transition: 0.1s ease-in-out all;

  &:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  }
`;

const TabButton = styled.button`
  ${buttonReset};
  padding: 0.95em;
  padding-left: 0;
  color: ${props => props.active ? props.theme.colors.white : props.theme.colors.black};
  font-weight: 500;
`;

export default ({ items, tab, onTab, onChange }) => (
  <Container bottom>
    <Stack>
      <ReactSortable
        list={items}
        setList={onChange}
        handle=".r-handle"
        direction="horizontal"
        dragoverBubble={true}
      >
        {items.map((item, idx) => (
          <Item key={item.id} active={idx === tab}>
            <Handle className="r-handle" active={idx === tab} />
            <TabButton type="button" active={idx === tab} onClick={() => onTab(idx)}>{item.label}</TabButton>
          </Item>
        ))}
      </ReactSortable>

      <Button variant="secondary" size="sm" onClick={() => onChange(append(items, Factories.item()))}><Plus /></Button>
    </Stack>
  </Container>
);
