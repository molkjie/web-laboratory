document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactform');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    let isValid = true;

    const name = document.getElementById('name');
    const age = document.getElementById('age');
    const email = document.getElementById('email');
    const website = document.getElementById('company');
    const message = document.getElementById('message');

    clearErrors();

    if (!/^[a-zA-Zа-яА-ЯіІїЇєЄ'-\s]{2,30}$/.test(name.value)) {
      showError(
        name,
        'Your Name must be 2-30 characters long and contain only letters, hyphens, and spaces.',
      );
      isValid = false;
    }

    if (!/^(1[89]|[2-9][0-9]|1[01][0-9]|130)$/.test(age.value)) {
      showError(age, 'Age must be a number between 18 and 130.');
      isValid = false;
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value)) {
      showError(email, 'Enter a valid email address.');
      isValid = false;
    }

    if (
      website.value &&
      !/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/.test(
        website.value,
      )
    ) {
      showError(website, 'Enter a valid website URL or leave empty.');
      isValid = false;
    }

    if (message.value.length < 10 || message.value.length > 350) {
      showError(message, 'Your Message must be between 10 and 350 characters.');
      isValid = false;
    }

    if (isValid) {
      form.submit();
    }
  });

  function showError(input, message) {
    input.classList.add('error-border');
    const error = document.createElement('p');
    error.classList.add('error-message');
    error.innerText = '* ' + message;
    input.parentNode.appendChild(error);

    input.addEventListener(
      'focus',
      function () {
        input.classList.remove('error-border');
        if (input.parentNode.querySelector('.error-message')) {
          input.parentNode.removeChild(
            input.parentNode.querySelector('.error-message'),
          );
        }
      },
      { once: true },
    );
  }

  function clearErrors() {
    document.querySelectorAll('.error-message').forEach(el => el.remove());
    document
      .querySelectorAll('.error-border')
      .forEach(el => el.classList.remove('error-border'));
  }
});
