// Clock container and its elements
const clock = document.querySelector(".clock");
const date = clock.querySelector(".clock__date");
const time = clock.querySelector(".clock__time");

// Function contains setInterval to update time every one second
const updateTime = () => {
  setInterval(() => {
    const now = new Date();

    // Configure the formatting of a date
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    date.innerHTML = now.toLocaleDateString("en-GB", options);
    time.innerHTML = now.toLocaleTimeString("en-US");
  }, 1000);
};

updateTime();
