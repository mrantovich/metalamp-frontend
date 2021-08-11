const expandableCheckboxList = document.querySelectorAll('.expandable-list');

for (let i = 0; i < expandableCheckboxList.length; i++) {
    expandableCheckboxList[i].addEventListener('click', function(){
        this.classList.toggle('expandable-list_is-active');
        let content = this.lastChild;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
};