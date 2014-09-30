var app = angular.module('nbaRoutes');

app.controller('teamCtrl', function($scope, $routeParams, teamService, teamData){
	$scope.teamData = teamData;
	$scope.newGame = {};
	$scope.showNewGameForm = false;
	$scope.homeTeam;
	$scope.logoPath;
	console.log($scope);
	switch($routeParams.team){
		case 'utahjazz':
			$scope.homeTeam = 'Utah Jazz';
			$scope.logoPath = 'images/jazz-logo.png';
			break;
		case 'miamiheat':
			$scope.homeTeam = 'Miami Heat';
			$scope.logoPath = 'images/heat-logo.png';
			break;
		case 'losangeleslakers':
			$scope.homeTeam = 'Los Angeles Lakers';
			$scope.logoPath = 'images/lakers-logo.png';
			break;
	}

	$scope.toggleNewGameForm = function(){
		$scope.showNewGameForm = !$scope.showNewGameForm;
	}

	$scope.addNewGame = function(){
		$scope.newGame.homeTeam = $scope.homeTeam.split(' ').join('').toLowerCase();
		teamService.addNewGame($scope.newGame).
			then(function(){
				teamService.getTeamData($scope.newGame.homeTeam).
					then(function(results){
						$scope.teamData = results;
						$scope.newGame = {};
						$scope.showNewGameForm = false;
					});
			});
	}


});