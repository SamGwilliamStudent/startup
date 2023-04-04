function updateHabit(){
    const emojiElement = document.querySelector('#new_habit_emoji');
    const nameElement = document.querySelector('#new_habit_name');
    let newHabit = {habitName:nameElement, habitEmoji:emojiElement};
    let newHabitTextEl = document.querySelector('.habit_name');
    let newHabitEmojiEl = document.querySelector('.habit_emoji');

    setEmojiAndText(newHabitTextEl, newHabitEmojiEl, newHabit);
}

function setEmojiAndText(elementOne, elementTwo, habitObject){
    elementOne.textContent = habitObject.habitName.value;
    elementTwo.textContent = habitObject.habitEmoji.value;
}

function incrementValue(){
    let habitDurationEl = document.querySelector('.habit_duration');
    let habitDaysCount = document.querySelector('.habit_duration').textContent;
    habitDaysCount++;
    habitDurationEl.textContent = habitDaysCount;

}

function setUserName(){
    const userNameEl = document.querySelector('.user_name');
    userNameEl.textContent = getUserName();
}

function getUserName() {
    return localStorage.getItem('username') ?? 'You!';
}

function loadHabit() {
    let habit = null;
    try {
        const response = fetch('/api/habit')
        habit = response.json();
        localStorage.setItem('habit', JSON.stringify(habit))
    } catch {
        const habitText = localStorage.getItem('habit');
        if(habitText) {
            habit = JSON.parse(habitText)
        }
    }
    displayHabit(habit);
}

function displayHabit(habit) {

}

function displayQuote(data) {
    const containerEl = document.querySelector("#inspiration");
  
    const quoteEl = document.createElement("p");
    quoteEl.classList.add("quote");
    const authorEl = document.createElement("p");
    authorEl.classList.add("author");
  
    quoteEl.textContent = data.content;
    authorEl.textContent = data.author;
  
    containerEl.appendChild(quoteEl);
    containerEl.appendChild(authorEl);
}

function callService(url, displayCallback) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        displayCallback(data);
      });
}

callService("https://api.quotable.io/random", displayQuote);

setUserName()