function updateHabit(){
    const emojiElement = document.querySelector('#new_habit_emoji');
    const nameElement = document.querySelector('#new_habit_name');
    let newHabit = {habitName:nameElement, habitEmoji:emojiElement};
    //const newHabitToJSON = JSON.stringify({habitName: nameElement.value, habitEmoji:emojiElement.value});
    //localStorage.setItem("habit", newHabitToJSON);
    let newHabitTextEl = document.querySelector('.habit_name');
    let newHabitEmojiEl = document.querySelector('.habit_emoji');

    setEmojiAndText(newHabitTextEl, newHabitEmojiEl, newHabit);

    //Here I tried to rehydrate the value from a JSON object stored in local memory but I will work on this later.
    //let objectFromStorage = localStorage.getItem("habit");
    //newHabitTextEl.textContent = JSON.parse(objectFromStorage).habitName.value;
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

setUserName()