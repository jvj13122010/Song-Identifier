// https://teachablemachine.withgoogle.com/models/lSc3PG2y1/ audio file

function startClassification() {
stream = navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/lSc3PG2y1/model.json', modelLoaded);

}
function modelLoaded() {
    classifier.classify(gotResults);
}

function gotResults(error, result) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(result);
        randomR = Math.floor(Math.random() * 255) + 1;
        randomG = Math.floor(Math.random() * 255) + 1;
        randomB = Math.floor(Math.random() * 255) + 1;

        document.getElementById("resultlabel").innerHTML = "I Can Hear : " + result[0].label;
        document.getElementById("accuracy").innerHTML = "Accuracy : " + (result[0].confidence * 100).toFixed(2) + " %";
        document.getElementById("accuracy").style.color = "rgb(" + randomR + "," + randomG + "," + randomB + ")";
        document.getElementById("resultlabel").style.color = "rgb(" + randomR + "," + randomG + "," + randomB + ")";

        img1 = document.getElementById("bgNoise");
        img2 = document.getElementById("wolves");
        img3 = document.getElementById("butter");
        

        if (result[0].label == "Background Noise") {
            img1.src = "bgNoise.jpg";
            img2.src = "whiteBackground.jpg";
            img3.src = "whiteBackground.jpg";
            

        } else if (result[0].label == "Butter - BTS") {
            img1.src = "whiteBackground.jpg";
            img2.src = "butter.png";
            img3.src = "whiteBackground.jpg";
            
        } else {
            img1.src = "whiteBackground.jpg";
            img2.src = "whiteBackground.jpg";
            img3.src = "Wolves.jpg";
            
        }

    }
}
function stopclassification() {
    stream.getTracks().forEach(function(track) { track.stop(); });
}
