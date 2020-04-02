# Team Stats
We want to create and extract information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays, objects, etc.Once created, you can manipulate these data structures as well as gain insights from them. For example, you might want to get the total number of games your team has played, or the average score of all of their games.

- [x] 1. We want a data structure to store the information about our team. Create an empty team object.
- [x] 2. Our team has players, and the team plays games. We want to represent both of these. Add two properties to your team object. A _players property and a _games property that are both initialized to empty arrays.
- [x] 3. Populate the empty array that corresponds to the _players key in your team object with three actual players. They should be in the following format:
```javascript
{
   firstName: 'Pablo',
   lastName: 'Sanchez',
   age: 11
}
```
You should put each player on a new line to prevent the line from getting too long.
- [x] 4. Populate the empty array that corresponds to the _games key in your object with three actual games. They should be in the following format:
```javascript
{
   opponent: 'Broncos',
   teamPoints: 42,
   opponentPoints: 27
}
```
- [x] 5. Create getter methods for your _players and _games keys. You do not need to create setter methods, because we don’t want anyone to change the values saved to these keys.
- [x] 6. We want to add a new player to your team. Add a method addPlayer to your team object. This method should take in three parameters: firstName, lastName, and age. It should create a player object, and add them to the team‘s players array.
- [x] 7. elow your team object, invoke your addPlayer method on the following players: Steph Curry Age 28,Lisa Leslie Age 44, and Bugs Bunny Age 76. Print out the team‘s players to check they were all properly added.
- [x] 8. The scorekeeper has some new information for us! Add a similar method for recording game results called addGame that:
- takes in an opponent’s name,
- your team’s points,
- opponent’s points,
- ceates a game object,
- adds the game object to your team‘s games array.
- [x] 9. Invoke your addGame method on three games and print the team‘s updated games array.
