for (var i = 0; i < document.body.childNodes.length; i++) {
    console.log(document.body.childNodes[i]);
}

window.onload = onWindowLoaded;

function onWindowLoaded(){
    ListenerEventId('clicker', 'click', apperringImages);
    ListenerEventId('clicker', 'click', opacityApeering);
    ListenerEventId('submit', 'click', checkForSpace);
    ListenerEventId('name', 'focus', fieldFocus);
    ListenerEventId('email', 'focus', fieldFocus);
    ListenerEventId('write_me', 'click', apperringForm);
    ListenerEventId('overlay', 'click', closingForm);
    ListenerEventId('close_form', 'click', closeByEx);
}

function getById(id){
    return document.getElementById(id);
}

function ListenerEventId(id, eventName, Anotherfunction){
    var element = getById(id);
    if (element) {
        element.addEventListener(eventName, Anotherfunction);
    }
}

function apperringImages(){
    getById('hidden_block').style.display = 'block';
    this.style.display = 'none';
    setTimeout(opacityApeering, 0);
}

function opacityApeering(){
    getById('hidden_block').style.opacity = 1;
}

function checkForSpace()
{
   var name = getById('name');
   var email = getById('email');
   var empty = '';
   event.preventDefault();
   if(name.value == empty){
       name.style.borderColor = 'red';
   }

   if(email.value == empty){
       email.style.borderColor = 'red';
   }
}

function fieldFocus(){
     this.style.borderColor = null;
}

//forum

function apperringForm(){
    getById('form').style.display = 'block';
    getById('overlay').style.display = 'block';
}

function closingForm(){
    getById('form').style.display = 'none';
    this.style.display = 'none';
}

function closeByEx(){
    getById('form').style.display = 'none';
    getById('overlay').style.display = 'none';
}
