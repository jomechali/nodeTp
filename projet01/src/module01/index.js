/**
 * module01 : point d entree index.js
 */

function menu() {
    console.log("Menu");
}

function saisie() {
    console.log("saisie");
}

/**
 * les elt au dessus sont prives
 */

exports.menu = menu;
exports.saisie = saisie;