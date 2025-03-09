// Greeting container and its elements
const greeting = document.querySelector(".greeting");
const greetingForm = greeting.querySelector(".greeting-form");
const userInput = greetingForm.querySelector("input");
const userGreeting = greeting.querySelector(".greeting-title");

const HIDDEN_CLASSNAME = "hidden";

// Paint greeting using hidden classname sets display as none in css
const paintGreeting = (username) => {
  greetingForm.classList.toggle(HIDDEN_CLASSNAME);
  userGreeting.innerHTML = `Welcome, ${username}`;
  userGreeting.classList.toggle(HIDDEN_CLASSNAME);
};

// Check username from localStorage
const checkUsername = () => {
  const savedUsername = localStorage.getItem("username");

  if (savedUsername !== null) {
    paintGreeting(savedUsername);
  } else {
    greetingForm.addEventListener("submit", handleSubmit);
  }
};

const handleSubmit = (e) => {
  e.preventDefault();

  const username = userInput.value.trim();

  // Save username in local storage
  localStorage.setItem("username", username);
  paintGreeting(username);
};

checkUsername();
