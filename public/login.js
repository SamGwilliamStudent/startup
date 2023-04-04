function login() {
    const nameElement = document.querySelector("#username");

    try {
        const nameElementToJSON = {
            username: nameElement.value,
            loggedIn: 'yes',
        };
        const response = fetch('/api/user', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(nameElementToJSON),
        })
        localStorage.setItem("username", nameElement.value);
        localStorage.setItem('user', response);
    } catch {
        console.log('Error when trying to update username')
    }

    window.location.href = "habits.html"
}
