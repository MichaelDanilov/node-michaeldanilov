import { Names, Info } from '../types';

const names: Names = {
  firstName: 'Michael',
  lastName: 'Danilov',
};

const info: Info = {
  names,
  name: `${names.firstName} ${names.lastName}`,
  location: 'Omsk, Russia',
};

export default info;
