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
  jobTitle: 'Frontend developer',
  worksFor: {
    brand: {
      name: 'KinoPoisk',
      url: 'https://www.kinopoisk.ru/',
    },
    department: {
      name: 'KinoPoisk Frontend Development group',
    },
    name: 'Yandex',
    url: 'https://yandex.com/',
  },
};

export default info;
