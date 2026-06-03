const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

document.getElementById("stats").innerText = "Game Running";

const camera = {
    x: 0,
    y: 0
};

const keys = {};

document.addEventListener("keydown", (e) => {
    keys[e.key.toLowerCase()] = true;
});

document.addEventListener("keyup", (e) => {
    keys[e.key.toLowerCase()] = false;
});

const playerSprite = new Image();
playerSprite.src =
    "assets/11E20DE3-1439-4D6D-9EBA-CD876437ABE4.png";

const grassTile = new Image();
grassTile.src =
    "assets/CFB357FF-1A6E-4173-BFF4-D425926A38BF.png";

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

    for (let x = -20; x < 100; x++) {
        for (let y = -20; y < 100; y++) {

            if (grassTile.complete) {
                ctx.drawImage(
                    grassTile,
                    x * 64 - camera.x,
                    y * 64 - camera.y,
                    64,
                    64
                );
            } else {
                ctx.fillStyle = "#3aa655";
                ctx.fillRect(
                    x * 64 - camera.x,
                    y * 64 - camera.y,
                    64,
                    64
                );
            }
        }
    }

    ctx.fillStyle = "#b8a17a";

    ctx.fillRect(
        -camera.x,
        10 * 64 - camera.y,
        5000,
        64
    );

    WORLD.buildings.forEach(building => {

        let color = "#8b4513";

        if (building.type === "lab") color = "#dddddd";
        if (building.type === "shop") color = "#ffd700";
        if (building.type === "quest") color = "#00ccff";
        if (building.type === "gym") color = "#cc0000";

        ctx.fillStyle = color;

        ctx.fillRect(
            building.x * 64 - camera.x,
            building.y * 64 - camera.y,
            96,
            96
        );
    });

    WORLD.towns.forEach(town => {

        ctx.fillStyle = "white";
        ctx.font = "20px Arial";

        ctx.fillText(
            town.name,
            town.x * 64 - camera.x,
            town.y * 64 - camera.y - 20
        );
    });
}

    // Road from Evergreen to Stonehaven
    ctx.fillStyle = "#b8a17a";

    ctx.fillRect(
        -camera.x,
        10 * 64 - camera.y,
        5000,
        64
    );

    // Buildings
    WORLD.buildings.forEach(building => {

        let color = "#8b4513";

        if (building.type === "lab") {
            color = "#dddddd";
        }

        if (building.type === "shop") {
            color = "#ffd700";
        }

        if (building.type === "quest") {
            color = "#00ccff";
        }

        if (building.type === "gym") {
            color = "#cc0000";
        }

        ctx.fillStyle = color;

        ctx.fillRect(
            building.x * 64 - camera.x,
            building.y * 64 - camera.y,
            96,
            96
        );
    });

    // Town markers
    WORLD.towns.forEach(town => {

        ctx.fillStyle = "white";
        ctx.font = "20px Arial";

        ctx.fillText(
            town.name,
            town.x * 64 - camera.x,
            town.y * 64 - camera.y - 20
        );
    });
}

function drawPlayer() {

    const screenX =
        player.x - camera.x;

    const screenY =
        player.y - camera.y;

    if (playerSprite.complete) {

        ctx.drawImage(
            playerSprite,
            screenX,
            screenY,
            player.width,
            player.height
        );

    } else {

        ctx.fillStyle = "red";

        ctx.fillRect(
            screenX,
            screenY,
            player.width,
            player.height
        );
    }
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

    ctx.fillText(
        "Level: " + player.level,
        20,
        40
    );

    ctx.fillText(
        "Gold: " + player.gold,
        20,
        70
    );

    ctx.fillText(
        "Monsters: " + monsters.length,
        20,
        100
    );
}

function update() {
    updatePlayer();
}

function render() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

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
const joystick = document.getElementById("joystick");
const stick = document.getElementById("stick");

let touching = false;

joystick.addEventListener("touchstart", (e) => {
    touching = true;
});

joystick.addEventListener("touchend", (e) => {
    touching = false;

    keys["w"] = false;
    keys["a"] = false;
    keys["s"] = false;
    keys["d"] = false;

    stick.style.left = "35px";
    stick.style.top = "35px";
});

joystick.addEventListener("touchmove", (e) => {

    e.preventDefault();

    const rect = joystick.getBoundingClientRect();

    const x = e.touches[0].clientX - rect.left - 60;
    const y = e.touches[0].clientY - rect.top - 60;

    keys["w"] = y < -20;
    keys["s"] = y > 20;
    keys["a"] = x < -20;
    keys["d"] = x > 20;

    stick.style.left =
        Math.max(10, Math.min(60, x + 35)) + "px";

    stick.style.top =
        Math.max(10, Math.min(60, y + 35)) + "px";
});