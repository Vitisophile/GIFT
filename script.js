// --- 1. Envelope Opening Logic ---
document.getElementById('seal').addEventListener('click', function() {
    const envelope = document.getElementById('envelope');
    const letterContainer = document.getElementById('letterContainer');

    // Add the 'open' class to trigger CSS animation
    envelope.classList.add('open');
    
    // Start the live counter once the letter is opened
    // The counter will only be visible when that page is active
    setTimeout(function() {
        startLiveCounter();
    }, 1000); // Delay starting the counter slightly after the animation
});


// --- 2. Page Navigation Logic ---
document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Remove 'active' from all buttons and pages
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));

        // Add 'active' to the clicked button
        this.classList.add('active');

        // Get the target page ID from the data-page attribute
        const targetPageId = 'page-' + this.getAttribute('data-page');

        // Add 'active' to the target page
        document.getElementById(targetPageId).classList.add('active');
    });
});


// --- 3. Live Counter Logic ---
// IMPORTANT: Change this date and time to the exact moment you met!
const dateMet = new Date('2024-07-22T13:30:00'); // Example: Jan 20, 2023 at 2:30 PM

function updateCounter() {
    const now = new Date();
    const diff = now - dateMet; // Difference in milliseconds

    if (diff < 0) return; // Stop if the date is in the future

    // Convert milliseconds to time components
    const msInSecond = 1000;
    const msInMinute = msInSecond * 60;
    const msInHour = msInMinute * 60;
    const msInDay = msInHour * 24;
    const msInYear = msInDay * 365.25; // Accounting for leap years

    // Calculate time elapsed
    const years = Math.floor(diff / msInYear);
    const days = Math.floor((diff % msInYear) / msInDay);
    const hours = Math.floor((diff % msInDay) / msInHour);
    const minutes = Math.floor((diff % msInHour) / msInMinute);
    const seconds = Math.floor((diff % msInMinute) / msInSecond);

    // Update the DOM elements
    document.getElementById('years').textContent = years;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

let counterInterval;

function startLiveCounter() {
    // Run immediately and then every second
    updateCounter(); 
    counterInterval = setInterval(updateCounter, 1000);
}


// --- 4. The Question Logic ---
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const responseMessage = document.getElementById('response-message');
const questionBox = document.querySelector('.question-box');

yesBtn.addEventListener('click', function() {
    responseMessage.textContent = "Yaaaaa let's go ❤️";
    responseMessage.style.color = 'green';
    responseMessage.classList.remove('hidden');
    // Disable buttons after answer
    questionBox.innerHTML = `<h3>You said YES! ❤️</h3><p>${responseMessage.textContent}</p>`;
});

noBtn.addEventListener('click', function() {
    responseMessage.textContent = "Not acceptable change your answer";
    responseMessage.style.color = 'red';
    responseMessage.classList.remove('hidden');
    // Disable buttons after answer
    questionBox.innerHTML = `<h3>How dare you</h3><p>${responseMessage.textContent}</p>`;
});
