document.addEventListener('DOMContentLoaded', function() {
    updateUserInfo();

    const checkButton = document.querySelector('.check-button');
    if (checkButton) {
        checkButton.addEventListener('click', function() {
            const domainInput = document.querySelector('.domain-input');
            const domainSelect = document.querySelector('.domain-select');
            const domainAvailable = document.querySelector('.domain-available');
            const periodSelect = document.querySelector('.period-select');
            const continueButton = document.querySelector('.continue-button');
            const domainNameSpan = document.getElementById('domain-name');

            if (!domainInput.value) {
                alert('Palun sisesta domeeninimi');
                return;
            }

            const domainName = domainInput.value + domainSelect.value;
            domainNameSpan.textContent = domainName;
            
            domainAvailable.style.display = 'block';
            periodSelect.style.display = 'block';
            continueButton.style.display = 'block';
            
            localStorage.setItem('selectedDomain', domainName);
            updatePrice();
        });
    }

    const continueButton = document.querySelector('.continue-button');
    if (continueButton) {
        continueButton.addEventListener('click', function() {
            window.location.href = 'index4.html';
        });
    }

    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;

            if (name && email && phone) {
                localStorage.setItem('registrationName', name);
                localStorage.setItem('registrationEmail', email);
                localStorage.setItem('registrationPhone', phone);
                
                window.location.href = 'index3.html';
            }
        });
    }

    const selectedDomain = document.getElementById('selected-domain');
    if (selectedDomain && localStorage.getItem('selectedDomain')) {
        selectedDomain.textContent = localStorage.getItem('selectedDomain');
    }

    function updateUserInfo() {
        const currentDate = document.getElementById('current-date');
        const currentUser = document.getElementById('current-user');
        
        if (currentDate) {
            currentDate.textContent = '2025-06-03 14:35:05';
        }
        
        if (currentUser) {
            currentUser.textContent = 'DLtru';
        }
    }

    function updatePrice() {
        const periodSelect = document.getElementById('period-select');
        const priceDisplay = document.querySelector('.price');
        
        if (periodSelect && priceDisplay) {
            const months = parseInt(periodSelect.value);
            const pricePerMonth = 33;
            const total = months * pricePerMonth;
            priceDisplay.textContent = `€${total.toFixed(2)} + KM`;
        }
    }

    const periodSelect = document.getElementById('period-select');
    if (periodSelect) {
        periodSelect.addEventListener('change', updatePrice);
    }
});