import { common, english, russian } from './db';
import { FullInfo } from './types';

export * from './types';

const fullInfo: FullInfo = {
  ...english,
  homepage: common.homepage,
  ru: russian,
};

export default fullInfo;
