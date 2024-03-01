
function przesylFormularza(formularz){
    dane=new FormData(document.getElementById(formularz));
    fetch(formularz.action, {method: 'POST',body: dane})
    
}




function zmianawidoku(b){
switch (b){
    case 1:
    if (document.getElementById('uczenDodaj').style.display === 'none'){
        document.getElementById('uczenDodaj').style.display = 'block';
        
    }else{
        document.getElementById('uczenDodaj').style.display = 'none';
    }
    break;
    case 2:
    if (document.getElementById('ksiazkaDodaj').style.display === 'none'){
        document.getElementById('ksiazkaDodaj').style.display = 'block';
    }else{
        document.getElementById('ksiazkaDodaj').style.display = 'none';
    }
    break;
    case 3:
    if (document.getElementById('wyswietlUcznia').style.display === 'none'){
        document.getElementById('wyswietlUcznia').style.display = 'block';
    }else{
        document.getElementById('wyswietlUcznia').style.display = 'none';
    }
    break;
}
}

function pobieranieDanych(){

    fetch('https://imiki.pl/projekt/sr16/users')
    .then(response => { return response.text();
    })
    .then(fileContent => {
       dane(JSON.parse(fileContent));
  
    })
    .catch(error => {
        console.error('błąd json:', error);
    });

}


/*
function dane(d) {
    i = 0;
    str = "";
    for(ind of d) {
    a =  JSON.parse(ind.data);
    i++;
    str += i + " ";
    str += ind.id + " "; 
    str += ind.user + " ";
    str += ind.data + ""; 
    str += a.nazwisko + "<br>"; 

    }
    w.innerHTML = str;
    }
*/
