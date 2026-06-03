const player = {
    x: 500,
    y: 500,
    width: 64,
    height: 64,
    speed: 4,
    level: 1,
    gold: 0
};

const playerSprite = new Image();
playerSprite.src = "assets/11E20DE3-1439-4D6D-9EBA-CD876437ABE4.png";

const keys = {
    up: false,
    down: false,
    left: false,
    right: false
};

document.addEventListener("keydown", (e) => {
    const key = e.key.toLowerCase();

    if (key === "w") keys.up = true;
    if (key === "s") keys.down = true;
    if (key === "a") keys.left = true;
    if (key === "d") keys.right = true;
});

document.addEventListener("keyup", (e) => {
    const key = e.key.toLowerCase();

    if (key === "w") keys.up = false;
    if (key === "s") keys.down = false;
    if (key === "a") keys.left = false;
    if (key === "d") keys.right = false;
});