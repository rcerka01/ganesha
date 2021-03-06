var secret = require("./secret");

var config = {
    app: {
        live: true, 
        port: 3005,
        updateTimes: {
            seconds: [5]
        }
    },
    mrGold: {
        host: "raitis.co.uk",
        protocol: "http",
        port: 3001
    },
    vishnu: {
        host: "raitis.co.uk",
        protocol: "http",
        port: 3003
    },
    db: {
        domain: "@ds143774.mlab.com:43774/",
        name: "betfair-db",
        login: secret.testDb.login,
        password: secret.testDb.password
        // domain: "@raitis.co.uk:27017/",
        // name: "betfair-db",
        // login: secret.db.login,
        // password: secret.db.password
    },
    soccer: {
        timeCollectMarketLog: 88,
        bid: 2,
        elapsedTime: 80,
        scoreHigher: 2,
        version: "v1.5"
    }
}

// [TEST]
// config.app.live = false;
// config.app.updateTimes = {
//     seconds: [3, 13, 23, 33, 43, 53]
// };
// config.db = {
//     domain: "@ds123796.mlab.com:23796/",
//     name: "betfairtestdb",
//     login: secret.testDb.login,
//     password: secret.testDb.password
// }

module.exports = config;
