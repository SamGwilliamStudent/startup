function login() {
    const nameElement = document.querySelector("#username");
    localStorage.setItem("username", nameElement.value);
    window.location.href = "habits.html"
}