/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))

}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){
  let timeArray = timeString.split(':')
  let hours = parseInt(timeArray[0]);
  if (hours <= 11) {
    return "Good Morning";
  } else if (hours > 11 && hours < 17 ){
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
};
/* Write your implementation of displayMessage() */
function displayMessage(message){
  document.getElementById("greeting").innerText = message;
};