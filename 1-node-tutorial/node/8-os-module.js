const os = require("os")

// info about current user
const user = os.userInfo()
console.log(user);

// method return the system uptime in second
console.log(`The system Uptime id ${os.uptime()} seconds`);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS);