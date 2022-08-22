const { exit } = require('process');
let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let texteMenu =
    "1. Lister les clients\n99. Sortir\n";



function start() {
    // tant que pas quitter
    // afficher menu
    // prendre entree utlisateur
    // traiter choix

    let quitter = false;
    rl.question(texteMenu, function (choix) {
        console.log(`choix : ${choix}`);
        switch (choix) {
            case "1":
                console.log(">> liste des clients");
                start();
                return;
            case "2":
                return;
            case "99":
                console.log("Au revoir!");
                quitter = true;

                exit(0);//clean exit
                return;
            default:
                console.log("choix invalide");
                start();
                rl.close();
                return;
        }
    });
    if (quitter) {
        rl.close();
    }
}


exports.start = start;