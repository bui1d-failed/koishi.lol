let deg = 0;
let direction = 1;
const deltatime = 1000 / 15;
const spinAngle = 2;

setInterval(() => {
    deg += spinAngle * direction;
    if (deg >= 360) direction = -1;
    if (deg <= 0) direction = 1;
    document.body.style.backgroundImage = `linear-gradient(${deg}deg, rgba(107, 183, 175, 0.5), rgba(238, 133, 161, 0.8))`;
}, deltatime);
