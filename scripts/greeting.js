// Greeting container and its elements
const greeting = document.querySelector(".greeting");
const greetingForm = greeting.querySelector(".greeting-form");
const userInput = greeting.querySelector(".greeting-form input");
const userGreeting = greeting.querySelector(".greeting-title");

const HIDDEN_CLASSNAME = "hidden";

// Paint greeting
const greetingUser = (username) => {
  greetingForm.classList.toggle(HIDDEN_CLASSNAME);
  userGreeting.innerHTML = `Welcome, ${username}`;
  userGreeting.classList.toggle(HIDDEN_CLASSNAME);
};

const checkUsername = () => {
  const username = localStorage.getItem("username");

  if (username !== null) {
    greetingUser(username);
  } else {
    greetingForm.addEventListener("submit", handleSubmit);
  }
};

const handleSubmit = (e) => {
  e.preventDefault();

  const username = userInput.value.trim();

  // Save username in local storage
  localStorage.setItem("username", username);
  greetingUser(username);
};

checkUsername();
