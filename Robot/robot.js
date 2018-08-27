var rightEye = document.getElementById('righteye');
var leftEye = document.getElementById('lefteye');
var leftArm = document.getElementById('leftarm');

rightEye.addEventListener("click", moveUpDown);
leftEye.addEventListener("click", moveUpDown);
leftArm.addEventListener("click", moveRightLeft);

function moveUpDown(e){
    var robotPart=e.target,
        top = 0,
        id=setInterval(frame, 10);
    
    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top===20){
            clearInterval(id);
        }

    }
}

function moveRightLeft(e) { 
    var robotPart = e.target,
        left = 0;
        id = setInterval(frame, 10);

    function frame() {
        robotPart.style.left = left + '%';
        left++;
        if (left === 70) {
            clearInterval(id);
        }
    }

}


