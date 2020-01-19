import { common, english, russian } from './db';
import { FullInfo } from './types';

export * from './types';

const fullInfo: FullInfo = {
  name: english.name,
  names: english.names,
  location: english.location,
  homepage: common.homepage,
  ru: russian,
};

export default fullInfo;
