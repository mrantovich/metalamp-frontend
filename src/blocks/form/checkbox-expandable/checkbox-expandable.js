const expandableCheckboxList = document.querySelectorAll('.checkbox-expandable');

for (let i = 0; i < expandableCheckboxList.length; i++) {
    expandableCheckboxList[i].addEventListener('click', function(){
        this.classList.toggle('checkbox-expandable__is-active');
        let content = this.lastChild;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
};