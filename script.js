// Graphics Library

// Functions List
// stroke(color)
// fill(color)
// lineWidth(width)
// font(fontSetting)
// rect(x, y, w, h, mode)
// line(x1, y1, x2, y2)
// circle(x, y, r, mode)
// triangle(x1, y1, x2, y2, x3, y3)
// text(message, x, y, mode)
// ellipse(x, y, xRadius, yRadius, rotation, mode)
// image(img, x, y, w, h)
// imageClip(img, xc, yc, wc, hc, x, y, w, h)

// Draw a line
// stroke("blue");
// lineWidth(3);
// line(100, 200, 300, 100);

// Fill Cnavas with Provided Color
function background(color) {
  fill(color);
rect(0, 0, cnv.width, cnv.height, "fill");
}

// Customize
function stroke(style) {
  ctx.strokeStyle = style;
}

function fill(color) {
  ctx.fillStyle = color;
}

function lineWidth(width) {
  ctx.lineWidth = width;
}


// Draw line segment from (x1, y1) to (x2, y2)
function line(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1); // Endpoint 1
  ctx.lineTo(x2, y2); // Endpoint 2
  ctx.stroke();
}

// Draw a Rectangle 
// fill("green");
// rect(100, 100, 200, 50, "fill");
// rect(400, 500, 70, 100, "stroke");

// Draw a stroke or fill rectangle with a top-left corner of (x, y) with a width of w and a height of h
function rect(x, y, w, h, mode) {
   if (mode === "fill") {
     ctx.fillRect(x, y, w, h);
    } else if (mode === "stroke") {
     ctx.strokeRect(x, y, w, h);
   }
}

// Draw a Circle
// circle(400, 300, 50, "stroke");
// circle(700, 350, 25, "fill");


function circle(x, y, r, mode) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  if (mode === "fill") {
    ctx.fill();
  } else if (mode === "stroke") {
    ctx.stroke();
  }
}

// Draw a Triangle
// stroke("purple");
// triangle(0, 400, 300, 400, 250, 450, "fill");
// triangle(0, 300, 400, 300, 350, 250, "stroke");

function triangle(x1, y1, x2, y2, x3, y3, mode) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2,);
  ctx.lineTo(x3, y3);
  if (mode === "fill") {
    ctx.fill();
  } else if (mode === "stroke") {
    ctx.closePath();
    ctx.stroke();
  }
}

// Text Function
// font("44px Arial");
// text("Hello World", 500, 200, "fill");
// text("Hello", 500, 300, "stroke");
// fill("red");

function font(fontSetting) {
  ctx.font = fontSetting;
}

function text(message, x, y, mode) {
  if (mode === "fill") {
    ctx.fillText(message, x, y);
  } else if (mode === "stroke") { 
    ctx.strokeText(message, x, y);
  }
}

// Draw Ellipse
// fill("green");
// ellipse(700, 100, 10, 80, 0, "fill");

// stroke("orange");
// lineWidth(5);
// ellipse(700, 500, 150, 25, 0, "stroke");

function ellipse(x, y, xRadius, yRadius, rotation, mode) {
  ctx.beginPath();
  ctx.ellipse(x, y, xRadius, yRadius, rotation, 0, 2 * Math.PI);
  if (mode === "fill") {
    ctx.fill();
  } else if (mode === "stroke") {
    ctx.stroke();
  }
}

// Draw Image
// let chessImgEl = document.createElement("img");
// chessImgEl.src = "img/chess-img.jpg";

// window.addEventListener("load", draw);

// function draw() {
//   imageClip(chessImgEl, 1000, 600, 300, 200, 500, 300, 300, 200);
//   image(chessImgEl, 0, 0, 300, 200);
// }

function image(img, x, y, w, h) {
  ctx.drawImage(img, x, y, w, h);
}

function imageClip(img, xc, yc, wc, hc, x, y, w, h) {
  ctx.drawImage(img, xc, yc, wc, hc, x, y, w, h);
}
