module.exports = {
  defaultHeaders: {
    'x-xb-test': "1"
  },
  environments: {
    "$shared": {
    },
    "dev": {
      "host": "http://localhost:13131/api"
    },
    "prod": {
      "host": "http://bgxp.buzz:3030/api"
    }
  }
}
