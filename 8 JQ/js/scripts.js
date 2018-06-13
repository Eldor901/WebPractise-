window.onload = onWindowLoaded;

function onWindowLoaded(){
    listenerEventId('movie_submit', 'click', checkForEmptyFields);
    listenerEventClass('required_field', 'focus', fieldClear);
}

function getById(id){
    return document.getElementById(id);
}

function listenerEventId(id, eventName, anotherfunction){
    var element = getById(id);
    if (element) {
        element.addEventListener(eventName, anotherfunction);
    }
}

function listenerEventClass(className, eventName, anotherfunction){
    var element = getByClass(className);
    if (element) {
        for (var i = 0; i < element.length; i++){
            element[i].addEventListener(eventName, anotherfunction);
    }
  }
}

//hidden_blocks
function getByClass(className){
    return document.getElementsByClassName(className);
}


function moviesAppearing() {
    this.style.display = 'none';
    var movies = getByClass('hidden_block');
    for (var i = 0; i < movies.length; i++) {
        movies[i].style.display = 'block';
    }
    setTimeout(opacityRegulation, 0);
}

function opacityRegulation() {
    var movies = getByClass('hidden_block');
    for (var i = 0; i < movies.length; i++) {
        movies[i].style.opacity = 1;
    }
}
//hidden_blocks

function checkForEmptyFields()
{
   var requiredField = getByClass('required_field');
   var empty = '';
   event.preventDefault();
   for(var i = 0; i < requiredField.length; i++){
     if(requiredField[i].value == empty){
         requiredField[i].classList.add('error_check');
     }
  }
}
// избавиться от дублирования в коде. Можно находить элементы по классу, а не по ID

function fieldClear(){
    var requiredField = getByClass('required_field');
    for(var i = 0; i < requiredField.length; i++){
          this.classList.remove('error_check');
      }
}
//forum

function appearringForm(){ // appearing
    getById('overlay').style.display = 'block';
    getById('form_wrapper').style.display = 'block';
}

function closingForm(){
    this.style.display = 'none';
    getById('form_wrapper').style.display = 'none';
}

function closeByIcon(){ // closeByCloseIcon
    getById('overlay').style.display = 'none';
    getById('form_wrapper').style.display = 'none';
}
