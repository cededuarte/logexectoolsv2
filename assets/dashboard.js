var countNumber = document.getElementById("clickCounter");//click counter

var clicker = document.getElementById("splitName"),//button
count = 0;

clicker.onclick = function (){
    count += 1;
    countNumber.innerHTML = count;
};
