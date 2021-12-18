noseX = 0;

noseY = 0;

rightWristX = 0;

leftWristX = 0;

difference = 0;

function setup() {
  Canvas = createCanvas(550, 550);
  Canvas.position(560, 150);
  video = createCapture(VIDEO);
  video.size(550, 500);
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}

function modelLoaded() {
  console.log("poseNet is Initialized ");
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
    noseX = results[0].pose.nose.x - 15;
    noseY = results[0].pose.nose.y - 15;
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
    console.log(
      "leftWristX = " +
        leftWristX +
        "rightWristX = " +
        rightWristX +
        "difference = " +
        difference
    );
  }
}

function draw() {
  background("white");
  document.getElementById("font_size").innerHTML =
        "Font-size of the  will text be =" + difference + "px";
    fill("blue");
    stroke("black");
    textSize(difference);
    bruh = document.getElementById("bruh_bruh").value; 
    text(bruh, noseX, noseY);
}
