function verif() 
{
    var name = document.forms["clubform"]["name"].value;
    var err  = document.getElementById("demo");
    var full = document.forms["clubform"]["full"].value;
    var errF  = document.getElementById("klai");
    var mot  = document.forms["clubform"]["pass"].value; 
    var errP = document.getElementById("demo1");
    var letters = /^[A-Za-z]+$/;
    var num = /[0-9]/g;
    if (full == ""){
        errF.innerHTML=" Champ vide"

    }else if (!(full.match(/^[A-Za-z]+$/)&& full.charAt(0).match(/^[A-Za-z]+$/))) {
       errF.innerHTML="votre full name n est pas validee"        
    }else
    {
        errF.innerHTML=""
    }
    if (name == ""){
        err.innerHTML=" Champ vide"

    }else if (!name.match(num)&&(name.match(/^[A-Za-z]+$/)&& name.charAt(0).match(/^[A-Za-z]+$/))) {
       err.innerHTML="[A-Za-z]et le 1ere caractere obligatoire en Maj"        
    }else
    {
        err.innerHTML=""
    }
    if (mot =="") {
        errP.innerHTML="Champ vide ";
        
    } else if (!(mot.match(num)&& mot.match(/[A-Z]/g)&& mot.match(/[a-z]/g)&& mot.length>8 && mot!=name )) {
        errP.innerHTML="formule Password=[A-Za-z] et [0-9] et Password>8 "; 
    } else{
        errP.innerHTML="";
    }
    var autre = document.forms["clubform"]["check"];

    if (document.getElementById("checkbox").checked) {
        autre.style.display = "";
        

    }
    else {
        
        alert("checkbox plz")

    }
}

function validateForm(e) {
    e.preventDefault();
    verif();
}
