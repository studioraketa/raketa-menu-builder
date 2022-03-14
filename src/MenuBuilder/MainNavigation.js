import React from 'react';
import styled from 'styled-components';
import { ReactSortable } from 'react-sortablejs';
import { append } from './utils';
import Factories from './Factories';
import {
  reset,
  Button,
  Stack,
  Container,
  buttonReset,
} from '@raketa-cms/raketa-mir';

const Item = styled.div`
  ${reset};
  display: inline-flex;
  align-items: center;
  padding: 0;
  margin-right: 0.5em;
  border: 1px solid
    ${(props) =>
      props.active ? props.theme.colors.primary : props.theme.colors.gray};
  border-radius: 48px;
  background-color: ${(props) =>
    props.active ? props.theme.colors.primary : props.theme.colors.white};
  font-weight: 700;
  transition: 0.1s ease-in-out all;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const TabButton = styled.button`
  ${buttonReset};
  padding: 0.5em 1em;
  color: ${(props) =>
    props.active ? props.theme.colors.white : props.theme.colors.black};
  font-weight: 700;
`;

export default ({ items, tab, onTab, onChange }) => (
  <Container bottom>
    <Stack>
      <ReactSortable
        list={items}
        setList={onChange}
        direction='horizontal'
        dragoverBubble
      >
        {items.map((item, idx) => (
          <Item key={item.id} active={parseInt(idx, 10) === parseInt(tab, 10)}>
            <TabButton
              type='button'
              active={parseInt(idx, 10) === parseInt(tab, 10)}
              onClick={() => onTab(idx)}
            >
              {item.label}
            </TabButton>
          </Item>
        ))}
      </ReactSortable>

      <Button
        variant='secondary'
        onClick={() => onChange(append(items, Factories.item()))}
      >
        Add item
      </Button>
    </Stack>
  </Container>
);
