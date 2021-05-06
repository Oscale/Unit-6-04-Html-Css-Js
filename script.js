/* This Js is used to declare that the button known as "cal" will be listened to by the .addEventListener for a click. This action is known as "CalButton". */

document.getElementById('cal').addEventListener('click', CalButton)

/* These variables below are set to equal zero so that the value can be processed as a number later on when its set ot a float. */

let basea = 0
let baseb = 0
let height = 0
let baseab = 0
let baseab2 = 0
let anwser = 0

/* This function is the calculator which outputs to the "Results Here" box. */

function CalButton () {

  /* To be able to call apon the value inserted by the user,I make sure that my Js will take the ".value" from the input boxes in the html to this function. */

  basea = document.getElementById('basea').value
  baseb = document.getElementById('baseb').value
  height = document.getElementById('heightn').value

  /* Here I make sure every variable is seen as a float otherwise the output is NaN. */

  basea = parseFloat(basea)
  baseb = parseFloat(baseb)
  height = parseFloat(height)
  baseab = parseFloat(baseab)
  baseab2 = parseFloat(baseab2)
  anwser = parseFloat(anwser)

  /* Here I make "baseab" = both basea and baseb */

  baseab = (basea + baseb)

  /* Here I make "baseab2" = baseab / 2 which is the second step in the calculation of area of the trapezoid. */

  baseab2 = (baseab / 2)

  /* Here I make "baseab2" = both baseab2 and height to get the anwser */

  anwser = (baseab2 * height)

  /* Finally, after following the order of operations for the trapezoid formula in Js I change the text of the anwserbox to equal the result of the calculations. */

  document.getElementById('anwserbox').innerHTML = anwser

}
