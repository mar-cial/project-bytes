import { v4 as uuid } from 'uuid';

const users = [
  {
    firstName: 'César',
    lastName: 'Marcial',
    address: [
      {
        street: 'Calle 12 Colonia Sinaloa',
        state: 'Baja California',
        city: 'Mexicali',
        zip: 21330,
      },
    ],

    img: '/cesar',
    id: uuid(),
  },
  {
    firstName: 'Alexa',
    lastName: 'Macías',
    address: [
      {
        street: 'Blvd. Lázaro Colonia Verde',
        state: 'Baja California',
        city: 'Mexicali',
        zip: 21330,
      },
    ],
    img: '/alexa',
    id: uuid(),
  },
  {
    firstName: 'Sacbé',
    lastName: 'Medrano',
    address: [
      {
        street: 'Calle 523 Colonia Naranja',
        state: 'Baja California',
        city: 'Mexicali',
        zip: 21330,
      },
    ],

    img: '/sacbé',
    id: uuid(),
  },
];

export default users;
