const canvas = document.getElementById(“game”);
const ctx = canvas.getContext(“2d”);

const camera = {
x: 0,
y: 0
};

function resizeCanvas() {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener(“resize”, resizeCanvas);

function setupControls() {

const controls = [
    ["up","up"],
    ["down","down"],
    ["left","left"],
    ["right","right"]
];
controls.forEach(([id,key]) => {
    const btn = document.getElementById(id);
    btn.addEventListener("touchstart",(e)=>{
        e.preventDefault();
        keys[key] = true;
    });
    btn.addEventListener("touchend",(e)=>{
        e.preventDefault();
        keys[key] = false;
    });
    btn.addEventListener("mousedown",()=>{
        keys[key] = true;
    });
    btn.addEventListener("mouseup",()=>{
        keys[key] = false;
    });
});

}

setupControls();

function updatePlayer(){

if(keys.up) player.y -= player.speed;
if(keys.down) player.y += player.speed;
if(keys.left) player.x -= player.speed;
if(keys.right) player.x += player.speed;
camera.x =
    player.x * WORLD.tileSize -
    canvas.width / 2;
camera.y =
    player.y * WORLD.tileSize -
    canvas.height / 2;

}

function drawMap(){

const tile = WORLD.tileSize;
for(let y=0;y<WORLD.map.length;y++){
    for(let x=0;x<WORLD.map[y].length;x++){
        const cell = WORLD.map[y][x];
        if(cell==="G") ctx.fillStyle="#6ecb63";
        else if(cell==="R") ctx.fillStyle="#c2a878";
        else if(cell==="T") ctx.fillStyle="#2f6b2f";
        else if(cell==="W") ctx.fillStyle="#4da6ff";
        else ctx.fillStyle="#000";
        ctx.fillRect(
            x * tile - camera.x,
            y * tile - camera.y,
            tile,
            tile
        );
    }
}

}

function drawTowns(){

WORLD.towns.forEach(town=>{
    ctx.fillStyle = "gold";
    ctx.fillRect(
        town.x * WORLD.tileSize - camera.x,
        town.y * WORLD.tileSize - camera.y,
        40,
        40
    );
});

}

function drawNPCs(){

WORLD.npcs.forEach(npc=>{
    ctx.fillStyle = "#ff00ff";
    ctx.fillRect(
        npc.x * WORLD.tileSize - camera.x,
        npc.y * WORLD.tileSize - camera.y,
        32,
        32
    );
});

}

function drawPlayer(){

ctx.fillStyle = player.color;
ctx.fillRect(
    canvas.width / 2,
    canvas.height / 2,
    player.width,
    player.height
);

}

function updateLocation(){

let current = "Wilderness";
WORLD.towns.forEach(town=>{
    const dx = Math.abs(player.x - town.x);
    const dy = Math.abs(player.y - town.y);
    if(dx < 2 && dy < 2){
        current = town.name;
    }
});
document.getElementById("location").textContent = current;

}

function gameLoop(){

updatePlayer();
updateLocation();
ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
);
drawMap();
drawTowns();
drawNPCs();
drawPlayer();
requestAnimationFrame(gameLoop);

}

gameLoop();

document
.getElementById(“interact”)
.addEventListener(“click”,()=>{

WORLD.npcs.forEach(npc=>{
    const dx = Math.abs(player.x - npc.x);
    const dy = Math.abs(player.y - npc.y);
    if(dx < 2 && dy < 2){
        document
        .getElementById("dialogue")
        .classList.remove("hidden");
        document
        .getElementById("dialogueText")
        .textContent = npc.message;
    }
});

});