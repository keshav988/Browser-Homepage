const greeting = document.querySelector('#greeting');




// showGreeting function
function showGreeting() {
    let date = new Date();
    let hours = date.getHours();

    if (hours >= 5 && hours < 8) {
        greeting.innerHTML = "Rise and shine! JAYANTA";
    } 
    else if (hours >= 8 && hours < 12) {
        greeting.innerHTML = "Good morning, JAYANTA";
    }
    else if (hours >= 12 && hours < 17) {
        greeting.innerHTML = "Good afternoon, JAYANTA";
    }
    else if (hours >= 17 && hours < 20) {
        greeting.innerHTML = "Good evening, JAYANTA";
    }
    else if (hours >= 20 && hours < 24) {
        greeting.innerHTML = "Good night, JAYANTA";
    }
    else {
        greeting.innerHTML = "What's up? JAYANTA";
    }

}


// Update the greeting initially
showGreeting();

// Set interval to update the greeting every minute (60000 milliseconds)
setInterval(showGreeting, 60000);