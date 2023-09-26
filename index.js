const textarea = document.querySelector(".text-area");
const char_element = document.querySelector(".char-number");
const word_element = document.querySelector(".word-number");
const twitter_element = document.querySelector(".twitter-number");
const insta_element = document.querySelector(".insta-number");
const twitter_word_element = document.querySelector(".twitter-word-number");
const insta_word_element = document.querySelector(".insta-word-number"); 

let x_char_limit = 280;
let insta_char_limit = 400;

let space_length_numner = 0;
// Function to count characters
const charCounter = (e) => {
  const inputText = e.target.value;
  char_element.innerText = inputText.length;
};

// Function to count words
const wordCounter = (e) => {
    const inputText = e.target.value;
    if (inputText.trim() === "") {
      space_length_numner = 0; // Set word count to 0 when there's no text
    } else {
      const words = inputText.trim().split(/\s+/); // Split by spaces
      space_length_numner = words.length; // Count words, not spaces
    }
    word_element.innerText = space_length_numner;
  };
       
  

// Function to change color for Twitter and Instagram
const colorChange = (name, count) => {
  if (name === "twitter") {
    if (count > x_char_limit) {
      twitter_element.classList.add("change-color");
    } else {
      twitter_element.classList.remove("change-color");
    }
  } else {
    if (count > insta_char_limit) {
      insta_element.classList.add("change-color");
    } else {
      insta_element.classList.remove("change-color");
    }
  }
};

// Function to count characters for Twitter
const twitterCounter = (e) => {
  const inputText = e.target.value;
  twitter_element.innerText = x_char_limit - inputText.length;
  colorChange("twitter", inputText.length);
};

// Function to count characters for Instagram
const instaCounter = (e) => {
  const inputText = e.target.value;
  insta_element.innerText = insta_char_limit - inputText.length;
  colorChange("instagram", inputText.length);
};

// Function to count words for Twitter
const twitterWordCounter = (e) => {
  const inputText = e.target.value;
  const words = inputText.trim().split(/\s+/); // Split by spaces
  twitter_word_element.innerText = words.length;
};

// Function to count words for Instagram
const instaWordCounter = (e) => {
  const inputText = e.target.value;
  const words = inputText.trim().split(/\s+/); // Split by spaces
  insta_word_element.innerText = words.length;
};

// Main event listener
textarea.addEventListener("input", (e) => {
  charCounter(e);
  wordCounter(e);
  twitterCounter(e);
  instaCounter(e);
  twitterWordCounter(e);
  instaWordCounter(e);
});
