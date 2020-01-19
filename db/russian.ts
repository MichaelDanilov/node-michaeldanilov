import { Names, Info } from '../types';

const names: Names = {
  firstName: 'Михаил',
  lastName: 'Данилов',
};

const info: Info = {
  names,
  name: `${names.firstName} ${names.lastName}`,
  location: 'Москва, Россия',
  cv: {
    service: 'habr',
    url: 'https://career.habr.com/michael-danilov',
  },
  jobTitle: 'Разработчик интерфейсов',
  worksFor: {
    brand: {
      name: 'КиноПоиск',
      url: 'https://www.kinopoisk.ru/',
    },
    department: {
      name: 'Фронтенд разработка КиноПоиска',
    },
    name: 'Яндекс',
    url: 'https://yandex.ru/',
  },
};

export default info;
