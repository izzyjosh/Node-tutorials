const os = require("os")

const userData = {
  userSystem: os.type(),
  userInfo : os.userInfo(),
  userUptime : os.uptime(),
  release : os.release(),
  freemem : os.freemem(),
  totalmem: os.totalmem(),
}

console.log(userData)

