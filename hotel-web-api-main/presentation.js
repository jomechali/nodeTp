//Recuperer le module readline
let readline = require('readline');


function menu() {
    console.log("1. Lister les clients");
    console.log("99. Sortir");
}



let responseUser = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function saisie() {
    responseUser.question('Quel est votre choix ? : ', function(saisie) {
            traiterReponse(saisie)
    });
        
}

//traitement de la reponse en fonction de la saisie

function traiterReponse(reponse) {

    switch (reponse) {

        //Pour sortir de fonction présentation
        case "99":
            console.log("Au revoir");
            responseUser.close();
            return;

            //Pour avoir la liste des clients
        case "1":
            console.log(">> Liste des clients");
            break;

    }
    menu();
    saisie();

}

exports.start = menu; // pour la fonction start


exports.menu = saisie; // pour la fonction demarrer