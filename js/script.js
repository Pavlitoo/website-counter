let count = 0;
        const counterElement = document.getElementById('counter');
        const incrementBtn = document.getElementById('incrementBtn');
        const decrementBtn = document.getElementById('decrementBtn');

        function updateCounter() {
            counterElement.innerText = count;
        }

        function increment() {
            count++;
            updateCounter();
        }

        function decrement() {
            if (count > 0) {
                count--;
                updateCounter();
            }
        }

        incrementBtn.addEventListener('click', increment);
        decrementBtn.addEventListener('click', decrement);