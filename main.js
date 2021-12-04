function start()
{
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    tm_link=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json',modelLoaded);
}
function modelLoaded()
{
    tm_link.classify(gotresults);
}
function gotresults(error,results)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
console.log(results);
document.getElementById("result_lable").innerHTML='i can hear -'+results[0].label;
img1=document.getElementById("alien1");
if(results[0].label=="Barking")
{
    img1.src='dog.gif';
}
else if(results[0].label=="Meowing")
{
    img1.src='cat.gif';
}
else{
    img1.src='listen.gif';
}
    }
}
