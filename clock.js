(function() {
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;

        const clockElements = document.querySelectorAll('.clock');
        clockElements.forEach(element => {
            element.textContent = timeString;
        });
    }

    setInterval(updateClock, 1000);

    document.addEventListener('DOMContentLoaded', updateClock);
})();