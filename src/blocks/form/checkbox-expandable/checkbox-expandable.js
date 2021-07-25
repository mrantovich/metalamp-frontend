const expandableCheckboxTitle = document.querySelector('.checkbox-expandable');
const expandableCheckboxList = document.querySelector('.checkbox-expandable__list');

expandableCheckboxTitle.addEventListener('click', toggleCheckboxList);

function toggleCheckboxList() {
    expandableCheckboxList.classList.toggle('checkbox-expandable__list_is-hide');
};