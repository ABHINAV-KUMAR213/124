function setup(){
    canvas = createCanvas(400,300);
    canvas.position(50,140)
    video=createCapture(VIDEO);
    video.size(400, 300);
    video.position(50, 140);
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose' , got_poses);
}
function modelloaded(){
    console.log ("poseNet is Initialized");
}
function got_poses(results){
        if(results.length > 0 ){
            console.log (results);
        }
    }
function draw(){
   background("#S196e3");
}