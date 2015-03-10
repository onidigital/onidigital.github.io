
function Query( object, query, value ){

	var searchObject = data[object],
		queryResult = [];


	if( value ){
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
	var newId = 0;
	for(var item in data[target]){
		if(data[target].hasOwnProperty(item)){
			newId++;
		}
	}

	newItem.id = newId;

	data[target].push( newItem );

}