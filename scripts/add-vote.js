app.controller('AddVoteController', function() {
	var $this = this;
	this.teams 					= Query('teams','-','all'); //this hace referencia al controlador
	this.possibleParticipants 	= Query('users','rol', 4);
	this.newParticipant 		= '';
	this.participants 			= [];
	this.selectedTeams 			= [];

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
			if( $this.searchDupes( newParticipant ) ) {
				$this.participants.push( newParticipant );
				$this.newParticipant = '';
			}
	}

	this.searchDupes = function( item ){
		var i = 0,
			l = $this.participants.length;
		for(; (i<l); i++){
			if( $this.participants[i] === item ){
				return false;
			}
		}

		return true;
	}

	this.alert = function(){
		alert('worked!....?');
	}

});