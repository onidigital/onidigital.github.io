app.controller('AddVoteController', function() {
	var $this = this;
	this.teams 					= Query('teams','-','all'); //this hace referencia al controlador
	this.possibleParticipants 	= Query('users','rol', 4);
	this.newParticipant 		= '';
	this.voters 				= [];
	this.selectedTeams 			= [];
	this.initialDate			= new Date();
	this.finalDate				= new Date( this.initialDate.getFullYear(), this.initialDate.getMonth(), (this.initialDate.getDate() + 7) );

	this.selectTeam = function( id, isSelected ){
		var i 		= 0,
			coord 	= 0
			l 		= $this.selectedTeams.length;

		if( !(isSelected) ){
			for(; (i<l); i++){
				if( $this.selectedTeams[i] === id ){
					coord  = i;
					break;
				}
			}
			$this.selectedTeams.splice(coord,1);
		} else {
			this.selectedTeams.push(id);
		}
	}

	this.addParticipant = function(){
		var newParticipant = Query('users','id',Number($this.newParticipant));
		if( newParticipant ){
			if( $this.searchDupes( newParticipant ) ) {
				$this.voters.unshift( newParticipant );
				$this.newParticipant = null;
			}
		}
	}

	this.deleteParticipant = function(id){
		var i = 0,
			l = $this.voters.length;

		for(; (i<l); i++){
			if( $this.voters[i]['id'] === id ){
				$this.voters.splice(i,1);
				break;
			}
		}

	}

	this.searchDupes = function( item ){
		var i = 0,
			l = $this.voters.length;

		for(; (i<l); i++){
			if( ($this.voters[i] === item) ){
 				return false;
			}
		}

		return true;
	}

	this.valid = function(){
		if( 
			($this.voters.length) &&
			($this.selectedTeams.length) &&
			($this.validDates())
		 ){
			return true;
		} else { return false; }
	}

	$this.validDates = function(){
		if( $this.initialDate < $this.finalDate ){
			return true;
		} else { return false; }
	}

	this.registerVoting = function(){
		var newVoting = {
			voters 		: $this.voters,
			teams  		: $this.selectedTeams,
			initialDate : $this.initialDate,
			finalDate	: $this.finalDate
		};
		Insert('voting', newVoting);
		console.table( data['voting'] );
	}

});