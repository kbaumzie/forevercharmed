function toggleMenu() {
    const menu = document.getElementById("nav-menu");
    menu.classList.toggle("show");
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

function handleForm(formId, endpoint) {
    const form = document.getElementById(formId);
    const confirmation = form.querySelector('.form-confirmation');

    form.addEventListener('submit', async function (e) {
      e.preventDefault(); // Stop default redirect

      const formData = new FormData(form);

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          body: formData
        });

        if (response.ok) {
          form.reset();
          confirmation.style.display = 'block';
        } else {
          confirmation.textContent = '❌ Something went wrong. Please try again.';
          confirmation.style.display = 'block';
        }
      } catch (error) {
        confirmation.textContent = '❌ Error sending form.';
        confirmation.style.display = 'block';
      }
    });
}

// Call for each form
handleForm('booking-form', 'https://formsubmit.co/1cd987aa9db834bbfb87214aa5e02299');
handleForm('subscribe-form', 'https://formsubmit.co/1cd987aa9db834bbfb87214aa5e02299');
