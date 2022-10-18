new TypeIt("#titletext", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("19004")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("翻页")
    .pause(1500)
    .delete(null, {
        delay: 1000
    })
    .type("我们的青春相册")
    .pause(3000)
    .go();

new TypeIt('#messageboard', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();