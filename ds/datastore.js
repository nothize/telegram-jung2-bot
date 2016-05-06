require('dotenv').load();

var ds = require('./' + (GLOBAL.TEST_DATASTORE || process.env.DATASTORE));
ds.setCachedLastSender(GLOBAL.cachedLastSender);
module.exports = ds;
if ( !GLOBAL.INIT_DS ) {
	ds.init();
}

GLOBAL.INIT_DS = true;