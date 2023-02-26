function setup(){
    canvas= createCanvas(400,400);
    canvas.position(900,120);
    video= createCapture(VIDEO);
    video.size(400,400);
    video.position(350,140);

    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background("grey");
}

function modelLoaded(){
    console.log("modelLoaded");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}

