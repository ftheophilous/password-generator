const button = document.querySelector("#button"); /* The generate password button*/

const clear = document.querySelector("#clear"); /* The clear button*/


const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const fourth = document.getElementById("fourth");

/* the variables above represent each of the input elements*/

let passwordArray; /* array to collect the generated passwords - not defined yet*/

let elementArray; /* array to collect the input elements - not defined yet*/


const genPassword = () => {

  let passwordLength = Math.floor(Math.random() * (16 - 9) + 8);

  elementArray = [first, second, third, fourth]; /* array defined*/

  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  passwordArray = []; /* array defined*/
  let password = "";
  let k = 0; /* variable to index the items in the elementArray and passwordArray*/

  /* an outer for loop that iterates through the length of the elementArray - it iterates through it 4 times*/
  for (let i = 0; i < elementArray.length; i++) {
    for (j = 0; j < passwordLength; j++) {
      let randInt = Math.floor(Math.random() * characters.length);
      password = password + characters.substring(randInt, randInt + 1);
    }

    passwordArray.push(password); /* after each iteration of the outer for loop i.e. i = 0, 1, 2, 3; the passwordArray collects the generated password */

    password = ""; /* the password variable has to be made empty after each iteration of the outer for loop*/


    elementArray[k].value = passwordArray[k]; /* this statement assigns each of the generated passwords in the passwordArray to the value attribute of the input elements in the elementArray*/

    k++; /* incrementing the index variable*/
  }


};

/* a function that changes the value of the value attribute of each input element to an empty string*/
const remove = () => {
    for (let i = 0; i < 4; i++) {
        elementArray[i].value = "";
    }
}

/* a nodeList called copy_btn is created to hold all elements with copy_btn class*/
const copy_btn = document.querySelectorAll(".copy_btn");
const firstCopy = copy_btn[0];
const secondCopy = copy_btn[1];
const thirdCopy = copy_btn[2];
const fourthCopy = copy_btn[3];

/* function to be called for the click event of the copy button*/
const copyText = (event) => {
  let copy = event.target.id; /* the id of the copy button that calls this function is assigned to the variable, copy*/
  let board; /* undefined variable that will be assigned the id of an input element*/
  switch(copy) {
    case "firstCopy":
      board = "first";
      console.log(copy, board);
      break;
    case "secondCopy":
      variable = copy
      board = "second";
      console.log(copy, board);
      break;
    case "thirdCopy":
      board = "third";
      console.log(copy, board);
      break;
    case "fourthCopy":
      board = "fourth";
      console.log(copy, board);
      break;
    default:
      console.log("undesired element");
  }
  let text = document.getElementById(board);

  navigator.clipboard.writeText(text.value)
    .then(() => {
      console.log("Text copied successfully");
    })
    .catch(err => {
      console.error("Text not copied", err);
    })
}



/* A click event is added to the generate password and clear button*/
button.addEventListener("click", genPassword);
clear.addEventListener("click", remove);

/* Click event of each of the copy button*/
firstCopy.addEventListener("click", copyText);

secondCopy.addEventListener("click", copyText);

thirdCopy.addEventListener("click", copyText);

fourthCopy.addEventListener("click", copyText);


