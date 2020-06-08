sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    dart = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 5 4 4 4 4 . . . . . . . 
. . . . 5 2 2 2 2 4 . . . . . . 
. . . . 5 4 4 4 4 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpacePlane, 200, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let Bogey: Sprite = null
let dart: Sprite = null
let SpacePlane: Sprite = null
info.setLife(3)
SpacePlane = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 5 2 . . . . . . . . . . . . . 
. 5 8 2 2 2 2 2 b . . . . . . . 
. 5 2 8 9 9 9 9 2 2 2 2 b . . . 
. . . 2 8 5 5 5 9 9 9 7 2 2 . . 
. . . 2 8 5 5 5 9 9 9 7 2 2 . . 
. 5 2 8 9 9 9 9 2 2 2 2 b . . . 
. 5 8 2 2 2 2 2 b . . . . . . . 
. 5 2 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
SpacePlane.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(SpacePlane, 200, 200)
game.onUpdateInterval(500, function () {
    Bogey = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 3 7 a 7 3 . . . . . 
. . . . a a 7 5 5 5 7 a a . . . 
. . . a 5 5 5 2 2 2 5 5 5 a . . 
. . . . a a 7 5 5 5 7 a a . . . 
. . . . . . 3 7 a 7 3 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    Bogey.setVelocity(-100, 0)
    Bogey.setPosition(180, Math.randomRange(0, 180))
})
