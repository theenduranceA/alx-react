const { fromJS, Map } = require('immutable');

function getImmutableObject(obj) {
	const immutableMap = fromJS(obj);
	return immutableMap;
}
