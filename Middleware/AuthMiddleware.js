import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../Entites/User/UserModel.js';

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');
      next();

      // jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      //   if (!err) {
      //     req.user = user;
      //     next();
      //   } else {
      //     res.status(403);
      //     throw new Error('Неправильный token');
      //   }
      // });
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Не авторизованы');
      // throw new Error('Не авторизованы, неправильный token');
    }
  }
  if (!token) {
    res.status(401);
    throw new Error('Не авторизованы, нет token');
  }
});

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error('Не авторизованы как Админ');
  }
};

export { protect, admin };

// const verifyToken = (req, res, next) => {
//   const authHeader = req.headers.token;
//   if (authHeader) {
//     const token = authHeader.split(' ')[1];
//     jwt.verify(token, process.env.JWT_SEC, (err, user) => {
//       if (err) res.status(403).json('Token is not valid!');
//       req.user = user;
//       next();
//     });
//   } else {
//     return res.status(401).json('You are not authenticated!');
//   }
// };

// const verifyTokenAndAuthorization = (req, res, next) => {
//   verifyToken(req, res, () => {
//     if (req.user.id === req.params.id || req.user.isAdmin) {
//       next();
//     } else {
//       res.status(403).json('You are not alowed to do that!');
//     }
//   });
// };

// const verifyTokenAndAdmin = (req, res, next) => {
//   verifyToken(req, res, () => {
//     if (req.user.isAdmin) {
//       next();
//     } else {
//       res.status(403).json('You are not alowed to do that!');
//     }
//   });
// };
