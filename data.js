const database = firebase.database().ref();
// this is how we establish the database reference object

const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
button.addEventListener("click", updateDB);

//Set database object here

/**
 * Updates the database with the username and message.
 */
function updateDB(event) {
  event.preventDefault(); // this prevents the page from refreshing after a user clicks the submit button

  const username = usernameElement.value;
  const message = messageElement.value;

  usernameElement.value = "";
  messageElement.value = "";

  //Update database here

  const value = {
    NAME: username,
    MESSAGE: message,
  };
  database.push(value);
}

database.on("child_added", addMessageToBoard);

const messageContainer = document.querySelector(".allMessages");

function addMessageToBoard(rowData) {
  const row = rowData.val();
  const name = row.NAME;
  const message = row.MESSAGE;

  const pElement = document.createElement("p");
  pElement.innerText = `${name}: ${message}`;
  messageContainer.appendChild(pElement);
}