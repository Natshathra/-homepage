document
  .getElementById('contactForm')
  .addEventListener('submit', function (event) {
    event.preventDefault()

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const subject = document.getElementById('subject').value
    const message = document.getElementById('message').value

    if (name && email && subject && message) {
      alert('Form submitted successfully!')
      // You can add code here to send form data to a server
    } else {
      alert('Please fill out all fields.')
    }
  })