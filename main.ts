namespace SpriteKind {
    export const sword = SpriteKind.create()
    export const Timer = SpriteKind.create()
    export const hoyo = SpriteKind.create()
}
/**
 * Trash
 */
/**
 * functions of my characters
 */
/**
 * Canon Balls  function
 */
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.setGameOverMessage(true, "zzzzzzzzzzzzzz")
    game.gameOver(true)
    music.stopAllSounds()
    music.play(music.createSong(assets.song`mySong0`), music.PlaybackMode.LoopingInBackground)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    if (true) {
        game.splash("stop falling")
        music.stopAllSounds()
        music.play(music.stringPlayable("E B C5 A B G A F ", 292), music.PlaybackMode.LoopingInBackground)
        game.gameOver(false)
    } else {
    	
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, playersprite)
    lastdirection = 0
    walk()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    blueghost2.follow(playersprite, 60)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles13, function (sprite, location) {
    game.setGameOverMessage(false, "stop falling")
    game.gameOver(false)
})
function ENEMYGHOST () {
    Enemysprite = sprites.create(assets.image`myImage`, SpriteKind.Enemy)
    Enemysprite.setBounceOnWall(true)
    Enemysprite.setPosition(randint(55, 85), randint(80, 100))
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (lastdirection == 0) {
        animation.runImageAnimation(
        RIGHTSWORD,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 1 1 . . . . 
            . . . . . . . . . . . 1 1 1 . . 
            . . . . . . . . 1 1 . . . 1 1 . 
            . . . . . . . . . . 1 1 . . . . 
            . . . . . . . . . . . . 1 1 . . 
            . . . . . . . . . . . . . . 1 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 1 1 1 1 1 . . . . 
            . . . . . 2 2 . . . . 1 1 . . . 
            . . . . . 2 1 1 1 1 . . . . . . 
            . . . . . . . . . . 1 1 . . 1 . 
            . . . . . . . . . . . . . 1 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 1 1 1 . . . . . . . . 
            . . 2 2 1 1 . . . . . 1 . . . . 
            . 2 1 1 1 . . . . . . . 1 . . . 
            2 1 1 . 2 2 1 1 1 . . . . . . . 
            2 1 . 2 1 1 1 . . . 1 . . . . . 
            . . 2 1 1 . . . . . . . . . . . 
            . . 2 1 . . . . . . . . . . . . 
            . 2 1 . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 . . . . . . . . . 
            . . . 2 2 . . . . 2 . 2 2 . . . 
            . . . . 2 . . 2 2 . . . . 2 . . 
            . . 2 . . . . . . . . . . 2 . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . 1 1 2 2 2 . . 1 1 1 . . . 
            . 1 1 2 . . . 1 1 1 . 2 2 1 . . 
            . 2 . . . 1 1 . . . 1 . 2 2 1 . 
            . . 2 1 1 . . . . . . 1 1 2 2 . 
            . 1 1 1 . . . . . . . . 1 1 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        false
        )
        createtimer(100)
    } else if (lastdirection == 1) {
        animation.runImageAnimation(
        RIGHTSWORD,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . b 9 9 9 9 . . . . 
            . . . . . . b 9 9 9 9 9 9 . . . 
            . . . . . . b 9 . . . . 9 9 . . 
            . . . . . b b . . . . . . 9 . . 
            . . . . . b . . . . . . . . . . 
            . . . . b b . . . . . . . . . . 
            . . . . b . . . . . . . . . . . 
            . . . b b . . . . . . . . . . . 
            . . . b . . . . . . . . . . . . 
            . . b b . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 1 . . . . . . . 
            . . . . . . . . . . b b . . . . 
            . . . . . . 1 . . b b 9 9 . . . 
            . . . . . . . . b b 9 9 9 9 . . 
            . . . . . . . b b 9 . . 9 9 2 . 
            . . . . . . b b . . . . . 9 9 . 
            . . . . . b b . . . . . . 9 9 2 
            . . . . b b . . . . . . . . 9 2 
            . . . b b . . . . . . . . . . . 
            . . b b . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . 1 2 . . . 
            . . . . . . . . . . . . 1 . . 2 
            . . . . . . . 1 . . 2 . . 2 . . 
            . . . . . . . 1 1 . . . . 1 2 . 
            . . . . . . . . 1 . . . . . 2 . 
            . . . . . . . . . . . b b b 2 . 
            . . . . . . . . . b b b 9 9 2 . 
            . . . . . . . b b b b 9 9 9 9 . 
            . . . . . b b b . . . . . 9 9 . 
            . . . b b b . . . . 2 . . 9 9 . 
            . . b b . . . . . . . . . . 9 . 
            . . . . . . . . . . . . . . 9 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 1 . . . 2 . 
            . . . . . . . . . . . 1 . . . . 
            . . . . . . . 1 . . . . 1 . . . 
            . . . . . . . . 1 . . . 1 . 2 . 
            . . . . . 2 . . 1 1 . . 1 1 . . 
            . . . . . . . . . 1 . . . 1 . . 
            . . . . . . . . . . . . . . . . 
            . . b b b b b b b b b b b b . . 
            . . b b b . . . . . . 9 9 9 . . 
            . . . . . . . . . . . . 9 9 9 . 
            . . . . . . . . . 2 . . 9 9 2 . 
            . . . . . . . 2 . . . . . 9 9 . 
            . . . . . . . . . 2 . 2 . 9 9 . 
            . . . . . . . . . . . . . 9 . . 
            . . . . . . . . . . 2 . 2 2 2 . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        false
        )
        createtimer(100)
    } else if (lastdirection == 2) {
        animation.runImageAnimation(
        RIGHTSWORD,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . b b . . . . . . 
            . . . . . . . . . b b . . . . . 
            . . . . . . . . . . b b . . . . 
            . . . . . . . . . . . b b . . . 
            . . . . . . . . . . . . b b . . 
            . . . . . . . . . . . . 9 b b . 
            . . . . . . . . . . . . 9 9 b . 
            . . . . . . . . . . . 9 9 . . . 
            . . . . . . . . . . 9 9 . . . . 
            . . . . . . . . . 9 9 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . b b . . . . . . 
            . . . . . . . . . b . . 1 . . . 
            . . . . . . . . . b . 1 . . . . 
            . . . . . . . . . b b . . . . . 
            . . . . . . . . . . b . . . . . 
            . . . . . . . . . . b . . 1 . . 
            . . . . . . . . . . b b 1 . . . 
            . . . . . . . . . . 9 b . . . . 
            . . . . 9 . . . 9 9 9 b . . . . 
            . . . . . 9 9 9 9 9 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . . b . . . 1 . . . . 
            . . . . . . b . . 1 1 . . . . . 
            . . . . . . b . . . . . . . . . 
            9 . . . . 9 b . . . . . . . . . 
            9 9 9 . . 9 b . . . . . . . . . 
            . 9 9 9 9 b . . . 1 . . . . . . 
            . . . 9 9 . . 1 1 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . b b . . . . . . . . 
            . . . . . b b . . . . . . . . . 
            . . . . b b . . . . . . . . . . 
            . 9 9 b b . . . . . . . . . . . 
            9 9 b b . . 1 . . . . . . . . . 
            9 b b . . . . 1 . . . . . . . . 
            9 b . . . . . . . . . . . . . . 
            . . . 1 . . . . . . . . . . . . 
            . . . . 1 . . . . . . . . . . . 
            . . . . . . 1 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        false
        )
        createtimer(100)
    } else {
        animation.runImageAnimation(
        RIGHTSWORD,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 9 9 9 9 b . . . . . . . 
            . . . 9 9 9 9 9 9 b . . . . . . 
            . . 9 9 . . . . 9 b . . . . . . 
            . . 9 . . . . . . b b . . . . . 
            . . . . . . . . . . b . . . . . 
            . . . . . . . . . . b b . . . . 
            . . . . . . . . . . . b . . . . 
            . . . . . . . . . . . b b . . . 
            . . . . . . . . . . . . b . . . 
            . . . . . . . . . . . . b b . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . b b . . . . . . . . . . 
            . . . 9 9 b b . . 1 . . . . . . 
            . 2 9 9 9 9 b b . . . . . . . . 
            . 9 9 9 . . 9 b b . . . . . . . 
            . 9 9 . . . . . b b . . . . . . 
            2 9 9 . . . . . . b b . . . . . 
            2 9 . . . . . . . . b b . . . . 
            . . . . . . . . . . . b b . . . 
            . . . . . . . . . . . . b b . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . 2 1 . . . . . . . . . . . 
            . . . 1 . . 2 . . . . . . . . . 
            . . 2 . . . . . 1 . . . . . . . 
            . . 1 . . . . 1 1 . . . . . . . 
            . 2 . . . . . 1 . . . . . . . . 
            . 2 b b b . . . . . . . . . . . 
            . 2 9 9 b b b . . . . . . . . . 
            . 9 9 9 9 b b b b . . . . . . . 
            . 9 9 . . . . . b b b . . . . . 
            . 9 9 . . . . . . . b b b . . . 
            . 9 . . . 2 . . . . . . b b . . 
            . 9 . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            2 . . . . . . . . . . . . . . . 
            . . . . . . 2 . . . . . . . . . 
            . . . 2 1 . . . . . . . . . . . 
            . . 2 1 . . . 2 1 . . . . . . . 
            . 2 1 . . . . 1 . . . . . . . . 
            . 2 1 . . . 2 1 . . . . . . . . 
            2 1 . . . 2 1 . . . . . . . . . 
            2 1 . 2 . 2 1 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . b b b b . . . . . . . . . . 
            . 2 9 9 9 b b b b b b b b b . . 
            . 2 9 9 . . . . . . . b b b . . 
            . 9 9 9 . 2 . . 2 . . . . . . . 
            . 9 9 . . . . . . . . . . . . . 
            2 9 9 . 2 . . 2 . . . . . . . . 
            2 9 2 2 . . . . . . 2 . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        false
        )
        createtimer(100)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.setGameOverMessage(false, "No more gifts for you")
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    RED_ghost.follow(playersprite, 60)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles5, function (sprite, location) {
    game.setGameOverMessage(false, "not again")
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    if (canonball2) {
        info.changeLifeBy(-1)
        pause(1000)
    } else if (info.life() == 0) {
        sprites.destroy(otherSprite, effects.fire, 500)
        game.setGameOverMessage(false, "canon ball")
        game.gameOver(false)
    }
})
function walk () {
    if (lastdirection == 0) {
        animation.runImageAnimation(
        playersprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f f . . . . 
            . . . f 2 2 2 2 2 2 2 2 f . . . 
            . . f f f f f 2 2 2 2 2 f f . . 
            . . f f 2 2 2 2 2 f f f f f . . 
            . . f 1 1 1 1 f f 1 f 1 1 f . . 
            . . f f f 1 1 1 1 1 1 f f f . . 
            . f f 1 f f f f f f f f 1 f f . 
            . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            . . f 1 1 1 1 1 1 1 1 1 1 f . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . d d 2 2 2 2 2 2 2 2 d d . . 
            . . d d 2 2 2 2 2 2 2 2 d d . . 
            . . d d f 1 1 1 1 1 1 f d d . . 
            . . . . f 2 2 f f 2 2 f . . . . 
            . . . . f 2 2 f f 2 2 f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 2 2 2 2 2 2 f . . . . 
            . . . f 2 2 2 2 2 2 2 2 f . . . 
            . . . f 2 2 f 2 2 f f f f . . . 
            . . f f f f 1 1 1 1 1 1 f f . . 
            . . f 1 1 1 1 f f f 1 f 1 f . . 
            . . f f f f f 1 1 1 f f f f . . 
            . . f 1 1 1 1 1 1 1 1 1 1 f . . 
            . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            . . f f 1 1 1 1 1 1 1 1 f f . . 
            . . . 2 f f f f f f f f f 2 . . 
            . . . d f 1 1 1 1 1 f 2 2 2 . . 
            . . . 2 f 2 f f f f f f f . . . 
            . . . . f 2 2 f . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f f . . . . 
            . . . f 2 2 2 2 2 2 2 2 f . . . 
            . . f f f f f 2 2 2 2 2 f f . . 
            . . f f 2 2 2 2 2 f f f f f . . 
            . . f 1 1 1 1 f f 1 f 1 1 f . . 
            . . f f f 1 1 1 1 1 1 f f f . . 
            . f f 1 f f f f f f f f 1 f f . 
            . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            . . f 1 1 1 1 1 1 1 1 1 1 f . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . d d 2 2 2 2 2 2 2 2 d d . . 
            . . d d 2 2 2 2 2 2 2 2 d d . . 
            . . d d f 1 1 1 1 1 1 f d d . . 
            . . . . f 2 2 f f 2 2 f . . . . 
            . . . . f 2 2 f f 2 2 f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 2 2 2 2 2 2 f . . . . 
            . . . f 2 2 2 2 2 2 2 2 f . . . 
            . . . f 2 2 f 2 2 f f f f . . . 
            . . f f f f 1 1 1 1 1 1 f f . . 
            . . f 1 1 1 1 f f f 1 f 1 f . . 
            . . f f f f f 1 1 1 f f f f . . 
            . . f 1 1 1 1 1 1 1 1 1 1 f . . 
            . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            . . f f 1 1 1 1 1 1 1 1 f f . . 
            . . 2 f f f f f f f f f f 2 . . 
            . . 2 2 f 1 1 1 1 1 1 1 f d . . 
            . . . f f f f f f f f f f 2 . . 
            . . . . . . . . . f 2 2 f . . . 
            `],
        200,
        true
        )
    } else if (lastdirection == 1) {
        animation.runImageAnimation(
        playersprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f f . . . 
            . . . . f 2 2 2 2 f 2 2 2 f . . 
            . . . f 2 2 2 f f 2 2 2 2 f . . 
            . . . f f f f 1 1 1 1 1 1 1 f . 
            . . . f 1 1 1 1 f f f f 1 1 f . 
            . . f f f f f f f 1 1 1 f f f . 
            . . f f 1 d d d b f d d 1 1 f . 
            . . f 1 1 d d d 1 f d d 1 f . . 
            . . . f 1 1 1 d d d d 1 1 f . . 
            . . . . f f 1 1 1 1 1 1 f . . . 
            . . . . . f d d 2 2 2 1 f . . . 
            . . . . . f d d 1 1 1 5 f . . . 
            . . . . . f f 2 2 f 2 2 f . . . 
            . . . . . . f 2 2 f 2 2 f . . . 
            . . . . . . . f f . f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f 2 2 2 2 f 2 f . . . 
            . . . f f 2 2 2 2 f 2 2 2 f . . 
            . . . f 2 2 2 f f 2 2 2 2 f . . 
            . . . f f f f 1 1 1 1 1 1 1 f . 
            . . . f 1 1 1 1 f f f f 1 1 f . 
            . . f f f f f f f 1 1 1 f f f . 
            . . f f 1 d d d b f d d 1 1 f . 
            . . f 1 1 d d d 1 f d d 1 f . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . . . f 2 d d 2 2 2 f . . . 
            . . . . . f 2 d d 2 2 1 f . . . 
            . . . . . f 1 1 1 1 1 5 f . . . 
            . . . . . f 2 f f . f 2 f f . . 
            . . . . . f 2 2 f . f 2 2 f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f f . . . 
            . . . . f 2 2 2 2 f 2 2 2 f . . 
            . . . f 2 2 2 f f 2 2 2 2 f . . 
            . . . f f f f 1 1 1 1 1 1 1 f . 
            . . . f 1 1 1 1 f f f f 1 1 f . 
            . . f f f f f f f 1 1 1 f f f . 
            . . f f 1 d d d b f d d 1 1 f . 
            . . f 1 1 d d d 1 f d d 1 f . . 
            . . . f 1 1 1 d d d d 1 1 f . . 
            . . . . f f 1 1 1 1 1 1 f . . . 
            . . . . . f d d 2 2 2 1 f . . . 
            . . . . . f d d 1 1 1 5 f . . . 
            . . . . . f f 2 2 f 2 2 f . . . 
            . . . . . . f 2 2 f 2 2 f . . . 
            . . . . . . . f f . f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f 2 2 2 2 f 2 f . . . 
            . . . f f 2 2 2 2 f 2 2 2 f . . 
            . . . f 2 2 2 f f 2 2 2 2 f . . 
            . . . f f f f 1 1 1 1 1 1 1 f . 
            . . . f 1 1 1 1 f f f f 1 1 f . 
            . . f f f f f f f 1 1 1 f f f . 
            . . f f 1 d d d b f d d 1 1 f . 
            . . f 1 1 d d d 1 f d d 1 f . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . . . f 2 d d 2 2 2 f . . . 
            . . . . . f 2 d d 2 2 1 f . . . 
            . . . . . f 1 1 1 1 1 5 f . . . 
            . . . . . f 2 f f . f 2 f f . . 
            . . . . . f 2 2 f . f 2 2 f . . 
            `],
        200,
        true
        )
    } else if (lastdirection == 2) {
        animation.runImageAnimation(
        playersprite,
        assets.animation`walkingup`,
        200,
        true
        )
    } else if (lastdirection == 3) {
        animation.runImageAnimation(
        playersprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f f . . . . 
            . . f 2 2 2 f 2 2 2 2 f f . . . 
            . . f 2 2 2 2 f f 2 2 2 f . . . 
            . f f 1 1 1 1 1 1 f f f f . . . 
            . f 1 1 f f f f 1 1 1 1 f . . . 
            . f f f 1 1 1 f f f f f f f . . 
            . f 1 1 d d f b d d d 1 f f . . 
            . . f 1 d d f 1 d d d 1 1 f . . 
            . . . f 1 d d d d 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 f f . . . . 
            . . . f 2 2 2 2 d d f . . . . . 
            . . . f 1 2 2 2 d d f . . . . . 
            . . . f 5 5 1 1 1 1 f . . . . . 
            . . . . f 2 2 2 2 2 f . . . . . 
            . . . . f 2 2 f 2 2 f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f 2 2 2 2 f f . . . . 
            . . f 2 2 2 f 2 2 2 2 f f . . . 
            . . f 2 2 2 2 f f 2 2 2 f . . . 
            . f 1 1 1 1 1 1 1 f f f f . . . 
            . f 1 1 f f f f 1 1 1 1 f . . . 
            . f f f 1 1 1 f f f f f f f . . 
            . f 1 1 d d f b d d d 1 f f . . 
            . . f 1 d d f 1 d d d 1 1 f . . 
            . . f 1 1 1 1 1 1 1 1 1 f . . . 
            . . . f 2 2 2 d d 2 f . . . . . 
            . . . f 1 2 2 d d 2 f . . . . . 
            . . . f 5 1 f 1 1 1 f . . . . . 
            . . f f 2 f f f f 2 f . . . . . 
            . . f 2 2 f . f 2 2 f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f f . . . . 
            . . f 2 2 2 f 2 2 2 2 f f . . . 
            . . f 2 2 2 2 f f 2 2 2 f . . . 
            . f f 1 1 1 1 1 1 f f f f . . . 
            . f 1 1 f f f f 1 1 1 1 f . . . 
            . f f f 1 1 1 f f f f f f f . . 
            . f 1 1 d d f b d d d 1 f f . . 
            . . f 1 d d f 1 d d d 1 1 f . . 
            . . . f 1 d d d d 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 f f . . . . 
            . . . f 2 2 2 2 d d f . . . . . 
            . . . f 1 2 2 2 d d f . . . . . 
            . . . f 5 5 1 1 1 1 f . . . . . 
            . . . . f 2 2 2 2 2 f . . . . . 
            . . . . f 2 2 f 2 2 f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f 2 2 2 2 f f . . . . 
            . . f 2 2 2 f 2 2 2 2 f f . . . 
            . . f 2 2 2 2 f f 2 2 2 f . . . 
            . f 1 1 1 1 1 1 1 f f f f . . . 
            . f 1 1 f f f f 1 1 1 1 f . . . 
            . f f f 1 1 1 f f f f f f f . . 
            . f 1 1 d d f b d d d 1 f f . . 
            . . f 1 d d f 1 d d d 1 1 f . . 
            . . f 1 1 1 1 1 1 1 1 1 f . . . 
            . . . f 2 2 2 d d 2 f . . . . . 
            . . . f 1 2 2 d d 2 f . . . . . 
            . . . f 5 1 f 1 1 1 f . . . . . 
            . . f f 2 f f f f 2 f . . . . . 
            . . f 2 2 f . f 2 2 f . . . . . 
            `],
        200,
        true
        )
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, playersprite)
    lastdirection = 3
    walk()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    if (true) {
        game.splash("and kratos cast himself from the highest mountain in all of greece")
        game.gameOver(false)
        music.stopAllSounds()
        music.play(music.createSong(assets.song`mySong0`), music.PlaybackMode.LoopingInBackground)
    } else {
    	
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles10, function (sprite, location) {
    if (true) {
        game.splash("falling")
        game.gameOver(false)
        music.stopAllSounds()
        music.play(music.stringPlayable("E B C5 A B G A F ", 346), music.PlaybackMode.UntilDone)
    } else {
    	
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`button`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(17, 29), sprites.dungeon.doorOpenSouth)
    tiles.setWallAt(tiles.getTileLocation(17, 29), false)
    tiles.setTileAt(tiles.getTileLocation(37, 23), assets.tile`button0`)
    scene.cameraShake(5, 500)
    music.stopAllSounds()
    music.play(music.createSong(assets.song`door open`), music.PlaybackMode.UntilDone)
    music.play(music.createSong(hex`0078000408040206001c00010a006400f401640000040000000000000000000000000000000002a8000000040001200400080001240c001000012410001400012414001800011e18001c00012020002400021e2728002c000124300034000220273400380002222c38003c00011e3c00400001274000440002202944004800012248004c0001274c005000012450005400012254005800021d2558005c00012c5c006000012260006400012564006800021e2a68006c00012270007400012274007800012578007c0001297c008000012409010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8006900000001000100080009000100100011000100180019000100200021000100280029000100300031000100380039000200024000410002000148004900020001500051000200015800590002000160006100020002680069000200027000710002000278007900020002`), music.PlaybackMode.LoopingInBackground)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    music.stopAllSounds()
    game.splash("yea that is not a chest")
    music.play(music.createSong(assets.song`mySong0`), music.PlaybackMode.LoopingInBackground)
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundSouth, function (sprite, location) {
    Enemysprite.follow(playersprite, 50)
})
function changelevel (levelnum: number) {
    if (levelnum == 0) {
        tiles.setCurrentTilemap(tilemap`level`)
    } else if (levelnum == 1) {
        tiles.setCurrentTilemap(tilemap`level`)
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, playersprite)
    lastdirection = 1
    walk()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundSouthEast0, function (sprite, location) {
    Enemysprite.follow(playersprite, 50)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.setGameOverMessage(false, "why?")
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.sword, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (RIGHTSWORD) {
        sprites.destroy(otherSprite, effects.fire, 500)
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    if (BLUEGHOST || (RED_ghost || blueghost2)) {
        info.changeLifeBy(-1)
        pause(1000)
    } else if (info.life() == 0) {
        sprites.destroy(otherSprite, effects.fire, 500)
        game.gameOver(false)
    } else {
    	
    }
})
function SANTA () {
    info.setLife(3)
    playersprite = sprites.create(assets.image`Santa`, SpriteKind.Player)
    controller.moveSprite(playersprite)
    currentlevel = 0
    scene.cameraFollowSprite(playersprite)
    scene.setBackgroundColor(6)
    tiles.placeOnRandomTile(playersprite, assets.tile`myTile2`)
    RIGHTSWORD = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.sword)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, playersprite)
    lastdirection = 2
    walk()
})
// dead code
function createtimer (ms: number) {
    timer = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Timer)
    timer.setFlag(SpriteFlag.Ghost, true)
    timer.lifespan = ms
}
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles14, function (sprite, location) {
    game.setGameOverMessage(false, "stop falling ")
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile9, function (sprite, location) {
    BLUEGHOST.follow(playersprite, 60)
})
function enemyghost2 () {
    BLUEGHOST = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff9999ff........
        .......fb999999bf.......
        .......f99999999f.......
        ......fd99999999df......
        ......fd99999999df......
        ......fddd9999dddf......
        ......fbdbfddfbdbf......
        ......fcdcf99fcdcf......
        .......fb999999bf.......
        ......fffcdb9bdffff.....
        ....fc999cbfbfc999cf....
        ....f9b9b9ffff9b9b9f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(BLUEGHOST, sprites.swamp.swampTile9)
    BLUEGHOST.setVelocity(0, -81)
    blueghost2 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff9999ff........
        .......fb999999bf.......
        .......f99999999f.......
        ......fd99999999df......
        ......fd99999999df......
        ......fddd9999dddf......
        ......fbdbfddfbdbf......
        ......fcdcf99fcdcf......
        .......fb999999bf.......
        ......fffcdb9bdffff.....
        ....fc999cbfbfc999cf....
        ....f9b9b9ffff9b9b9f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(blueghost2, assets.tile`myTile6`)
    blueghost2.setVelocity(0, -81)
    RED_ghost = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff2222ff........
        .......f52222225f.......
        .......f22222222f.......
        ......f4222222224f......
        ......f4222222224f......
        ......f4442222444f......
        ......f545f44f545f......
        ......fc4cf22fc4cf......
        .......f52222225f.......
        ......fffc45254ffff.....
        ....fc222c5f5fc222cf....
        ....f25252ffff25252f....
        ....f5f5ffffff5f5f5f....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(RED_ghost, assets.tile`myTile7`)
    RED_ghost.setVelocity(0, -81)
}
sprites.onDestroyed(SpriteKind.Timer, function (sprite) {
    animation.stopAnimation(animation.AnimationTypes.All, playersprite)
    walk()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundSouthWest0, function (sprite, location) {
    Enemysprite.follow(playersprite, 60)
})
let moving = false
let timer: Sprite = null
let currentlevel = 0
let BLUEGHOST: Sprite = null
let canonball2: Sprite = null
let RED_ghost: Sprite = null
let RIGHTSWORD: Sprite = null
let Enemysprite: Sprite = null
let blueghost2: Sprite = null
let lastdirection = 0
let playersprite: Sprite = null
changelevel(0)
ENEMYGHOST()
SANTA()
enemyghost2()
music.stopAllSounds()
game.splash("I AM SANTA ")
game.splash("Try to escape from santa's dream ")
game.splash("You can attack pressing spacebar or (A)")
music.setVolume(41)
music.play(music.createSong(hex`0078000408040206001c00010a006400f401640000040000000000000000000000000000000002a8000000040001200400080001240c001000012410001400012414001800011e18001c00012020002400021e2728002c000124300034000220273400380002222c38003c00011e3c00400001274000440002202944004800012248004c0001274c005000012450005400012254005800021d2558005c00012c5c006000012260006400012564006800021e2a68006c00012270007400012274007800012578007c0001297c008000012409010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800710000000100020c0008000900010010001100020c0018001900010020002100020c0028002900010030003100020c003800390002000240004100030c00014800490002000150005100030c00015800590002000160006100030c00026800690002000270007100030c000278007900020002`), music.PlaybackMode.LoopingInBackground)
lantern.startLanternEffect(playersprite)
lantern.setBreathingEnabled(true)
lantern.setLightBandWidth(40)
game.onUpdate(function () {
    if (BLUEGHOST.isHittingTile(CollisionDirection.Top)) {
        BLUEGHOST.vy += 50
    } else if (BLUEGHOST.isHittingTile(CollisionDirection.Bottom)) {
        BLUEGHOST.vy += -50
    }
    if (blueghost2.isHittingTile(CollisionDirection.Top)) {
        blueghost2.vy += 70
    } else if (blueghost2.isHittingTile(CollisionDirection.Bottom)) {
        blueghost2.vy += -70
    }
    if (RED_ghost.isHittingTile(CollisionDirection.Top)) {
        RED_ghost.vy += 80
    } else if (RED_ghost.isHittingTile(CollisionDirection.Bottom)) {
        RED_ghost.vy += -80
    }
})
game.onUpdate(function () {
    if (lastdirection == 0) {
        RIGHTSWORD.bottom = playersprite.top
        RIGHTSWORD.x = playersprite.x
    } else if (lastdirection == 1) {
        RIGHTSWORD.left = playersprite.right
        RIGHTSWORD.y = playersprite.y
    } else if (lastdirection == 2) {
        RIGHTSWORD.top = playersprite.bottom
        RIGHTSWORD.x = playersprite.x
    } else {
        RIGHTSWORD.right = playersprite.left
        RIGHTSWORD.y = playersprite.y
    }
})
// up=0
// 
// right=1
// 
// down=2
// 
// left=3
game.onUpdate(function () {
    moving = controller.down.isPressed() || (controller.up.isPressed() || (controller.right.isPressed() || controller.left.isPressed()))
    if (!(moving)) {
        animation.stopAnimation(animation.AnimationTypes.All, playersprite)
    }
})
forever(function () {
    canonball2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . 3 3 3 3 4 4 4 4 4 4 . . . 
        . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
        . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
        . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
        . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
        . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
        . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
        . . . 4 2 2 2 2 2 2 2 2 4 . . . 
        . . . . 4 4 2 2 2 2 4 4 . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    tiles.placeOnTile(canonball2, tiles.getTileLocation(19, 1))
    canonball2.setVelocity(0, 29)
    canonball2.setFlag(SpriteFlag.DestroyOnWall, true)
    canonball2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . 3 3 3 3 4 4 4 4 4 4 . . . 
        . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
        . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
        . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
        . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
        . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
        . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
        . . . 4 2 2 2 2 2 2 2 2 4 . . . 
        . . . . 4 4 2 2 2 2 4 4 . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    tiles.placeOnTile(canonball2, tiles.getTileLocation(20, 1))
    canonball2.setVelocity(0, 29)
    canonball2.setFlag(SpriteFlag.DestroyOnWall, true)
    canonball2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . 3 3 3 3 4 4 4 4 4 4 . . . 
        . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
        . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
        . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
        . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
        . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
        . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
        . . . 4 2 2 2 2 2 2 2 2 4 . . . 
        . . . . 4 4 2 2 2 2 4 4 . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    tiles.placeOnTile(canonball2, tiles.getTileLocation(18, 1))
    canonball2.setVelocity(0, 29)
    canonball2.setFlag(SpriteFlag.DestroyOnWall, true)
    canonball2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . 3 3 3 3 4 4 4 4 4 4 . . . 
        . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
        . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
        . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
        . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
        . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
        . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
        . . . 4 2 2 2 2 2 2 2 2 4 . . . 
        . . . . 4 4 2 2 2 2 4 4 . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    tiles.placeOnTile(canonball2, tiles.getTileLocation(17, 1))
    canonball2.setVelocity(0, 29)
    canonball2.setFlag(SpriteFlag.DestroyOnWall, true)
    pause(2000)
})
forever(function () {
    canonball2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . 3 3 3 3 4 4 4 4 4 4 . . . 
        . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
        . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
        . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
        . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
        . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
        . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
        . . . 4 2 2 2 2 2 2 2 2 4 . . . 
        . . . . 4 4 2 2 2 2 4 4 . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    tiles.placeOnTile(canonball2, tiles.getTileLocation(14, 28))
    canonball2.setVelocity(-26, 0)
    canonball2.setFlag(SpriteFlag.DestroyOnWall, true)
    pause(5000)
})
forever(function () {
    canonball2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . 3 3 3 3 4 4 4 4 4 4 . . . 
        . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
        . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
        . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
        . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
        . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
        . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
        . . . 4 2 2 2 2 2 2 2 2 4 . . . 
        . . . . 4 4 2 2 2 2 4 4 . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    tiles.placeOnTile(canonball2, tiles.getTileLocation(10, 38))
    canonball2.setVelocity(0, -32)
    canonball2.setFlag(SpriteFlag.DestroyOnWall, true)
    canonball2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . 3 3 3 3 4 4 4 4 4 4 . . . 
        . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
        . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
        . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
        . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
        . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
        . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
        . . . 4 2 2 2 2 2 2 2 2 4 . . . 
        . . . . 4 4 2 2 2 2 4 4 . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    tiles.placeOnTile(canonball2, tiles.getTileLocation(14, 36))
    canonball2.setVelocity(-30, 0)
    canonball2.setFlag(SpriteFlag.DestroyOnWall, true)
    pause(3000)
})
forever(function () {
    canonball2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . 3 3 3 3 4 4 4 4 4 4 . . . 
        . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
        . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
        . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
        . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
        . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
        . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
        . . . 4 2 2 2 2 2 2 2 2 4 . . . 
        . . . . 4 4 2 2 2 2 4 4 . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    tiles.placeOnTile(canonball2, tiles.getTileLocation(27, 30))
    canonball2.setVelocity(0, 30)
    canonball2.setFlag(SpriteFlag.DestroyOnWall, true)
    canonball2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . 3 3 3 3 4 4 4 4 4 4 . . . 
        . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
        . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
        . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
        . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
        . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
        . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
        . . . 4 2 2 2 2 2 2 2 2 4 . . . 
        . . . . 4 4 2 2 2 2 4 4 . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    tiles.placeOnTile(canonball2, tiles.getTileLocation(35, 30))
    canonball2.setVelocity(0, 30)
    canonball2.setFlag(SpriteFlag.DestroyOnWall, true)
    pause(4000)
})
forever(function () {
    canonball2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . 3 3 3 3 4 4 4 4 4 4 . . . 
        . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
        . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
        . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
        . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
        . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
        . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
        . . . 4 2 2 2 2 2 2 2 2 4 . . . 
        . . . . 4 4 2 2 2 2 4 4 . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    tiles.placeOnTile(canonball2, tiles.getTileLocation(23, 38))
    canonball2.setVelocity(0, -30)
    canonball2.setFlag(SpriteFlag.DestroyOnWall, true)
    pause(4000)
})
