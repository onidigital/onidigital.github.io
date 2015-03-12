
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

	if( queryResult.length > 1 ){
		return queryResult;
	} else if(queryResult.length === 1) {
		return queryResult[0];
	}

}

function Insert(target, newItem){
	var newId = 1;
	for(var item in data[target]){
		if(data[target].hasOwnProperty(item)){
			newId++;
		}
	}

	newItem.id = newId;

	data[target].push( newItem );

	return data[target];

}

function Update( target, oldItemId, updated ){

	for( var key in data[target] ){
		if( data[target][key]['id'] === oldItemId ){
			var merged = data[target][key];

			for( var item in updated ){
				merged[item] = updated[item];
			}

			return data[target];
		}
	}

}