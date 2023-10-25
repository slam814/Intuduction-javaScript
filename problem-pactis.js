                    //   Problem 1
// Harry's mom gave him money and asked him to buy some orange and apples. write a program to help harry calculate how much money the shopkeeper will return.

var gaveMoney = 1000;
var orangesKgPrice = 370;
var applesKgPrice = 330;

var totatCost = orangesKgPrice + applesKgPrice;
var returnMoney = gaveMoney - totatCost;

console.log(returnMoney);
                      // Problem 2

// Write a program to calculate the aveage marks fo Mathematic, biology, Chemistry, Physics , and Bangla of a student . 

        var mathematics = 75.25;
        var biology = 65;
        var chemistry = 80;
        var Physics = 35.45;
        var Bangla = 99.50;

        var totalMarks = mathematics + biology + chemistry + Physics + Bangla;

        var aveageMarks = totalMarks / 5;

        aveageMarks = aveageMarks.toFixed(2);
        aveageMarks = parseFloat(aveageMarks);
        // aveageMarks = typeof(aveageMarks)

        console.log( aveageMarks)


                // Problem 3 
// Johan's teacher give him to variables. Each Variable contains a String. Johan's teacher asked him to commbine these two strings and print them in one line . Help johan write the program . 

var firstContent = "i am going to be";
var secendContent = "an awesome web devoloper"

var oneLineContent = firstContent + " " + secendContent ;


console.log(oneLineContent);


// problem 4 

// Sarah's Mother is teaching here mathematics. She gave Sarah a number and asked her her what the remainder would be if divided the number by 5. Help sarah write the program.




var giveNumber = 119;
var remainderOrModulas = 119 % 5;

console.log(remainderOrModulas);


         