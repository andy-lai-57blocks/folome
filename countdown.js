let countdown = 15;
const countdownElement = document.getElementById('countdown');
const countdownContainer = document.querySelector('.countdown_container');
const pointsMessageElement = document.getElementById('points_message');
const pointsMessageContainer = document.querySelector('.points_message_container');

const interval = setInterval(() => {
    countdownElement.innerText = countdown;
    
    if (countdown > 0) {
        // Update the message with the current countdown value
        pointsMessageElement.innerText = `看${countdown}秒，获得积分购买商品`;
    } else {
        // Change the message when countdown reaches 0
        pointsMessageElement.innerText = "已获取积分!";
        sessionStorage.setItem('rewarded', 'true'); 
    }
    
    countdown--;
    
    if (countdown < 0) {
        clearInterval(interval);
        countdownContainer.style.display = 'none'; // Hide the countdown container
        
        // Keep the points message visible for a few seconds after countdown reaches 0
        setTimeout(() => {
            // Optional: hide the points message after a delay
            // pointsMessageContainer.style.display = 'none';
        }, 3000);
    }
}, 1000); 
