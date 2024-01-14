/**
 * This script handles the click events for the elements with IDs 'cv', 'pr', and 'uo'.
 * It redirects the user to different locations based on the clicked element.
 */
console.log('connected!');

cv = document.getElementById('cv')
pr = document.getElementById('pr')
uo = document.getElementById('uo')
console.log(cv)


cv.addEventListener('click', function (e) {
    console.log('listener')
    e.preventDefault();
    window.location = '/assets/KianaNadonzaCV.pdf';
}, false);
pr.addEventListener('click', function (e) {
    console.log('listener')
    e.preventDefault();
    window.location = '#';
}, false);
uo.addEventListener('click', function (e) {
    console.log('listener')
    e.preventDefault();
    window.location = 'https://socialsciences.uoregon.edu/anthropology';
}, false);

