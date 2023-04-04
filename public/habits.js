function updateHabit(){
    const emojiElement = document.querySelector('#new_habit_emoji');
    const nameElement = document.querySelector('#new_habit_name');
    let newHabit = {habitName:nameElement, habitEmoji:emojiElement};
    let newHabitTextEl = document.querySelector('.habit_name');
    let newHabitEmojiEl = document.querySelector('.habit_emoji');

    try {
        const habitToJSON = {
            emoji: emojiElement.value,
            name: nameElement.value,
        };
        const response = fetch('/api/habit', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(habitToJSON),
        })
        localStorage('habitResponse', response);

        
    } catch {
        console.log('Error when trying to add habit to DB');
    }

    setEmojiAndText(newHabitTextEl, newHabitEmojiEl, newHabit);
}

function loadHabit(){

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
        console.log("Unable to load habit")
    }
    displayHabit(habit);
}

function displayHabit(habit) {
    //Implement the loading feature of this part.
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