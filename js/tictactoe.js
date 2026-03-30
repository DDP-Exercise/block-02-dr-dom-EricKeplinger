"use strict";
/*******************************************************
 *     tictactoe.js - 50p.
 *
 *     When you fought Dr. DOM today, to me it looked like two super heroes playing
 *     TIC TAC TOE! At times, it was hard to tell, who would have won which fight...
 *
 *     To solve my misfortune, please write a little program, that takes a (hard-coded)
 *     two-dimensional Array (BATTLEFIELD) and checks if one of the two opponents has
 *     won the battle, and if so, how (vertical, horizontal, main-diagonal, anti-diagonal).
 *
 *     Since you have already had a couple of encounters of different severities, I simply
 *     can't translate all your battles to TIC TAC TOE matches of the same size.
 *     For that reason, your little program should be written in a way, that it can
 *     scale with the size of the battlefield (3x3, 4x4, ..., nxn).
 *
 *     Eric Keplinger - 2026-03-28
 *******************************************************/

const X = "Savior (X)";
const O = "Dr. DOM (O)";
let counter_x = 0;
let counter_o = 0;
let winner = "Don´t know it yet";

//Some of your epic battles:
const BATTLEFIELD =
    [
        [O, X, O],
        [X, X, X],
        [O, O, X],
    ];
console.log(BATTLEFIELD);
check_horizontal3x3();
check_vertical3x3();
 const BATTLEFIELD_2 =
     [
         [null, X, X],
         [X, O, null],
         [O, O, O],
     ];
check_horizontal3x3();
check_vertical3x3();
 const BATTLEFIELD_3 =
     [
         [O, O, X],
         [X, O, X],
         [O, X, X],
     ];
check_horizontal3x3();
check_vertical3x3();
 const BATTLEFIELD_4 =
     [
         [O, X, X],
         [X, O, X],
         [O, X, O],
     ];
check_horizontal3x3();
check_vertical3x3();
 const BATTLEFIELD_5 =
     [
         [O, X, X, X],
         [X, O, X, O],
         [O, X, O, X],
         [X, O, X, X],
     ];
check_horizontal4x4();
check_vertical4x4();
 const BATTLEFIELD_6 =
     [
         [O, X, X, X, null],
         [X, O, X, O, O],
         [O, X, O, null,  X],
         [X, null, X, O, O],
         [X, null, O, X, O],
     ];
check_horizontal5x5();
check_vertical5x5();
//TODO: Check if the battle is over, and if so, announce the winner!

// Check Horizontal
function check_horizontal3x3(){
        for (let i = 0; i < BATTLEFIELD.length; i++) {
            counter_x = 0;
            counter_o = 0;
            for(let j = 0; j < BATTLEFIELD[i].length; j++) {
                let spot = BATTLEFIELD[i][j];
                if (spot === "Savior (X)") {
                    counter_x++;
                    if (counter_x === 3){
                        console.log("The Savior has won the game");
                    }
                } else if (spot === "Dr. DOM (O)") {
                    counter_o++;
                    if (counter_o === 3){
                        console.log("Dr. Dom has won the game");
                }
                }
            }
        }
}

function check_vertical3x3(){
        for(let j = 0; j < BATTLEFIELD[0].length; j++){
            counter_x = 0;
            counter_o = 0;
            for (let i = 0; i < BATTLEFIELD.length; i++) {
                let spot = BATTLEFIELD[i][j];
                if (spot === "Savior (X)") {
                    counter_x++;
                    if (counter_x === 3){
                        console.log("The Savior has won the game");
                    }
                } else if (spot === "Dr. DOM (O)") {
                    counter_o++;
                    if (counter_o === 3){
                        console.log("Dr. Dom has won the game");
                    }
                }
            }
        }
}

function check_horizontal4x4(){
    for (let i = 0; i < BATTLEFIELD.length; i++) {
        counter_x = 0;
        counter_o = 0;
        for(let j = 0; j < BATTLEFIELD[i].length; j++) {
            let spot = BATTLEFIELD[i][j];
            if (spot === "Savior (X)") {
                counter_x++;
                if (counter_x === 4){
                    console.log("The Savior has won the game");
                }
            } else if (spot === "Dr. DOM (O)") {
                counter_o++;
                if (counter_o === 4){
                    console.log("Dr. Dom has won the game");
                }
            }
        }
    }
}

function check_vertical4x4(){
    for(let j = 0; j < BATTLEFIELD[0].length; j++){
        counter_x = 0;
        counter_o = 0;
        for (let i = 0; i < BATTLEFIELD.length; i++) {
            let spot = BATTLEFIELD[i][j];
            if (spot === "Savior (X)") {
                counter_x++;
                if (counter_x === 4){
                    console.log("The Savior has won the game");
                }
            } else if (spot === "Dr. DOM (O)") {
                counter_o++;
                if (counter_o === 4){
                    console.log("Dr. Dom has won the game");
                }
            }
        }
    }
}

function check_horizontal5x5(){
    for (let i = 0; i < BATTLEFIELD.length; i++) {
        counter_x = 0;
        counter_o = 0;
        for(let j = 0; j < BATTLEFIELD[i].length; j++) {
            let spot = BATTLEFIELD[i][j];
            if (spot === "Savior (X)") {
                counter_x++;
                if (counter_x === 4){
                    console.log("The Savior has won the game");
                }
            } else if (spot === "Dr. DOM (O)") {
                counter_o++;
                if (counter_o === 4){
                    console.log("Dr. Dom has won the game");
                }
            }
        }
    }
}

function check_vertical5x5(){
    for(let j = 0; j < BATTLEFIELD[0].length; j++){
        counter_x = 0;
        counter_o = 0;
        for (let i = 0; i < BATTLEFIELD.length; i++) {
            let spot = BATTLEFIELD[i][j];
            if (spot === "Savior (X)") {
                counter_x++;
                if (counter_x === 5){
                    console.log("The Savior has won the game");
                }
            } else if (spot === "Dr. DOM (O)") {
                counter_o++;
                if (counter_o === 5){
                    console.log("Dr. Dom has won the game");
                }
            }
        }
    }
}

function check_horizontal6x6(){
    for (let i = 0; i < BATTLEFIELD.length; i++) {
        counter_x = 0;
        counter_o = 0;
        for(let j = 0; j < BATTLEFIELD[i].length; j++) {
            let spot = BATTLEFIELD[i][j];
            if (spot === "Savior (X)") {
                counter_x++;
                if (counter_x === 6){
                    console.log("The Savior has won the game");
                }
            } else if (spot === "Dr. DOM (O)") {
                counter_o++;
                if (counter_o === 6){
                    console.log("Dr. Dom has won the game");
                }
            }
        }
    }
}

function check_vertical6x6(){
    for(let j = 0; j < BATTLEFIELD[0].length; j++){
        counter_x = 0;
        counter_o = 0;
        for (let i = 0; i < BATTLEFIELD.length; i++) {
            let spot = BATTLEFIELD[i][j];
            if (spot === "Savior (X)") {
                counter_x++;
                if (counter_x === 6){
                    console.log("The Savior has won the game");
                }
            } else if (spot === "Dr. DOM (O)") {
                counter_o++;
                if (counter_o === 6){
                    console.log("Dr. Dom has won the game");
                }
            }
        }
    }
}
// Check Vertical
// Check Main Diagonal
// Check Anti Diagonal

