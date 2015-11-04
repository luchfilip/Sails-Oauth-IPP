module.exports.security = {
  oauth : {
    version : '2.0',
    token : {
      length: 32,
      expiration: 3600
    }
  },
  admin: {
    email: {
      address: 'luchianenco.filip@gmail.com',
      password: 'hiddenpassword'
    },

  },
  server: {
    url: 'http://localhost:1336'
  }
};
