// Adapted from https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName

function getAllParaElems() {
    var allParas = document.getElementsByTagName('p');
    var num = allParas.length;
    alert('There are ' + num + ' paragraphs in this document');
}

function blueBoxParaElems() {
    var blueBox = document.getElementById('blueBox');
    var blueBoxParas = blueBox.getElementsByTagName('p');
    var num = blueBoxParas.length;
    alert('There are ' + num + ' paragraphs in blue box');
}

function redBoxParaElems() {
    var redBox = document.getElementById('redBox');
    var redBoxParas = redBox.getElementsByTagName('p');
    var num = redBoxParas.length;
    alert('There are ' + num + ' paragraphs in red box');
}
