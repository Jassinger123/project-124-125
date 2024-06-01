function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(550,150);
    video = createCapture(VIDEO);
video.size(550,500);
    classifier= ml5.poseNet(video , modalLoaded);
    classifier.on('pose',got_result);
  }

  function modalLoaded(){
    console.log("Modal Loaded");
  }
  function got_result(results){
    if (results.length > 0) {
        console.log(results);
    nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;
    leftwrist=results[0].pose.leftWrist.x;
    rightwrist=results[0].pose.rightWrist.x;
    difference=floor(leftwrist-rightwrist);
    }
      }
    
      function draw(){
        background('#969A97');
        fill('#F90093');
        stroke('#F90093');
        square(nosex,nosey,difference);
      }