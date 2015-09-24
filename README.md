# Multi-Rhythm
An Open Source Web Based Rhythm game that uses WebSockets and Node.js to implement multiplayer across any machines that connect to the server. This Project uses Angular to handle any of multiple additional pages that may be attached to this project. Jquery is used to animate the game, while javascript logic is used to compute the actions that must be done. WebSockets handles all of the interaction between the user and server for sending relevant game data back and forth.

All of the images used for the game are included in the img folder, sans the background, which should be changable either by list or by user in the future.

All of the node.js code should be included in node_modules as per convention.

All of the game logic and animation that runs across the project is included in the script folder, along with the css for now since there aren't any other pages to style.

The three html pages in the main directory should eventually be combined into one cohesive webpages that uses the three as modifiable views.

Next main goal for the project is to have .json objects that represent a beatmap for a particular song (and includes the .mp3 file inside it perhaps) and to read that map in on the serverside while broadcasting the mp3 and projecting the beatmap to all users that tune in.

You can run this project by using npm to install the three dependencies, express, socket.io, and twit, and then running node.js on index.js. Make sure to connect to localhost:(portnumber is usually 2814).
