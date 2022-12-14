const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const {email, password, displayName} = req.body;
    const userData = {email, password, displayName};

    const user = new User(userData);

    user.generateToken();
    await user.save();

    return res.send(user);
  } catch (e) {
    return  res.status(400).send(e);
  }
});

router.post('/sessions', async (req, res) => {
  const user = await User.findOne({email: req.body.email});

  if (!user) {
    return res.status(401).send({message: 'Credentials are wrong!'});
  }

  const isMatch = await user.checkPassword(req.body.password);

  if (!isMatch) {
    return  res.status(401).send({message: 'Credentials are wrong!'});
  }

  user.generateToken();
  user.online = true;

  await user.save({validateBeforeSave: false});
  return  res.send({message: 'Email and password correct!', user})
});

router.delete('/sessions', async (req, res) => {
  const token = req.get('Authorization');
  const success = {message: 'Success'};

  if (!token) return res.send(success);

  const user = await User.findOne({token});

  if (!user) return res.send(success);

  user.generateToken();
  user.online = false;

  await user.save({validateBeforeSave: false});
  return res.send({success, user});
});

module.exports = router;