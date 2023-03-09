function setUserName(){
    const userNameEl = document.querySelector('.user_name');
    userNameEl.textContent = getUserName();
}

function getUserName() {
    return localStorage.getItem('username') ?? 'Unknown';
}

setUserName()