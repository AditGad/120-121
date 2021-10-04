function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier("Mobilenet",modelloaded);
}
function modelloaded(){
  console.log("modeloaded");
}
function draw(){
  image(video,0,0,300,300);
classifier.classify(video,result);
}
function result(error,results)
{
if(error){
  console.error(error);
}
else{
  console.log(results);
  document.getElementById("resultobject").innerHTML=results[0].label;
document.getElementById("objectaccuracy").innerHTML=results[0].confidence.toFixed(3);
}
}

