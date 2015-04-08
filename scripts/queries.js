
function Query( object, query, value ){

	var searchObject = data[object],
		queryResult = [];


	if( value !== 'all' ){
		for( var item in searchObject ){
			if( searchObject[item][query] === value ){
				queryResult.push(searchObject[item]);
			}
		}
	} else {
		return searchObject;
	}

	return queryResult;
}

function QueryAll(target){ return data[target]; }

function Insert(target, newItem){
	var newId = 1;
	for(var item in data[target]){
		if(data[target].hasOwnProperty(item)){
			newId++;
		}
	}

	newItem['id'] = newId;
	data[target].unshift(newItem);

	return data[target];

}

function Update( target, oldId, updated ){

	for( var key in data[target] ){
		if( data[target][key]['id'] === oldId ){
			data[target][key] = updated;
			return true;
		}
	}

	return false;

}