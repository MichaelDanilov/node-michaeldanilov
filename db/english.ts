import { Names, Info } from '../types';

const names: Names = {
  firstName: 'Michael',
  lastName: 'Danilov',
};

const info: Info = {
  names,
  name: `${names.firstName} ${names.lastName}`,
  location: 'Moscow, Russia',
  cv: {
    service: 'linkedin',
    url: 'https://www.linkedin.com/in/michaeldanilov/',
  },
};

export default info;
