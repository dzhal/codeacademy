const doorImage1 = document.getElementById('door1');
const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');
const botDoorPath = './img/robot.svg';
const beachDoorPath = './img/beach.svg';
const spaceDoorPath = './img/space.svg';
const closedDoorPath = './img/door.svg';
let currentlyPlaying = true;
let numClosedDoors = 3;
let startButton = document.getElementById('start');
let openDoor1;
let openDoor2;
let openDoor3;
const randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * 3);
    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if( choreDoor === 1) {
        openDoor1 = beachDoorPath;
        openDoor2 = botDoorPath;
        openDoor3 = spaceDoorPath;
    } else {
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
        openDoor3 = botDoorPath
    }
};
const playDoor = (door) => {
    numClosedDoors--;
    if (numClosedDoors === 0) {
        gameOver('win');
    } else if (isBot(door)) {
        gameOver();
    }
}
const isClicked = (door) => {
    if (`./${door.src.match(/(img).+/ig)[0]}` === closedDoorPath) {
        return false;
      } else {
        return true;
      }
};
const isBot = (door) => {
    return `./${door.src.match(/(img).+/ig)[0]}` === botDoorPath;
};

doorImage1.onclick = () => {
    if (!isClicked(doorImage1) && currentlyPlaying) {
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
        
    }
};
doorImage2.onclick = () => {
    if (!isClicked(doorImage2) && currentlyPlaying) {
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    }
};
doorImage3.onclick = () => {
    if (!isClicked(doorImage3) && currentlyPlaying) {
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    }
};
startButton.onclick = () => {
    if (!currentlyPlaying) {
        startRound();
    }
};
const startRound = () => {
    currentlyPlaying = true;
    startButton.innerHTML = 'Good luck!';
    numClosedDoors = 3;
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    randomChoreDoorGenerator();
}
const gameOver = (status) => {
    if (status === 'win') {
        startButton.innerHTML = 'You win! Play again?';
    } else {
        startButton.innerHTML = 'Game over! Play again?';
    }
    currentlyPlaying = false;
}

startRound();
