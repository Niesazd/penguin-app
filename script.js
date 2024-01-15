function buttonFn() {
  let thoughts = document.querySelector(".thought-bubble");
  let randomPenguTalks = [
    "Hello",
    "Bluubb bluub",
    "It's warm here",
    "What do you eat today",
    "I like fishies🐟",
    "What are you doing today",
    "What's in the outside world",
    "Let's play together",
    "Soup...",
    "A descent of a fairytale into the real world",
  ];

  thoughts.innerHTML = randomPenguTalks[Math.floor(Math.random() * 10)];
}

let clickBtn = document.querySelector("button");
clickBtn.addEventListener("click", buttonFn);
