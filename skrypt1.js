
function przesylFormularza(formularz){

    dane=new FormData(document.getElementById(formularz));
    $.post("http://imiki.pl/projekt/sr16/user",dane); 
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
