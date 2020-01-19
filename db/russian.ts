import { Names, Info } from '../types';

const names: Names = {
  firstName: 'Михаил',
  lastName: 'Данилов',
};

const info: Info = {
  names,
  name: `${names.firstName} ${names.lastName}`,
  location: 'Москва, Россия',
};

export default info;
