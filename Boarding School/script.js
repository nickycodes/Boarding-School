//Selectors
let dropDownButton = document.querySelector('.dropdown-button');
let dropDownContent = document.querySelector('.dropdown-content');

//Functions
dropDownButton.addEventListener('click', function() {
    dropDownContent.classList.toggle('dropdown-content-open');
});