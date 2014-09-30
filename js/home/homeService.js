var app = angular.module('nbaRoutes');

app.service('homeService', function($http, $q, teamService){
	this.getAllData = function(){
		var deferred = $q.defer();
		var jazzGames = { team: 'Utah Jazz', logoPath: 'images/jazz-logo.png'};
		var lakersGames = { team: 'Los Angeles Lakers', logoPath:'images/lakers-logo.png'};
		var heatGames = { team: 'Miami Heat', logoPath: 'images/heat-logo.png'};

		teamService.getTeamData('utahjazz').
			then(function(results){
				jazzGames.teamData = results;
			});

		teamService.getTeamData('losangeleslakers').
			then(function(results){
				lakersGames.teamData = results;
			});

		teamService.getTeamData('miamiheat').
			then(function(results){
				heatGames.teamData = results;
			});
		var allGames = [jazzGames, lakersGames, heatGames];
		return allGames;
	}

});