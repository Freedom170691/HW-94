const path = require('path');

const rootPath = __dirname;

module.exports = {
  rootPath,
  uploadPath: path.join(rootPath, 'public/uploads'),
  mongo: {
    db: 'mongodb://localhost/diary',
    options: {useNewUrlParser: true},
  },
  google: {
    clientId: '810927471031-ctcpjrs72eki7sejs8pcad6s8qdc9td6.apps.googleusercontent.com',
  }
};