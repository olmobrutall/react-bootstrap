import * as React from 'react';

import { BsPrefixComponent } from './helpers';

export interface ListGroupItemProps {
  action?: boolean;
  active?: boolean;
  disabled?: boolean;
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'dark'
    | 'light';
}

declare class ListGroupItem extends BsPrefixComponent<'a', ListGroupItemProps> {}

export default ListGroupItem;
