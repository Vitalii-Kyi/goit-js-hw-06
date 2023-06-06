const form = document.querySelector(`.login-form`);
const emailInput = document.querySelector(`input[name="email"]`);
const passwordInput = document.querySelector(`input[name="password"]`);
const submitBtn = document.querySelector(`button[name="submit"]`);

form.addEventListener('submit', event => {
    event.preventDefault();

    if (emailInput.value === '' || passwordInput.value === '') {
        alert('Всі поля повинні бути заповнені!');
        return;
    };

    const formData = {
        email: emailInput.value,
        password: passwordInput.value,
    };
    
    console.log(formData);
    form.reset();
});
