const mongoose = require('mongoose');
const config = require('./config');
const {nanoid} = require("nanoid");

const User = require('./models/User');
const Developments = require('./models/Developments');

const run = async () => {
  await mongoose.connect(config.mongo.db);

  const collections = await mongoose.connection.db.listCollections().toArray();

  for (const coll of collections) {
    await mongoose.connection.db.dropCollection(coll.name);
  }

  const [admin, user] = await User.create({
    email: 'admin@gmail.com',
    password: 'admin',
    token: nanoid(),
    displayName: 'Admin',
  }, {
    email: 'user@gmail.com',
    password: 'user',
    token: nanoid(),
    displayName: 'User',
  });

  await Developments.create({
    user: admin._id,
    title: 'Lesson 96',
    datetime: '20.12.2022',
    duration: '2'
  }, {
    user: user._id,
    title: 'Homework 96',
    datetime: '20.11.2022',
    duration: '2'
  });

  await mongoose.connection.close();
};

run().catch(console.error);