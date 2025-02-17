import * as React from 'react';

import Nav from './Nav';

import { BsPrefixComponent, SelectCallback } from './helpers';

export interface TabsProps {
  activeKey?: unknown;
  defaultActiveKey?: unknown;
  onSelect?: SelectCallback;
  variant?: 'tabs' | 'pills';
  transition?: false | React.ElementType;
  id: string;
  mountOnEnter?: boolean;
  unmountOnExit?: boolean;
}

declare class Tabs extends BsPrefixComponent<typeof Nav, TabsProps> {}

export default Tabs;
