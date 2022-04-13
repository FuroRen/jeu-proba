
document.getElementById("valider").addEventListener("click", function(){
    var taille = document.getElementById("infos").value;
    afficherTriangle(TrianglePascal(taille));
});

document.getElementById("valider-1").addEventListener("click", function(){
    var taille = document.getElementById("stern").value;
    afficherStern(stern(taille));
});

function TrianglePascal(taille){
    var tab = new Array();
    for(var i=0; i<taille;i++){
        tab[i] = new Array();

        for(var j=0; j<i+1;j++){
            if(j==0 || j==i){
                tab[i][j] = 1;

            } else{
                tab[i][j] = tab[i-1][j] + tab[i-1][j-1];
            }
        }
    }
    return tab;
}
function afficherTriangle(tab){
    for (var i =0; i<tab.length; i++){
        for (var j =0; j<tab[i].length; j++){
            document.getElementById("res").innerHTML += tab[i][j] + "";
        }
        document.getElementById("res").innerHTML += "<br>";
    }
}

function stern(numero) {
    var tab1 = TrianglePascal(numero+100);
    var tab2 = [];
    tab2.push(1);
    tab2.push(1);
    tab2.push(2);
    tab2.push(1);
}