function slow() {
    // console.log("slow is clicked");
    var wheel1 = document.getElementById("first-wheel");
    wheel1.style.animation = "rotate-wheels 1.8s linear infinite";

    var wheel2 = document.getElementById("second-wheel");
    wheel2.style.animation = "rotate-wheels 1.8s linear infinite";

    var track = document.getElementById("track");
    track.style.animation = "move-back 60s linear infinite";
};

function normal() {
    // console.log("slow is clicked");
    var wheel1 = document.getElementById("first-wheel");
    wheel1.style.animation = "rotate-wheels 0.9s linear infinite";

    var wheel2 = document.getElementById("second-wheel");
    wheel2.style.animation = "rotate-wheels 0.9s linear infinite";

    var track = document.getElementById("track");
    track.style.animation = "move-back 30s linear infinite";
};

function fast() {
    // console.log("fast is clicked");
    var wheel1 = document.getElementById("first-wheel");
    wheel1.style.animation = "rotate-wheels 0.3s linear infinite";

    var wheel2 = document.getElementById("second-wheel");
    wheel2.style.animation = "rotate-wheels 0.3s linear infinite";

    var track = document.getElementById("track");
    track.style.animation = "move-back 10s linear infinite";
};