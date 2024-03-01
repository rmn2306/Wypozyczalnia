
function przesylFormularza(formularz){
    dane=new FormData(document.getElementById(formularz));
    fetch(formularz.action, {method: 'POST',body: dane})
    
}





function zmianawidoku(b){
    if (b ===1 && document.getElementById('uczenDodaj').style.display == 'none'){
        document.getElementById('uczenDodaj').style.display = 'block';
    }else{
        document.getElementById('uczenDodaj').style.display = 'none';
    }
    if (b ===2 && document.getElementById('ksiazkaDodaj').style.display == 'none'){
        document.getElementById('ksiazkaDodaj').style.display = 'block';
    }else{
        document.getElementById('uczenDodaj').style.display = 'none';
    }
  
}

/*
fetch(url)
    .then(response => { return response.text();
    })
    .then(fileContent => {
       dane(JSON.parse(fileContent));
  
    })
    .catch(error => {
        console.error('błąd json:', error);
    });

*/
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
