

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d8d131ae-e2d8-454b-b961-727563add3df","e58b6aad-c3d1-4798-b253-51973df12c80","7e7ffab6-69f4-457f-8c9a-5a11e8843346","81121d4f-4868-42ec-895a-70f32704bbec","4ef50843-9ee0-45e7-9d9d-2feb8e7908b2","01eb972c-2dd8-4e33-839c-671c6c9cf323","a9fa58b9-5847-441d-b631-8aad87b986e8","d947eacb-0177-4221-b11c-b766d59b312b","fd6f2ad2-33f4-4c49-9ab7-cf261108cd31","1ee80ab3-0db9-40f3-9845-eeb5d7e0d0a8","d7742cb4-498e-403d-9188-be7360a394d8","c029f87e-7213-43d0-bd47-f43bae964045","c2fdd3c2-42b0-4940-86c4-4e9741151fb3","ff4bb72c-267e-4c67-897e-560da5484c7c"],"propsByKey":{"d8d131ae-e2d8-454b-b961-727563add3df":{"name":"AhleeFly","sourceUrl":null,"frameSize":{"x":427,"y":448},"frameCount":2,"looping":true,"frameDelay":12,"version":"DMYLrA0F0IaSUmVRORwtqBr7aUSCDGNc","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":427,"y":896},"rootRelativePath":"assets/d8d131ae-e2d8-454b-b961-727563add3df.png"},"e58b6aad-c3d1-4798-b253-51973df12c80":{"name":"AhleeIdle","sourceUrl":"assets/v3/animations/z04lD6MvJ6TEo1xNWcShJhuXbHJKQNKNgUArsrpRgsY/e58b6aad-c3d1-4798-b253-51973df12c80.png","frameSize":{"x":407,"y":460},"frameCount":1,"looping":true,"frameDelay":4,"version":"fqdVBeFtJH9QcgU7NmcfHxsFvQgLUHw4","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":407,"y":460},"rootRelativePath":"assets/v3/animations/z04lD6MvJ6TEo1xNWcShJhuXbHJKQNKNgUArsrpRgsY/e58b6aad-c3d1-4798-b253-51973df12c80.png"},"7e7ffab6-69f4-457f-8c9a-5a11e8843346":{"name":"ahleemenuBakground","sourceUrl":null,"frameSize":{"x":700,"y":700},"frameCount":1,"looping":true,"frameDelay":12,"version":"sqVzVfNqs1WDie63PyfdXMHzRgsPl9xX","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":700,"y":700},"rootRelativePath":"assets/7e7ffab6-69f4-457f-8c9a-5a11e8843346.png"},"81121d4f-4868-42ec-895a-70f32704bbec":{"name":"ahleestartButton","sourceUrl":null,"frameSize":{"x":790,"y":515},"frameCount":1,"looping":true,"frameDelay":12,"version":"moifEZ1QtA3cOrMZAU4O.KSfh3cosVLR","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":790,"y":515},"rootRelativePath":"assets/81121d4f-4868-42ec-895a-70f32704bbec.png"},"4ef50843-9ee0-45e7-9d9d-2feb8e7908b2":{"name":"ahleeceditButton","sourceUrl":null,"frameSize":{"x":700,"y":432},"frameCount":1,"looping":true,"frameDelay":12,"version":"bcBD3DskefNQXJraWFxmPGRU0dbavS8i","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":700,"y":432},"rootRelativePath":"assets/4ef50843-9ee0-45e7-9d9d-2feb8e7908b2.png"},"01eb972c-2dd8-4e33-839c-671c6c9cf323":{"name":"AhleeBase","sourceUrl":null,"frameSize":{"x":700,"y":1050},"frameCount":1,"looping":true,"frameDelay":12,"version":"B0CHDZctS2v8Vz4lOQhfagoMJPxeAR8H","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":700,"y":1050},"rootRelativePath":"assets/01eb972c-2dd8-4e33-839c-671c6c9cf323.png"},"a9fa58b9-5847-441d-b631-8aad87b986e8":{"name":"ahleeTitle","sourceUrl":"assets/v3/animations/z04lD6MvJ6TEo1xNWcShJhuXbHJKQNKNgUArsrpRgsY/a9fa58b9-5847-441d-b631-8aad87b986e8.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":4,"version":"YF9pLVA.CCkmUtkCgbsip24rGSnHNjFa","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/v3/animations/z04lD6MvJ6TEo1xNWcShJhuXbHJKQNKNgUArsrpRgsY/a9fa58b9-5847-441d-b631-8aad87b986e8.png"},"d947eacb-0177-4221-b11c-b766d59b312b":{"name":"ahleecreditScreen","sourceUrl":"assets/v3/animations/z04lD6MvJ6TEo1xNWcShJhuXbHJKQNKNgUArsrpRgsY/d947eacb-0177-4221-b11c-b766d59b312b.png","frameSize":{"x":800,"y":533},"frameCount":1,"looping":true,"frameDelay":4,"version":"hc6qJSaDTZxYsb8JmAWv6fjpLnzJ4C_6","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":533},"rootRelativePath":"assets/v3/animations/z04lD6MvJ6TEo1xNWcShJhuXbHJKQNKNgUArsrpRgsY/d947eacb-0177-4221-b11c-b766d59b312b.png"},"fd6f2ad2-33f4-4c49-9ab7-cf261108cd31":{"name":"ahleebackButton","sourceUrl":null,"frameSize":{"x":503,"y":247},"frameCount":1,"looping":true,"frameDelay":12,"version":"K4oSjma9nAB1W25pwchKWdTTIO84aomp","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":503,"y":247},"rootRelativePath":"assets/fd6f2ad2-33f4-4c49-9ab7-cf261108cd31.png"},"1ee80ab3-0db9-40f3-9845-eeb5d7e0d0a8":{"name":"ahleeDance1 (1).png_1","sourceUrl":null,"frameSize":{"x":356,"y":385},"frameCount":3,"looping":true,"frameDelay":5,"version":"WZjlAD1htDBjCSOEeQRup6QGjREd2eBA","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":712,"y":770},"rootRelativePath":"assets/1ee80ab3-0db9-40f3-9845-eeb5d7e0d0a8.png"},"d7742cb4-498e-403d-9188-be7360a394d8":{"name":"ahleeingameBg","sourceUrl":"assets/v3/animations/z04lD6MvJ6TEo1xNWcShJhuXbHJKQNKNgUArsrpRgsY/d7742cb4-498e-403d-9188-be7360a394d8.png","frameSize":{"x":700,"y":700},"frameCount":1,"looping":true,"frameDelay":4,"version":"raoxHrCDxRsUOLZUPMap_iLUyRidJwEn","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":700,"y":700},"rootRelativePath":"assets/v3/animations/z04lD6MvJ6TEo1xNWcShJhuXbHJKQNKNgUArsrpRgsY/d7742cb4-498e-403d-9188-be7360a394d8.png"},"c029f87e-7213-43d0-bd47-f43bae964045":{"name":"ahleePills","sourceUrl":"assets/v3/animations/z04lD6MvJ6TEo1xNWcShJhuXbHJKQNKNgUArsrpRgsY/c029f87e-7213-43d0-bd47-f43bae964045.png","frameSize":{"x":467,"y":700},"frameCount":1,"looping":true,"frameDelay":4,"version":"DuBAl17tqpyabKWfzQyYj5827HrzLylW","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":467,"y":700},"rootRelativePath":"assets/v3/animations/z04lD6MvJ6TEo1xNWcShJhuXbHJKQNKNgUArsrpRgsY/c029f87e-7213-43d0-bd47-f43bae964045.png"},"c2fdd3c2-42b0-4940-86c4-4e9741151fb3":{"name":"ahleeRazors","sourceUrl":null,"frameSize":{"x":319,"y":809},"frameCount":1,"looping":true,"frameDelay":12,"version":"2vQZpuSC3CQ3SIrU1_uQWO2kDsurbbvn","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":319,"y":809},"rootRelativePath":"assets/c2fdd3c2-42b0-4940-86c4-4e9741151fb3.png"},"ff4bb72c-267e-4c67-897e-560da5484c7c":{"name":"ahleeLose","sourceUrl":"assets/v3/animations/z04lD6MvJ6TEo1xNWcShJhuXbHJKQNKNgUArsrpRgsY/ff4bb72c-267e-4c67-897e-560da5484c7c.png","frameSize":{"x":600,"y":400},"frameCount":1,"looping":true,"frameDelay":4,"version":"s1SgTEuW9j7qOb9DQXkquTbqkQwRXEyz","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":400},"rootRelativePath":"assets/v3/animations/z04lD6MvJ6TEo1xNWcShJhuXbHJKQNKNgUArsrpRgsY/ff4bb72c-267e-4c67-897e-560da5484c7c.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var IGBG = createSprite(200, 200);
IGBG.setAnimation("ahleeingameBg");
IGBG.visible = 0;
IGBG.scale = 0.7;
var Ahlee = createSprite(100, 200);
var Background = createSprite(200, 200);
Background.setAnimation("ahleemenuBakground");
Background.scale = 0.6;
var Start = createSprite(200, 200);
Start.setAnimation("ahleestartButton");
Start.scale = 0.1;
var Credit = createSprite(200, 280);
Credit.setAnimation("ahleeceditButton");
Credit.scale = 0.1399;
var CreditInfo = createSprite(200, 200);
CreditInfo.setAnimation("ahleecreditScreen");
CreditInfo.scale = 0.3;
CreditInfo.visible = 0;
var Back = createSprite(200, 340);
Back.setAnimation("ahleebackButton");
Back.scale = 0.140;
Back.visible = 0;
var AhleeMenu = createSprite(320, 300);
AhleeMenu.setAnimation("AhleeBase");
AhleeMenu.scale = 0.170;
var Title = createSprite(120, 100);
Title.setAnimation("ahleeTitle");
Title.scale = 0.6;
var Razor1a = createSprite(200, randomNumber(1, 50), 10, 200);
Razor1a.setAnimation("ahleeRazors");
Razor1a.scale = 0.3;
var Razor1b = createSprite(200, randomNumber(400, 430), 10, 200);
Razor1b.setAnimation("ahleeRazors");
Razor1b.scale = 0.3;
var Razor2a = createSprite(400, randomNumber(5, 90), 10, 200);
Razor2a.setAnimation("ahleeRazors");
Razor2a.scale = 0.3;
var Razor2b = createSprite(400, randomNumber(400, 420), 10, 200);
Razor2b.setAnimation("ahleeRazors");
Razor2b.scale = 0.3;
var Razor3a = createSprite(570, randomNumber(5, 90), 10, 200);
Razor3a.setAnimation("ahleeRazors");
Razor3a.scale = 0.3;
var Razor3b = createSprite(570, randomNumber(380, 430), 10, 200);
Razor3b.setAnimation("ahleeRazors");
Razor3b.scale = 0.3;
var Pill = createSprite(500, 200);
Pill.setAnimation("ahleePills");
Pill.scale = 0.1;
Pill.visible = 0;
var Lose = createSprite(200, 200);
Lose.setAnimation("ahleeLose");
Lose.visible = 0;
var Razors = createGroup();
Razors.add(Razor1a);
Razors.add(Razor1b);
Razors.add(Razor2a);
Razors.add(Razor2b);
Razors.add(Razor3a);
Razors.add(Razor3b);
Razors.setVisibleEach(false);
Razor1a.setCollider("rectangle", 0, 0, Razor1a.width * 0.6, Razor1a.height * 0.8);
Razor1b.setCollider("rectangle", 0, 0, Razor1b.width * 0.6, Razor1b.height * 0.8);
Razor2a.setCollider("rectangle", 0, 0, Razor2a.width * 0.6, Razor2a.height * 0.8);
Razor2b.setCollider("rectangle", 0, 0, Razor2b.width * 0.6, Razor2b.height * 0.8);
Razor3a.setCollider("rectangle", 0, 0, Razor3a.width * 0.6, Razor3a.height * 0.8);
Razor3b.setCollider("rectangle", 0, 0, Razor3b.width * 0.6, Razor3b.height * 0.8);
gameEnded ();
restartGame ();

var score = 0
var menu = true
var AhleeN = true;
var currentSpeed = 3;
function draw() {
  background("white");
  if (mouseIsOver(Start)) {
    Start.scale = 0.2;
  } else {
    Start.scale = 0.1;
  }
  if (mouseIsOver(Credit)) {
    Credit.scale = 0.2;
    Back.y = 700;
  } else {
    Credit.scale = 0.1399;
  }
  if (mousePressedOver(Start) && Start.visible == 1) {
    menu = false;
    AhleeN = false;
    gameStarted();
    Menugone();
  }
  if (mousePressedOver(Credit) && Credit.visible == 1) {
    CreditM();
  }
  if (mouseIsOver(Back)) {
    Back.scale = 0.2;
  } else {
    Back.scale = 0.140;
  }
  if (mousePressedOver(Back) && Back.visible == 1) {
    Menu();
  }
  if (menu == false) {
    AhleeW ();
  }
  if ((Razor1a.x) <= -50) {
    Razor1a.y = randomNumber(1, 80);
    Razor1a.x = 500;
  }
  if ((Razor1b.x) <= -50) {
    Razor1b.y = randomNumber(400, 420);
    Razor1b.x = 500;
  }
  if ((Razor2a.x) <= -50) {
    Razor2a.y = randomNumber(5, 90);
    Razor2a.x = 500;
  }
  if ((Razor2b.x) <= -50) {
    Razor2b.y = randomNumber(380, 400);
    Razor2b.x = 500;
  }
  if ((Razor3a.x) <= -50) {
    Razor3a.y = randomNumber(5, 50);
    Razor3a.x = 500;
  }
  if ((Razor3b.x) <= -50) {
    Razor3b.y = randomNumber(320, 360);
    Razor3b.x = 500;
  }
  if (Ahlee.isTouching(Pill)) {
    score = score + 1;
    Pill.y = randomNumber(200, 230);
    Pill.x = 500;

    currentSpeed = min(currentSpeed + 0.2, 15);

    Razors.setVelocityXEach(-currentSpeed);
    Pill.velocityX = -currentSpeed;
  }
  if (Ahlee.collide(Razors)) {
    Lose.visible = 1;
    Lose.scale = 0.4;
    gameEnded();
  } else {
    
  }
  drawSprites();
  if (menu === false) {
    fill("red");
    stroke(rgb(255, 253, 208));
    strokeWeight(5);
    textSize(30);
    textFont("Press Start 2P");
    text(score, 200, 40);
  }
}

function gameStarted () {
  score = 0;
  AhleeN = false;
  Ahlee.x = 100;
  Ahlee.y = 200;
  IGBG.visible = 1;
  Pill.visible = 1;
  Razors.setVelocityXEach(-3);
  Pill.velocityX = -3;
  Razors.setVisibleEach(true);
}

function gameEnded () {
  Razors.setVelocityXEach(0);
  Pill.velocityX = 0;
  AhleeN = true;
  
}

function restartGame () {
  
  
}

function AhleeW () {
  Ahlee.setAnimation("AhleeIdle");
  Ahlee.scale = 0.140;
  if (keyDown("up") && AhleeN == false) {
    Ahlee.velocityY = -3;
    Ahlee.setAnimation("AhleeFly");
  } else if ((keyDown("space") && AhleeN == false)) {
    Ahlee.velocityY = -3;
    Ahlee.setAnimation("AhleeFly");
  } else {
    Ahlee.velocityY = 3;
    Ahlee.setAnimation("AhleeIdle");
  }
  }

function CreditM() {
  Credit.y = 700;
  Back.y = 340;
  Background.visible = 1;
  Back.visible = 1;
  CreditInfo.visible = 1;
  Start.visible = 0;
  Credit.visible = 0;
  AhleeMenu.visible = 0;
  Title.visible = 0;
}
function Menu () {
  Background.visible = 1;
  Start.visible = 1;
  Credit.visible = 1;
  Ahlee.visible = 1;
  Title.visible = 1;
  AhleeMenu.visible = 1;
  CreditInfo.visible = 0;
  Credit.y = 280;
  Back.y = 700;
}
function Menugone() {
  Background.visible = 0;
  Start.visible = 0;
  Credit.visible = 0;
  AhleeMenu.visible = 0;
  Title.visible = 0;
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
