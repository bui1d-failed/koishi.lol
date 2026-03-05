const title = "@koishi1337";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function animatedTitle() {
    while (true) {
        for (let i = 1; i <= title.length; i++) {
            document.title = title.slice(0, i);
            await sleep(300);
        }

        await sleep(600);

        for (let i = title.length - 1; i >= 1; i--) {
            document.title = title.slice(0, i);
            await sleep(300);
        }

        await sleep(600);
    }
}

animatedTitle();
