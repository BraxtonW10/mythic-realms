const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const camera = {
    x: 0,
    y: 0
};

const keys = {};

document.addEventListener("keydown", e => {
    keys[e.key.toLowerCase()] = true;
});

document.addEventListener("keyup", e => {
    keys[e.key.toLowerCase()] = false;
});

const playerSprite = new Image();
playerSprite.src = "assets/player.png";

const grassTile = new Image();
grassTile.src = "assets/grass.png";

const player = {
    x: 500,
    y: 500,
    width: 64,
    height: 64,
    speed: 5,
    level: 1,
    gold: 0
};

const monsters = [];

function spawnMonster() {
    monsters.push({
        x: Math.random() * 4000,
        y: Math.random() * 4000,
        size: 48,
        hp: 20,
        level: Math.floor(Math.random() * 5) + 1
    });
}

for (let i = 0; i < 50; i++) {
    spawnMonster();
}

function updatePlayer() {
    if (keys["w"]) player.y -= player.speed;
    if (keys["s"]) player.y += player.speed;
    if (keys["a"]) player.x -= player.speed;
    if (keys["d"]) player.x += player.speed;

    camera.x = player.x - canvas.width / 2;
    camera.y = player.y - canvas.height / 2;
}

function drawWorld() {
    for (let x = -10; x < 100; x++) {
        for (let y = -10; y < 100; y++) {
            ctx.drawImage(
                grassTile,
                x * 64 - camera.x,
                y * 64 - camera.y,
                64,
                64
            );
        }
    }
}

function drawPlayer() {
    ctx.drawImage(
        playerSprite,
        player.x - camera.x,
        player.y - camera.y,
        player.width,
        player.height
    );
}

function drawMonsters() {
    monsters.forEach(monster => {
        ctx.fillStyle = "gold";
        ctx.beginPath();
        ctx.arc(
            monster.x - camera.x,
            monster.y - camera.y,
            monster.size / 2,
            0,
            Math.PI * 2
        );
        ctx.fill();
    });
}

function drawUI() {
    ctx.fillStyle = "rgba(0,0,0,.6)";
    ctx.fillRect(10, 10, 250, 120);

    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText("Level: " + player.level, 20, 40);
    ctx.fillText("Gold: " + player.gold, 20, 70);
    ctx.fillText("Monsters: " + monsters.length, 20, 100);
}

function update() {
    updatePlayer();
}

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawWorld();
    drawMonsters();
    drawPlayer();
    drawUI();
}

function gameLoop() {
    update();
    render();
    requestAnimationFrame(gameLoop);
}

gameLoop();