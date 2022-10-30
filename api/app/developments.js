const express = require('express');
const User = require("../models/User");
const auth = require("../middleware/auth");
const Development = require('../models/Developments');

const router = express.Router();



router.get('/', async (req, res) => {
  try {
    const developments = await Development.find();


    res.send(developments);
  } catch {
    res.sendStatus(500);
  }
});

router.post('/', auth, async (req, res) => {
  const token = req.get('Authorization');
  const {title, datetime, duration} = req.body;
  const user = await User.findOne({token});

  if (!token) {
    return res.status(401).send({error: 'No token present!'});
  }

  if (!user) {
    return res.status(401).send({error: 'Wrong token!'});
  }

  if (!title || !user)  {
    return res.status(400).send({error: 'Data not valid'});
  }

  const postData = {
    title,
    user,
    duration,
    datetime,
  };

  try {
    const development = new Development(postData);
    await development.save();

    res.send(development);
  } catch (e) {
    res.status(400).send({error: e.errors});
  }
});

module.exports = router;