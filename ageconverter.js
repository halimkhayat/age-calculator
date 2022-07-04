function generateAge() {
    var age = document.getElementById('birthDate');
    var newAge = (2022 - age.value) * 365;

    var div = document.createElement('h1');
    var answer = document.createTextNode('Your age is ' + newAge + ' days old.');
    div.setAttribute('id','convert-age');
    div.appendChild(answer);
    document.getElementById('ageInDays').appendChild(div);
}

function resertAge() {
    document.getElementById('convert-age').remove();
}