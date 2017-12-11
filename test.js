import test from 'ava';
import michaeldanilov from './';

// English
test('name', (t) => {
  t.is(michaeldanilov.name, 'Michael Danilov');
});

test('firstName', (t) => {
  t.is(michaeldanilov.names.firstName, 'Michael');
});

test('lastName', (t) => {
  t.is(michaeldanilov.names.lastName, 'Danilov');
});

test('location', (t) => {
  t.is(michaeldanilov.location, 'Omsk, Russia');
});

// Russian
test('name', (t) => {
  t.is(michaeldanilov.ru.name, 'Михаил Данилов');
});

test('firstName', (t) => {
  t.is(michaeldanilov.ru.names.firstName, 'Михаил');
});

test('lastName', (t) => {
  t.is(michaeldanilov.ru.names.lastName, 'Данилов');
});

test('location', (t) => {
  t.is(michaeldanilov.ru.location, 'Омск, Россия');
});

// Common
test('homepage', (t) => {
  t.is(michaeldanilov.homepage, 'https://danilov.me');
});
