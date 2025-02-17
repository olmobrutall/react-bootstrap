import * as React from 'react';

import { BsPrefixComponent, TransitionCallbacks } from './helpers';

export interface TabPaneProps extends TransitionCallbacks {
  eventKey?: unknown;
  active?: boolean;
  transition?: false | React.ElementType;
  bsClass?: string;
  mountOnEnter?: boolean;
  unmountOnExit?: boolean;
}

declare class TabPane extends BsPrefixComponent<'div', TabPaneProps> {}

export default TabPane;
