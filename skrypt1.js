
function zmianawidoku(b){
switch (b){
    case 1:
    if (document.getElementById('uczenDodaj').style.display === 'none'){
        document.getElementById('uczenDodaj').style.display = 'block';

        document.getElementById('ksiazkaDodaj').style.display = 'none';
        document.getElementById('wyswietlUcznia').style.display = 'none';
        document.getElementById('wyswietlKsiazke').style.display = 'none';
        
    }else{
        document.getElementById('uczenDodaj').style.display = 'none';
    }
    break;
    case 2:
    if (document.getElementById('ksiazkaDodaj').style.display === 'none'){
        document.getElementById('ksiazkaDodaj').style.display = 'block';

        document.getElementById('uczenDodaj').style.display = 'none';
        document.getElementById('wyswietlUcznia').style.display = 'none';
        document.getElementById('wyswietlKsiazke').style.display = 'none';
    }else{
        document.getElementById('ksiazkaDodaj').style.display = 'none';
    }
    break;
    case 3:
    if (document.getElementById('wyswietlUcznia').style.display === 'none'){
        document.getElementById('wyswietlUcznia').style.display = 'block';

        document.getElementById('uczenDodaj').style.display = 'none';
        document.getElementById('ksiazkaDodaj').style.display = 'none';
        document.getElementById('wyswietlKsiazke').style.display = 'none';
    }else{
        document.getElementById('wyswietlUcznia').style.display = 'none';
    }
    break;
    case 4:
    if (document.getElementById('wyswietlKsiazke').style.display === 'none'){
        document.getElementById('wyswietlKsiazke').style.display = 'block';

        document.getElementById('uczenDodaj').style.display = 'none';
        document.getElementById('ksiazkaDodaj').style.display = 'none';
        document.getElementById('wyswietlUcznia').style.display = 'none';
    }else{
        document.getElementById('wyswietlKsiazke').style.display = 'none';
    }
    break;
}
}
function odczytJSON(a){
    if (a===0){
        fetch('http://imiki.pl/projekt/sr16')
        .then(response => action.text())
        .then(text => document.getElementById("zawartosc1").innerHTML=text)
    }
    if(a===1){
        fetch('https://imiki.pl/projekt/API/books')
        .then(response => response.text())
        .then(text => document.getElementById("zawartosc2").innerHTML=text)
    }
   
  
}


function dlugosc(a,x,y){
if (a.length >=x || a.length <=y){
    return false
}



}
/*
function weryfikacjaDanych(b){
    switch b{
    
    }
    let nazwisko = document.getElementById('nazwisko').value;
    let imie = document.getElementById('imie').value;
    let klasa = document.getElementById('klasa').value;
    let dataUr = document.getElementById('data_urodzenia').value;
    dlugosc(nazwisko,10,5);
    dlugosc(imie,10,5);
    dlugosc(klasa,3,0);

}
*/ 
