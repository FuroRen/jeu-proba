
var i = 0;
var tableau = [];

/*tableau dont la taille est générée en premier
ensuite, mets les éléments dans ce tableau et les transforme en int
finalement, renvoie la moyenne, variance, écart-type sous forme de fonction créées plus bas*/
document.getElementById("envoyer-1").addEventListener("click", function(){
    var taille = document.getElementById("taille").value;
    document.getElementById("envoyer-2").addEventListener("click", function(){
        
        if (i < taille){
            var chiffre = (document.getElementById("tab").value);
            tableau.push(chiffre);
            i++;
            document.getElementById("tab1").reset();
            document.getElementById("tab").focus;
            document.getElementById("tab").select();     
         }else{
            document.getElementById("envoyer-2").value = "Generate";
            document.getElementById("envoyer-2").addEventListener("mouseover",function(){
                document.getElementById("moyenne").textContent = moyenne(tableau);
                document.getElementById("variance").textContent = variance(tableau);
                document.getElementById("ecart-type").textContent = ecartType(tableau);
            });
        };
    });
});

//création d'un reload sur les deux boutons reset
document.getElementById("reset-1").addEventListener("click", function(){
    document.location.reload(true);
})

document.getElementById("reset-2").addEventListener("click", function(){
    document.location.reload(true);
})

//création des trois fonctions 
function moyenne(tableau){
    var sum = 0;
    for(var i=0 ; i<tableau.length; i++){
        sum +=parseInt(tableau[i]);
    }
    return sum/tableau.length;
}

function variance(tableau){
    var moy = moyenne(tableau);
    let vari = 0
    for(var i=0; i<tableau.length; i++){
        vari+= (parseInt(tableau[i])-moy) * (parseInt(tableau[i])-moy);
    }
    return vari/tableau.length;
};

function ecartType(tableau){
    var varia= variance(tableau);
    return Math.sqrt(varia);
};
