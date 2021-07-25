var btn = document.querySelector('.filterAll');
var modalForm = document.querySelector('.catalog-menu');
var closeBtn = document.querySelector('.close__btn');
 
function openForm(){
    //console.log('TEXT!!!');
    modalForm.className += ' show__form'; //modalForm.className = modalForm.className + 'show__form';
}
 
function closeForm(){
    modalForm.className = 'catalog-menu';
}
 
btn.onclick = openForm;
closeBtn.onclick = closeForm;