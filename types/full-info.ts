import { Common } from './common';
import { Info } from './info';

export interface FullInfo extends Info, Common {
  ru: Info;
}
