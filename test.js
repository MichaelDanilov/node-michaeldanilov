import test from 'ava';
import michaeldanilov from './index';

// English
test('en name', (t) => {
  t.is(michaeldanilov.name, 'Michael Danilov');
});

test('en firstName', (t) => {
  t.is(michaeldanilov.names.firstName, 'Michael');
});

test('en lastName', (t) => {
  t.is(michaeldanilov.names.lastName, 'Danilov');
});

test('en location', (t) => {
  t.is(michaeldanilov.location, 'Omsk, Russia');
});

// Russian
test('ru name', (t) => {
  t.is(michaeldanilov.ru.name, 'Михаил Данилов');
});

test('ru firstName', (t) => {
  t.is(michaeldanilov.ru.names.firstName, 'Михаил');
});

test('ru lastName', (t) => {
  t.is(michaeldanilov.ru.names.lastName, 'Данилов');
});

test('ru location', (t) => {
  t.is(michaeldanilov.ru.location, 'Омск, Россия');
});

// Common
test('common homepage', (t) => {
  t.is(michaeldanilov.homepage, 'https://danilov.me');
});
