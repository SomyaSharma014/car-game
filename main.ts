controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
let mySprite = sprites.create(img`
    . . . . . . 7 7 7 7 7 7 . . . . 
    . . . . . 7 7 7 7 7 7 7 7 7 . . 
    . . . . 7 c 3 3 3 3 3 3 c 3 . . 
    . . . 7 3 c d 3 3 3 3 3 c 3 7 . 
    . . . 7 3 3 d 3 3 3 3 3 c 3 7 . 
    . . . f 3 3 d 3 3 3 3 3 3 3 f . 
    . . . f 3 3 d 3 3 3 3 3 3 3 f . 
    . . . f 3 c 3 d d 3 3 3 c 3 f . 
    . . . a 3 c a c c c c a c 3 a . 
    . . . a 3 a c b b b b c a 3 a . 
    . . . a 3 a b b b b b b a 3 a . 
    . . . a a a a a a a a a a a a . 
    . . . f a d a a a a a a d a f . 
    . . . f a 3 d a a a a d 3 a f . 
    . . . f f a a a a a a a a f f . 
    . . . . f f . . . . . . f f . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
