import * as React from 'react';

import CardImg from './CardImg';

import { BsPrefixComponent } from './helpers';

export class CardTitle<
  As extends React.ElementType = 'div'
> extends BsPrefixComponent<As> {}

export class CardSubtitle<
  As extends React.ElementType = 'div'
> extends BsPrefixComponent<As> {}

export class CardBody<
  As extends React.ElementType = 'div'
> extends BsPrefixComponent<As> {}

export class CardLink<
  As extends React.ElementType = 'a'
> extends BsPrefixComponent<As> {}

export class CardText<
  As extends React.ElementType = 'p'
> extends BsPrefixComponent<As> {}

export class CardHeader<
  As extends React.ElementType = 'div'
> extends BsPrefixComponent<As> {}

export class CardFooter<
  As extends React.ElementType = 'div'
> extends BsPrefixComponent<As> {}

export class CardImgOverlay<
  As extends React.ElementType = 'div'
> extends BsPrefixComponent<As> {}

export interface CardProps {
  bg?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'dark'
    | 'light';
  text?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'dark'
    | 'light'
    | 'white'
    | 'muted';
  border?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'dark'
    | 'light';
  body?: boolean;
}

declare class Card extends BsPrefixComponent<'div', CardProps> {
  static Img: typeof CardImg;
  static Title: typeof CardTitle;
  static Subtitle: typeof CardSubtitle;
  static Body: typeof CardBody;
  static Link: typeof CardLink;
  static Text: typeof CardText;
  static Header: typeof CardHeader;
  static Footer: typeof CardFooter;
  static ImgOverlay: typeof CardImgOverlay;
}

export default Card;
