document.addEventListener('DOMContentLoaded', buzzfeedQuiz, false);

function buzzfeedQuiz() {

  // task 4: declare variables for the html elements you'll use as selectors later. You need the submit button, display div, and all three inputs for your questions.

  let button = document.querySelector(".submit");
  let displayResult = document.querySelector(".displayResult");
  let q1 = document.querySelector(".q1");
  let q2 = document.querySelector(".q2");
  let q3 = document.querySelector(".q3");
  let q4 = document.querySelector(".q4");


  // task 5: declare variables for values we'll set later. You'll need one for an image source, a result and a score for each question.
  let imgSrc;
  let character;
  let q1Score;
  let q2Score;
  let q3Score;
  let q4Score;



  button.onclick = function() {

    // task 6: Declare user input variables for each of your questions. If you have three questions, you should have three variables. These variables should equal the value of the user input for each question.
    userQ1 = q1.value;
    userQ2 = q2.value;
    userQ3 = q3.value;
    userQ4 = q4.value;



    // task 7: create a conditional statement for the responses to Question 1 based on the user input.
    if (userQ1 === "Angry Birds") {
      q1Score = 5;
    }
    if (userQ1 === "Doodle Jump") {
      q1Score = 10;
    }
    if (userQ1 === "Flow Free") {
      q1Score = 15;
    }
    if (userQ1 === "Temple Run") {
      q1Score = 20;
    }
    console.log(q1Score);



    // task 8: create a conditional statement for the responses to Question 2 based on the user input.
    if (userQ2 === "iPhone 14"){
      q2Score = 5;
    }
    if (userQ2 === "Samsung Galaxy Z Flip4"){
      q2Score = 10;
    }
    if (userQ2 === "iPad Pro 12.9 inch" || userQ2 === "iPad Pro") {
      q2Score = 15;
    }
    if (userQ2 === "Samsung Galaxy Tab S8+"){
      q2Score = 20;
    }
    console.log(q2Score);

    // task 9: create a conditional statement for the responses to Question 3 based on the user input.

    if (userQ3 === "Horror"){
      q3Score = 5;
    }
    if (userQ3 === "Puzzle"){
      q3Score = 10;
    }
    if (userQ3 === "FPS") {
      q3Score = 15;
    }
    if (userQ3 === "Strategy") {
      q3Score = 20;
    }
    console.log(q3Score);

    if (userQ4 === "Minecraft") {
      q4Score = 0;
    }
    if (userQ4 === "Raid Shadow Legends") {
      q4Score = -9999999999999999999999; //intentionally tanks score
    }
    console.log(q4Score);
    // task 10: declare a variable for the total score of the quiz and set it equal to the sum of each question score.
    let sum;
    sum = q1Score + q2Score + q3Score + q4Score;
    console.log(sum);



    // task 11: create a conditional statement for the result to the quiz based on the total score. Using string interpolation, display these to the page: the result, an image that corresponds and a message to go with it.
    if (sum < 0) {
      let thumbDown = "<img src='https://c8.alamy.com/comp/DD2C2J/old-man-thumbs-down-DD2C2J.jpg'>"
      displayResult.innerHTML = "Your opinion on the last one is wrong";
      displayResult.insertAdjacentHTML("afterend", thumbDown);
    } else if (sum <= 20) {
      let 
      
    }





  }

};