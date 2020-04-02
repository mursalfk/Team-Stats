// 1.We want a data structure to store the information about our team. Create an empty team object.
const team = {
//2. Our team has players, and the team plays games. We want to represent both of these. Add two properties to your team object. A _players property and a _games property that are both initialized to empty arrays.
  _players: [
    {
  //3. Populate the empty array that corresponds to the _players key in your team object with three actual players. They should be in the following format:
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11
    },{
      firstName: 'Rachel',
      lastName: 'Escobar',
      age: 12
    },{
      firstName: 'Diablo',
      lastName: 'Ravez',
      age: 13
    }
  ],
  _games: [
//4. Populate the empty array that corresponds to the _games key in your object with three actual games. They should be in the following format:
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    },{
      opponent: 'Arsenal',
      teamPoints: 43,
      opponentPoints: 26
    },{
      opponent: 'Manchester',
      teamPoints: 39,
      opponentPoints: 20
    }
  ],
//5. Create getter methods for your _players and _games keys. You do not need to create setter methods, because we don’t want anyone to change the values saved to these keys.
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },
//6. We want to add a new player to your team. Add a method addPlayer to your team object. This method should take in three parameters: firstName, lastName, and age. It should create a player object, and add them to the team‘s players array.
  addPlayer(firstName, lastName, age){
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },
//8.The scorekeeper has some new information for us! Add a similar method for recording game results called addGame that:takes in an opponent’s name,your team’s points,the opponent’s points,creates a game object,adds the game object to your team‘s games array.
  addGame(oppName, myTeamPoints, oppPoints){
    let game = {
      opponent: oppName,
      teamPoints: myTeamPoints,
      opponentPoints: oppPoints
    };
    this.games.push(game);
  }
};

//7. Below your team object, invoke your addPlayer method on the following players: Steph Curry Age 28,Lisa Leslie Age 44, and Bugs Bunny Age 76. Print out the team‘s players to check they were all properly added.

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log('===team.players===');
console.log(team.players);

//9. Invoke your addGame method on three games and print the team‘s updated games array.
team.addGame('India', 8, 2);
team.addGame('Bhutan', 12, 6);
team.addGame('Sri Lanka', 9, 1);
console.log('===team.games===');
console.log(team.games)
