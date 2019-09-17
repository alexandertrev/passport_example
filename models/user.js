module.exports = {
  findOne({ username }, cb) {
    const user = userMock.find((u) => u.username === username)
    if (user) {
      cb(undefined, user);
    } else {
      cb(new Error(), undefined);
    }
  },

  findById(id, cb) {
    const user = userMock.find((u) => u.id === id)
    if (user) {
      cb(undefined, user);
    } else {
      cb(new Error(), undefined);
    }
  },
}

const User = function (username) {
  this.id = Math.random().toString(36).substr(2, 9);
  this.username = username;
  this.password = '111';

  this.validPassword = function (password) {
    return this.password === password;
  }
}

const userMock = [
  new User('vova'),
  new User('alex'),
  new User('arbuz'),
  new User('misha'),
  new User('vasya'),
  new User('pasha'),
  new User('herzel'),
  new User('grisha'),
]