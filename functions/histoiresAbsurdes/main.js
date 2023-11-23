const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

let storyText =
  "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

let insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
let insertY = ["the soup kitchen", "Disneyland", "the White House"];
let insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away",
];

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

function result() {
  let newStory = storyText;
  let xItem, yItem, zItem;

  xItem = randomValueFromArray(insertX);
  yItem = randomValueFromArray(insertY);
  zItem = randomValueFromArray(insertZ);

  newStory = newStory
    .replace(/:insertx:/g, xItem)
    .replace(/:inserty:/g, yItem)
    .replace(/:insertz:/g, zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace(/Bob/g, name);
  }

  if (document.getElementById('uk').checked) {
    const weight = Math.round(300 / 2.20462); // Convert pounds to kilograms
    const temperature = Math.round(((94 - 32) * 5) / 9); // Convert Fahrenheit to Celsius
    newStory = newStory.replace(/300 pounds/g, `${weight} kilograms`);
    newStory = newStory.replace(/94 fahrenheit/g, `${temperature} celsius`);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

randomize.addEventListener('click', result);
