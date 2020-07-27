document.getElementById("calc").onclick = function() {
    loveCalc();
    document.getElementById("output").innerHTML = "<p>" + loveCalc() + "% compatible!</p>";
}

function loveCalc(name1, name2) {
    name1 = document.getElementById("yourName").value;
    name2 = document.getElementById("theirName").value;
    var result = Math.floor(Math.random() * 100 + 1);
    return result;
}