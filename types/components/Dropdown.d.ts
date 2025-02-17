import * as React from 'react';

import DropdownItem from './DropdownItem';
import DropdownMenu from './DropdownMenu';
import DropdownToggle from './DropdownToggle';

import { BsPrefixComponent, SelectCallback } from './helpers';

export class DropdownDivider<
  As extends React.ElementType = 'div'
> extends BsPrefixComponent<As> {}

export class DropdownHeader<
  As extends React.ElementType = 'div'
> extends BsPrefixComponent<As> {}

export interface DropdownProps {
  drop?: 'up' | 'left' | 'right' | 'down';
  alignRight?: boolean;
  show?: boolean;
  flip?: boolean;
  onToggle?: (
    isOpen: boolean,
    event: React.SyntheticEvent<Dropdown>,
    metadata: { source: 'select' | 'click' | 'rootClose' | 'keydown' },
  ) => void;
  onSelect?: SelectCallback;
}

declare class Dropdown extends BsPrefixComponent<'div', DropdownProps> {
  static Toggle: typeof DropdownToggle;
  static Menu: typeof DropdownMenu;
  static Item: typeof DropdownItem;
  static Divider: typeof DropdownDivider;
  static Header: typeof DropdownHeader;
}

export default Dropdown;
