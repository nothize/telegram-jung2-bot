require('codecov');
var log = require('log-to-file-and-console-node');
log.removeConsole();

TEST_DATASTORE = 'mongo';
GLOBAL.INIT_DS = true;
// express
// TODO: add test case for app.js
// route
require('./route/testBotHandler');
// TODO: add test case for route/root.js
// model
require('./model/testMessage');
require('./model/testUsage');
// controller
require('./controller/testMessage');
require('./controller/testUsage');
// datastore
require('./ds/testMongo');
