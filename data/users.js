import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Админ',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Пользователь',
    email: 'user@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Вероника',
    email: 'benzaveronika@gmail.com',
    password: bcrypt.hashSync('123', 10),
  },
];

export default users;
