// level counter
let counter = 0;

// assets
let bluebutton;
let brownbutton;
let cardigan;
let cardigantoplayer;
let clip;
let editor;
let greenbutton;
let greenbuttonhover;
let hand;
let mystring;
let myarray;
let orangebutton;
let parenthesessemicolon;
let pin;
let pins;
let pinonbutton;
let pushtext;
let pushthebuttonmusic;
let sewingdesk;
let street;
let textline;

// title animation
let randomys = []
let oldmillis = 0;
let bgimages = [];
let imagemillis = null;
let imageindex = 0;
let opac0 = 150;
let opac1 = 0;
let opac2 = 0;
let opac3 = 0;
let opac4 = 0;

// level 1
let level1bool = false;
let signrotation;
let rightleftvar = "right";
let hoveropacity = 0;
let pressedopacity = 0;
let handx = null;
let handy = null;
let handrotation = 0;
let level1opac = 0;

// level 2;
let level2bool = false;
let bluebuttonchar;
let xrange = 110;
let yrange = 110;

//level 3
let level3bool = false;
let pinchar;
let pushedbool = false;

//level 4
let level4bool = false;
let textmillis = null;
let textlineopac = 0;
let myarrayx = 658;
let myarrayy = 125;
let mystringx = 658;
let mystringy = 175;
let parenthesessemicolonx = 658;
let parenthesessemicolony = 225;
let pushtextx = 658;
let pushtexty = 275;
let abool = false;
let sbool = false;
let psbool = false;
let ptbool = false;
let textlinex = 79;

// level 5
let level5bool = false;
let brownbuttonchar;
let coverbool = true;

// end screen
let endtime = null;

function preload() {
  soundFormats('mp3');
  bluebutton = loadImage('assets/bluebutton.png');
  brownbutton = loadImage('assets/brownbutton.png');
  cardigan = loadImage('assets/cardigan.png');
  cardigantoplayer = loadImage('assets/cardigantoplayer.png');
  clip = loadImage('assets/clip.png');
  editor = loadImage('assets/editor.png');
  greenbutton = loadImage('assets/greenbutton.png');
  greenbuttonhover = loadImage('assets/greenbuttonhover.png');
  hand = loadImage('assets/hand.png');
  myarray = loadImage('assets/myarray.png');
  mystring = loadImage('assets/mystring.png');
  orangebutton = loadImage('assets/orangebutton.png');
  parenthesessemicolon = loadImage('assets/parenthesessemicolon.png');
  pin = loadImage('assets/pin.png');
  pins = loadImage('assets/pins.png');
  pinonbutton = loadImage('assets/pinonbutton.png');
  pushtext = loadImage('assets/push.png');
  pushthebuttonmusic = loadSound('assets/pushthebuttonmusic.mp3');
  pushthebuttonmusic.playMode("restart");
  sewingdesk = loadImage('assets/sewingdesk.png');
  street = loadImage('assets/street.png');
  textline = loadImage('assets/textline.png');
  bgimages = [street, sewingdesk, pins, editor, cardigan];
}

function setup() {
  for (let x = 0; x < 13; x++) {
    randomys.push(random(-10, 10));
  }
  signrotation = -(PI/20);
  bluebutton.resize(50, 0);
  bluebuttonchar = new Mybluebutton();
  pinchar = new Mypin();
  brownbuttonchar = new Mybrownbutton();
  createCanvas(1200, 800);
}

function title(textx, texty) {
  randomygen();
  push();
  textFont("alta-california");
  textSize(100);
  text("P", textx, texty + randomys[0]);
  textSize(80);
  text("U", textx + 55, texty + randomys[1]);
  textSize(100);
  text("S", textx + 87, texty + randomys[2]);
  text("H", textx + 135, texty + randomys[3]);
  textFont("bodedo");
  textSize(80);
  text("T", textx + 200, texty + randomys[4]);
  textFont("alta-california");
  textSize(100);
  text("h", textx + 255, texty + randomys[5]);
  text("e", textx + 300, -10 + texty + randomys[6]);
  text("B", textx + 370, texty + randomys[7]);
  text("u", textx + 430, texty + randomys[8]);
  text("t", textx + 458, texty + randomys[9]);
  textFont("salvation");
  textSize(60);
  text("T", textx + 488, texty + randomys[10]);
  textFont("alta-california");
  textSize(100);
  text("o", textx + 532, texty + randomys[11]);
  text("N", textx + 565, texty + randomys[12]);
  pop();
}

function titlescreen() {
  if (imagemillis == null) {
    imagemillis = millis(); 
  }
  if (millis() > imagemillis + 2000) {
    if (imageindex == 4) {
      imageindex = 0;
    } else {
      imageindex += 1;
    }
    imagemillis = millis();
  }
  if (imageindex == 0) {
    if (opac0 != 150) {
      opac0 += (150 - opac0)*0.6;
    }
    if (opac4 != 0) {
      opac4 += (0 - opac4)*0.6;
    }
  } else if (imageindex == 1) {
    if (opac1 != 150) {
      opac1 += (150 - opac1)*0.6;
    }
    if (opac0 != 0) {
      opac0 += (0 - opac0)*0.6;
    }
  } else if (imageindex == 2) {
    if (opac2 != 150) {
      opac2 += (150 - opac2)*0.6;
    }
    if (opac1 != 0) {
      opac1 += (0 - opac1)*0.6;
    }
  } else if (imageindex == 3) {
    if (opac3 != 150) {
      opac3 += (150 - opac3)*0.6;
    }
    if (opac2 != 0) {
      opac2 += (0 - opac2)*0.6;
    }
  } else if (imageindex == 4) {
    if (opac4 != 150) {
      opac4 += (150 - opac4)*0.6;
    }
    if (opac3 != 0) {
      opac3 += (0 - opac3)*0.6;
    }
  }
  push();
  tint(255, opac0);
  image(bgimages[0], 0, 0);
  tint(255, opac1);
  image(bgimages[1], 0, 0);
  tint(255, opac2);
  image(bgimages[2], 0, 0);
  tint(255, opac3);
  image(bgimages[3], 0, 0);
  tint(255, opac4);
  image(bgimages[4], 0, 0);
  pop();
  push();
  fill(255);
  title(286, 350);
  push();
  textAlign(CENTER);
  textFont("rig-shaded-bold-face");
  textSize(25);
  text("HIT SPACE TO CONTINUE", 0, 650, 1200);
  pop();
  pop();
  if (keyIsDown(32)) {
    counter += 1;
  }
}

function instructions() {
  if (millis() > imagemillis + 2000) {
    if (imageindex == 4) {
      imageindex = 0;
    } else {
      imageindex += 1;
    }
    imagemillis = millis();
  }
  if (imageindex == 0) {
    if (opac0 != 150) {
      opac0 += (150 - opac0)*0.6;
    }
    if (opac4 != 0) {
      opac4 += (0 - opac4)*0.6;
    }
  } else if (imageindex == 1) {
    if (opac1 != 150) {
      opac1 += (150 - opac1)*0.6;
    }
    if (opac0 != 0) {
      opac0 += (0 - opac0)*0.6;
    }
  } else if (imageindex == 2) {
    if (opac2 != 150) {
      opac2 += (150 - opac2)*0.6;
    }
    if (opac1 != 0) {
      opac1 += (0 - opac1)*0.6;
    }
  } else if (imageindex == 3) {
    if (opac3 != 150) {
      opac3 += (150 - opac3)*0.6;
    }
    if (opac2 != 0) {
      opac2 += (0 - opac2)*0.6;
    }
  } else if (imageindex == 4) {
    if (opac4 != 150) {
      opac4 += (150 - opac4)*0.6;
    }
    if (opac3 != 0) {
      opac3 += (0 - opac3)*0.6;
    }
  }
  push();
  tint(255, opac0);
  image(bgimages[0], 0, 0);
  tint(255, opac1);
  image(bgimages[1], 0, 0);
  tint(255, opac2);
  image(bgimages[2], 0, 0);
  tint(255, opac3);
  image(bgimages[3], 0, 0);
  tint(255, opac4);
  image(bgimages[4], 0, 0);
  pop();
  push();
  fill(255);
  push();
  title(286, 200);
  pop();
  textAlign(CENTER);
  textFont("rig-shaded-bold-face");
  textSize(35);
  text("YOUR GOAL IS TO PUSH THE BUTTON. USE YOUR ARROW KEYS AND MOUSE AS NEEDED.", 300, 350, 600);
  push();
  textAlign(CENTER);
  textFont("rig-shaded-bold-face");
  textSize(25);
  text("HIT SPACE TO BEGIN", 0, 650, 1200);
  pop();
  pop();
  if (keyIsDown(32)) {
    counter += 1;
  }
}

function level1() {
  image(street, -25, -775);
  level1button();
  push();
  translate(600, 523);
  rotate(signrotation/10);
  imageMode(CENTER);
  image(greenbutton, 0, -120);
  push();
  tint(255, hoveropacity)
  image(greenbuttonhover, 0, -120);
  pop();
  push();
  tint(255, pressedopacity);
  image(orangebutton, 0, -120);
  pop();
  push();
  textAlign(CENTER);
  fill(255, 255, 255, level1opac)
  textFont("rig-shaded-bold-face");
  textSize(25);
  text("HIT SPACE TO PROCEED", -595, -220, 1200);
  pop();
  pop();
  mousehand();
  if (mouseIsPressed == false) {
    if (signrotation <= -(PI/21) && rightleftvar == "left") {
      signrotation = -(PI/20);
      rightleftvar = "right";
    } else if (signrotation >= (PI/21) && rightleftvar == "right") {
      signrotation = (PI/20);
      rightleftvar = "left";
    } else {
      if (rightleftvar == "right") {
        signrotation += 0.005
      } else if (rightleftvar == "left") {
        signrotation -= 0.005
      }
    }
  }
  if (pressedopacity > 240) {
    level1bool = true;
  }
  if (level1bool == true) {
    level1opac = 255;
    if (keyIsDown(32)) {
      counter += 1;
    }
  }
}

function level1button() {
  constrain(hoveropacity, 0, 255);
  if (dist(mouseX, mouseY, 600, 527) < 81) {
    if (hoveropacity < 255) {
      hoveropacity += (255-hoveropacity)*0.3;
    }
  } else {
    if (hoveropacity != 0) {
      hoveropacity -= hoveropacity*0.3;
    }
  }
  
  constrain(pressedopacity, 0, 255);
  if (mouseIsPressed === true) {
    if (dist(mouseX, mouseY, 600, 527) < 81) {
      if (pressedopacity < 255) {
        pressedopacity += (255-pressedopacity)*0.3;
      }
    }
  } else {
    if (pressedopacity != 0) {
      pressedopacity -= pressedopacity*0.1;
    }
  }  
}

function mousehand() {
  if (handx == null) {
    if (mouseX < 50) {
      handx = 50
    } else if (mouseX > 1100) {
      handx = 1100;
    } else {
      handx = mouseX;
    }

    if (mouseY < 50) {
      handy = 50;
    } else if (mouseY > 700) {
      handy = 700;
    } else {
      handy = mouseY;
    }
  }
  
  if (mouseX < 50) {
    handx = 50
  } else if (mouseX > 1100) {
    handx = 1100;
  } else {
    handx += (mouseX-handx)*0.5;
  }
  
  if (mouseY < 50) {
    handy = 50;
  } else if (mouseY > 700) {
    handy = 700;
  } else {
    handy += (mouseY-handy)*0.5;
  }
  push();
  let speed = winMouseX - pwinMouseX;
  if (speed > 0) {
    if (handrotation <= (PI/4)) {
      handrotation += ((PI/4)-handrotation)*0.01*(speed);
    } else {
      handrotation = (PI/4);
    }
  } else if (speed < 0) {
    if (handrotation >= -(PI/4)) {
      handrotation -= (-(PI/4)-handrotation)*0.01*(speed);
    } else {
      handrotation = -(PI/4);
    }
  } else {
    if (handrotation != 0) {
      handrotation += (0-handrotation)*0.1;
    }
  }
  var myrot = constrain(handrotation, -(PI/4), (PI/4));
  translate(handx - 20, handy - 10)
  rotate(myrot);
  image(hand, 0, 0);
  pop();
}

function level2() {
  image(sewingdesk, 0, 0);
  push();
  textSize(50);
  textFont("salvation")
  fill(255, 0, 0)
  text("X", 1000 + random(-1, 1), 500 + random(-1, 1))
  pop();
  bluebuttonchar.show();
  bluebuttonchar.move();
  if (dist(bluebuttonchar.x, bluebuttonchar.y, 1020, 478) <= 12) {
    level2bool = true;
  }
  if (level2bool == true) {
    push();
    translate(957, 570);
    fill(255, 0, 0);
    rotate(-(103*PI/700));
    textAlign(CENTER);
    textFont("rig-shaded-bold-face");
    textSize(25);
    text("HIT SPACE TO PROCEED", -175, -2, 400);
    pop();
    if (keyIsDown(32)) {
      counter += 1;
    }
  }
}

class Mybluebutton {
  constructor() {
    this.x = xrange;
    this.y = yrange;
  }
  
  show() {
    this.x = random(xrange - 1, xrange + 1);
    this.y = random(yrange - 1, yrange + 1);
    push();
    imageMode(CENTER);
    image(bluebutton, this.x, this.y);
    pop();
  }
  
  move() {
    constrain(this.x, 100, 1100);
    constrain(this.y, 100, 700);
    if (level2bool == false) {
      if (keyIsDown(39) && this.x < 1100) {
        xrange += 5;
        yrange += random(-5, 5);
      }
      if (keyIsDown(37) && this.x > 100) {
        xrange -= 5;
        yrange += random(-5, 5);
      }
      if (keyIsDown(40) && this.y < 700) {
        yrange += 5;
        xrange += random(-5, 5);
      }
      if (keyIsDown(38) && this.y > 100) {
        yrange -= 5;
        xrange += random(-5, 5);
      }
    } else {
      xrange = 1020;
      yrange = 478;
    }
  }
  
}

function level3() {
  push();
  noStroke();
  fill(255)
  rect(0, 0, 1200, 800);
  pop();
  push();
  tint(255, 200);
  image(pins, 0, 0);
  pop();
  push();
  imageMode(CENTER);
  image(pinonbutton, 600, 400);
  pop();
  pinchar.show();
  pinchar.rotate();
  image(clip, 660, 387)
  title(286, 120);
  if (pushedbool == true) {
    level3bool = true;
  }
  if (level3bool == true) {
    push();
    textAlign(CENTER);
    textFont("rig-shaded-bold-face");
    textSize(25);
    text("HIT SPACE TO PROCEED", 0, 680, 1200);
    pop();
    if (keyIsDown(32)) {
      counter += 1;
    }
  }
}

class Mypin {
  constructor() {
    this.rotation = -(PI/6);
  }
  
  show() {
    push();
    translate(525, 393);
    rotate(this.rotation);
    image(pin, 0, 0);
    pop();
  }
  
  rotate() {
    if (this.rotation > -(PI/230)) {
      pushedbool = true;
    }
    if (pushedbool == false) {
      constrain(this.rotation, -(PI/6), 0);
      if (keyIsDown(40) && this.rotation <= 0) {
        this.rotation += 0.01;
      } else {
        this.rotation += (-(PI/6) - this.rotation)*0.08;
      }      
    }
  }
}

function level4() {
  console.log(mouseX, mouseY);
  if (textmillis == null) {
    textmillis = millis();
  }
  
  image(editor, 0, 0);
  if (millis() > textmillis + 500) {
    if (textlineopac == 0) {
      textlineopac = 255;
    } else if (textlineopac == 255) {
      textlineopac = 0;
    }
    textmillis = millis();
  }
  
  push();
  tint(255, textlineopac);
  image(textline, textlinex, 286);
  pop();
  
  push();
  noStroke();
  fill(240, 34, 91, textlineopac);
  if (abool == false) {
    rect(myarrayx-2, myarrayy-2, 65, 21);
  }
  if (sbool == false) {
    rect(mystringx-2, mystringy-2, 69, 21);
  }
  if (psbool == false) {
    rect(parenthesessemicolonx-2, parenthesessemicolony-2, 12, 22);
    rect(parenthesessemicolonx+70, parenthesessemicolony-1, 19, 20);
  }
  if (ptbool == false) {
    rect(pushtextx-2, pushtexty-2, 43, 21);
  }
  pop();
  
  image(myarray, myarrayx, myarrayy); //79 288
  image(mystring, mystringx, mystringy); //186 288
  image(parenthesessemicolon, parenthesessemicolonx, parenthesessemicolony); //178 287
  image(pushtext, pushtextx, pushtexty); //139 288
  
  if (abs(myarrayx - 79) < 5 && abs(myarrayy - 288) < 5) {
    abool = true;
    myarrayx = 79;
    myarrayy = 288;
    textlinex = 139;
  }
  if (abs(pushtextx - 139) < 5 && abs(pushtexty - 288) < 5 && abool == true) {
    ptbool = true;
    pushtextx = 139;
    pushtexty = 288;
    textlinex = 178;
  }  
  if (abs(parenthesessemicolonx - 178) < 5 && abs(parenthesessemicolony - 288) < 5 && abool == true && ptbool == true) {
    psbool = true;
    parenthesessemicolonx = 178;
    parenthesessemicolony = 288;
    textlinex = 186;
  }
  if (abs(mystringx - 186) < 5 && abs(mystringy - 288) < 5 && abool == true && ptbool == true && psbool == true) {
    sbool = true;
    mystringx = 186;
    mystringy = 288;
    textlinex = 265;
  }
  
  if (mouseIsPressed == true) {
    if ((abool == false) && (mouseX > (myarrayx - 2)) && (mouseX < (myarrayx + 63)) && (mouseY > myarrayy - 2) && (mouseY < (myarrayy + 19))) {
      myarrayx += (mouseX - pwinMouseX);
      myarrayy += (mouseY - pwinMouseY);
    } else if ((sbool == false) && (mouseX > (mystringx - 2)) && (mouseX < (mystringx + 67)) && (mouseY > mystringy - 2) && (mouseY < (mystringy + 19))) {
      mystringx += (mouseX - pwinMouseX);
      mystringy += (mouseY - pwinMouseY);
    } else if ((psbool == false) && (((mouseX > (parenthesessemicolonx - 2)) && (mouseX < (parenthesessemicolonx + 10)) && (mouseY > parenthesessemicolony - 2) && (mouseY < (parenthesessemicolony + 20))) || (mouseX > (parenthesessemicolonx + 70)) && (mouseX < (parenthesessemicolonx + 89)) && (mouseY > parenthesessemicolony - 1) && (mouseY < (parenthesessemicolony + 19)))) {
      parenthesessemicolonx += (mouseX - pwinMouseX);
      parenthesessemicolony += (mouseY - pwinMouseY);
    } else if ((ptbool == false) && (mouseX > (pushtextx - 2)) && (mouseX < (pushtextx + 41)) && (mouseY > pushtexty - 2) && (mouseY < (pushtexty + 19))) {
      pushtextx += (mouseX - pwinMouseX);
      pushtexty += (mouseY - pwinMouseY);
    }
  }
  if (sbool == true) {
    level4bool = true;
  }
  if (level4bool == true) {
    push();
    textFont("rig-shaded-bold-face");
    textSize(25);
    text("HIT SPACE TO PROCEED", 658, 140);
    pop();
    if (keyIsDown(32)) {
      counter += 1;
    }
  }
}

function level5() {
  image(cardigan, 0, 0);
  brownbuttonchar.show();
  brownbuttonchar.move();
  if (coverbool == true) {
    image(cardigantoplayer, 0, 0);  
  }
  if (brownbuttonchar.x < 493) {
    coverbool = false;
  }
  if (coverbool == false && abs(brownbuttonchar.x - 540) < 10) {
    level5bool = true;
  }
  if (level5bool == true) {
    push();
    textAlign(CENTER);
    textFont("rig-shaded-bold-face");
    textSize(25);
    text("HIT SPACE TO PROCEED", 338, 200, 400);
    pop();
    if (keyIsDown(32)) {
      counter += 1;
    }
  }
}

class Mybrownbutton {
  constructor() {
    this.x = 690;
    this.y = 295;
  }
  
  show() {
    push();
    imageMode(CENTER);
    image(brownbutton, this.x, this.y);
    pop();
    
  }
  
  move() {
    if (level5bool == false) {
      if (coverbool == true) {
        if (keyIsDown(39) && this.x < 690) {
          this.x += 5;
        }
      } else {
        if (keyIsDown(39) && this.x < 540) {
          this.x += 5;
        }
      }
      if (keyIsDown(37) && this.x > 485) {
        this.x -= 5;
      }
    }
  }
}

function endscreen() {
  if (endtime == null) {
    endtime = millis();
    imageindex = 0;
    opac0 = 150;
    opac1 = 0;
    opac2 = 0;
    opac3 = 0;
    opac4 = 0;
  }
  if (millis() > endtime + 2000) {
    if (imageindex == 4) {
      imageindex = 0;
    } else {
      imageindex += 1;
    }
    endtime = millis();
  }
  if (imageindex == 0) {
    if (opac0 != 150) {
      opac0 += (150 - opac0)*0.6;
    }
    if (opac4 != 0) {
      opac4 += (0 - opac4)*0.6;
    }
  } else if (imageindex == 1) {
    if (opac1 != 150) {
      opac1 += (150 - opac1)*0.6;
    }
    if (opac0 != 0) {
      opac0 += (0 - opac0)*0.6;
    }
  } else if (imageindex == 2) {
    if (opac2 != 150) {
      opac2 += (150 - opac2)*0.6;
    }
    if (opac1 != 0) {
      opac1 += (0 - opac1)*0.6;
    }
  } else if (imageindex == 3) {
    if (opac3 != 150) {
      opac3 += (150 - opac3)*0.6;
    }
    if (opac2 != 0) {
      opac2 += (0 - opac2)*0.6;
    }
  } else if (imageindex == 4) {
    if (opac4 != 150) {
      opac4 += (150 - opac4)*0.6;
    }
    if (opac3 != 0) {
      opac3 += (0 - opac3)*0.6;
    }
  }
  push();
  tint(255, opac0);
  image(bgimages[0], 0, 0);
  tint(255, opac1);
  image(bgimages[1], 0, 0);
  tint(255, opac2);
  image(bgimages[2], 0, 0);
  tint(255, opac3);
  image(bgimages[3], 0, 0);
  tint(255, opac4);
  image(bgimages[4], 0, 0);
  pop();
  push();
  fill(255);
  push();
  title(286, 200);
  pop();
  textAlign(CENTER);
  textFont("rig-shaded-bold-face");
  textSize(35);
  text("YOU WON!", 300, 350, 600);
  push();
  textAlign(CENTER);
  textFont("rig-shaded-bold-face");
  textSize(25);
  text("HIT SPACE TO PLAY AGAIN", 500, 400, 200);
  pop();
  pop();
  if (millis() > endtime + 500) {
    if (keyIsDown(32)) {
      counter = 0;
    }
  }
}

function randomygen() {
  if (millis() > oldmillis + 500) {
    for (let i=0; i < 13; i++) {
      if (randomys[i] > 15) {
        randomys[i] += random(-10, -1);
      } else if (randomys[i] < 15) {
        randomys[i] += random(1, 5);
      } else {
        randomys[i] += random([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      }
      if (randomys[i] == randomys[i-1]) {
        if (randomys[i] > 15) {
          randomys[i] -= 2;
        } else if (randomys[i] < -15) {
          randomys[i] += 2;
        } else {
          randomys[i] += random([-2, -1, 1, 2]);
        }
      }
    }
    oldmillis = millis();
  }
}

function myaudio() {
  if (pushthebuttonmusic.isPlaying() == false) {
    pushthebuttonmusic.play();
    pushthebuttonmusic.loop();
  }
}

function draw() {
  myaudio();
  background(0);
  
  switch (counter) {
    case 0:
      titlescreen();
      break;

    case 1:
      instructions();
      break;

    case 2:
      level1();
      break;

    case 3:
      level2();
      break;

    case 4:
      level3();
      break;

    case 5:
      level4();
      break;

    case 6:
      level5();
      break;
      
    case 7:
      endscreen();
      break;
  }
}