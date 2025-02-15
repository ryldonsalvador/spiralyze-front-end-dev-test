const items = document.querySelectorAll('.carousel .item');
const dots = document.querySelectorAll('.carousel-indicators li');
var currentItem = 0;
var isEnabled = true;
const vPlayer = document.getElementById('videoplayer');
const video = document.getElementById('video');
const vBg = document.getElementById('vid-bg');

const menuBtn = document.querySelector('.menu-btn');

const swipeArea = document.getElementById("dragItem");

const playButtonContainer = document.querySelector('.play-button-container');

let startX = 0, endX = 0;
const swipeThreshold = 20; // Minimum pixels for a valid swipe

const playHover = document.querySelector('.p-icon-hover');

const menuNav = document.querySelector('.menu-nav');
const closeBtn = document.querySelector('.close-btn');


function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
}

function nextItem(n) {
    console.log('right')
    hideItem('to-left');
    changeCurrentItem(n + 1);
    showItem('from-right');
}

function previousItem(n) {
    console.log('left')
    hideItem('to-right');
    changeCurrentItem(n - 1);
    showItem('from-left');
}

function goToItem(n) {
    if (n < currentItem) {
        hideItem('to-right');
        currentItem = n;
        showItem('from-left');
    } else {
        hideItem('to-left');
        currentItem = n;
        showItem('from-right');
    }
}

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    dots[currentItem].classList.remove('active');
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('active', direction);
    });
}

function showItem(direction) {
    items[currentItem].classList.add('next', direction);
    dots[currentItem].classList.add('active');
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnabled = true;
    });
}

document.querySelector('.p-icon-hover').addEventListener('click', function(){
    playButtonContainer.style.display = "none";
    vPlayer.style.display = "block";
    vBg.style.display = "block";
    video.play();
})

document.querySelector('.close_video').addEventListener('click', function(){
    video.pause();
    video.currentTime = 0;
    vPlayer.style.display = "none";
    vBg.style.display = "none";
    playButtonContainer.style.display = "block";
})

document.querySelector('#vid-bg').addEventListener('click', function(){
    video.pause();
    video.currentTime = 0;
    vPlayer.style.display = "none";
    vBg.style.display = "none";
    playButtonContainer.style.display = "block";
})


document.querySelector('.clickedL').addEventListener('click', function() {
    if (isEnabled) {
        previousItem(currentItem);
        console.log('left')
    }
});

document.querySelector('.clickedR').addEventListener('click', function() {
    if (isEnabled) {
        nextItem(currentItem);

    }
});

document.querySelector('.carousel-indicators').addEventListener('click', function(e) {
    var target = [].slice.call(e.target.parentNode.children).indexOf(e.target);
    if (target !== currentItem && target < dots.length) {
        goToItem(target);
    }
});

menuBtn.addEventListener('click', () => {
    menuNav.classList.add('open');  
    menuBtn.classList.add('hidden');
    closeBtn.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    closeBtn.classList.remove('open');
    menuNav.classList.remove('open'); 
    menuBtn.classList.remove('hidden'); 
});

// Remove "open" class and show burger button when screen size is greater than 765px
window.addEventListener('resize', () => {
    if (window.innerWidth > 765) {
        closeBtn.classList.remove('open');
        menuNav.classList.remove('open'); 
        menuBtn.classList.remove('hidden'); 
    }
});

// 🔹 Function to start swipe detection
function startSwipe(e) {
    startX = e.touches ? e.touches[0].clientX : e.clientX;
    endX = startX;
}

// 🔹 Function to track movement
function moveSwipe(e) {
    endX = e.touches ? e.touches[0].clientX : e.clientX;
}

const disableSwipeWidth = 890;
// 🔹 Function to determine swipe direction
function endSwipe() {
    var swipeDistance = endX - startX;

    if (window.innerWidth > disableSwipeWidth) {
        console.log("Swipe disabled on this screen size");
        return; // Stop execution if the screen width is too small
    }

    if (Math.abs(swipeDistance) > swipeThreshold && isEnabled) {
        swipeDistance > 0 ? previousItem(currentItem) : nextItem(currentItem);
    } else {
        console.log("tap");
    }
}

// ✅ Add event listeners for both desktop & mobile
swipeArea.addEventListener("mousedown", startSwipe);
swipeArea.addEventListener("mousemove", moveSwipe);
swipeArea.addEventListener("mouseup", endSwipe);

swipeArea.addEventListener("touchstart", startSwipe);
swipeArea.addEventListener("touchmove", moveSwipe);
swipeArea.addEventListener("touchend", endSwipe);


document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent actual submission

    let firstNameInput = document.getElementById("firstName");
    let firstNameErrorBox = document.getElementById("firstNameError");
    let firstNameErrorText = document.getElementById("firstNameErrorText");

    let lastNameInput = document.getElementById("lastName");
    let lastNameErrorBox = document.getElementById("lastNameError");
    let lastNameErrorText = document.getElementById("lastNameErrorText");

    let emailInput = document.getElementById("email");
    let emailErrorBox = document.getElementById("emailError");
    let emailErrorText = document.getElementById("emailErrorText");

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let companyInput = document.getElementById("company");
    let companyErrorBox = document.getElementById("companyError");
    let companyErrorText = document.getElementById("companyErrorText");

    let countrySelect = document.getElementById("country");
    let countryErrorBox = document.getElementById("countryError");
    let countryErrorText = document.getElementById("countryErrorText");

    // Step 1: Validate First Name First
    if (!firstNameInput.value.trim()) {
        firstNameErrorText.textContent = "This field can't be empty. Please fill it in.";
        firstNameInput.classList.add("error");
        firstNameErrorBox.style.display = "block";
        return; // Stop validation here
    } else {
        firstNameInput.classList.remove("error");
        firstNameErrorBox.style.display = "none";
    }

    // Step 2: Validate Last Name
    if (!lastNameInput.value.trim()) {
        lastNameErrorText.textContent = "This field can't be empty. Please fill it in.";
        lastNameInput.classList.add("error");
        lastNameErrorBox.style.display = "block";
        return; // Stop validation here
    } else {
        lastNameInput.classList.remove("error");
        lastNameErrorBox.style.display = "none";
    }

    // Step 3: Validate Email Next
    if (!emailInput.value.trim()) {
        emailErrorText.textContent = "This field can't be empty. Please fill it in.";
        emailInput.classList.add("error");
        emailErrorBox.style.display = "block";
        emailInput.value = ""; // Clear input
        return; // Stop validation here
    } else if (!emailPattern.test(emailInput.value)) {
        emailErrorText.textContent = "Invalid email format!";
        emailInput.classList.add("error");
        emailErrorBox.style.display = "block";
        emailInput.value = ""; // Clear input on invalid email
        return; // Stop validation here
    } else {
        emailInput.classList.remove("error");
        emailErrorBox.style.display = "none";
    }

    // Step 4: Validate Company
    if (!companyInput.value.trim()) {
        companyErrorText.textContent = "This field can't be empty. Please fill it in.";
        companyInput.classList.add("error");
        companyErrorBox.style.display = "block";
        return; // Stop validation here
    } else {
        companyInput.classList.remove("error");
        companyErrorBox.style.display = "none";
    }

    // Step 5: Validate Country Selection
    if (countrySelect.value === "") {
        countryErrorText.textContent = "This field can't be empty. Please fill it in.";
        countrySelect.classList.add("error");
        countryErrorBox.style.display = "block";
        return;
    } else {
        countrySelect.classList.remove("error");
        countryErrorBox.style.display = "none";
    }

    // If all validations pass, submit the form
    this.submit();
});


// Hide error on focus & remove red border
document.querySelectorAll("input, select").forEach((element) => {
    element.addEventListener("focus", function () {
        this.classList.remove("error");
        document.getElementById(this.id + "Error").style.display = "none";
    });
});

document.getElementById("email").addEventListener("blur", function () {
    let emailInput = this;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailErrorBox = document.getElementById("emailError");
    let emailErrorText = document.getElementById("emailErrorText");

    if (emailInput.value.trim() && !emailPattern.test(emailInput.value)) {
        emailErrorText.textContent = "Invalid email format!";
        emailInput.classList.add("error");
        emailErrorBox.style.display = "block";
        emailInput.value = ""; // Clear the input if invalid
    }
});


let inputs = document.querySelectorAll("input");
inputs.forEach(input => {
    input.setAttribute("autocomplete", "off");
});