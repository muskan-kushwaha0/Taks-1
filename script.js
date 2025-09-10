// JavaScript Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const msgElement = document.getElementById('formMsg');

  if (!name || !email || !message) {
    msgElement.textContent = 'Please fill out all fields.';
    msgElement.style.color = 'red';
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    msgElement.textContent = 'Please enter a valid email address.';
    msgElement.style.color = 'red';
    return;
  }

  msgElement.textContent = 'Form submitted successfully!';
  msgElement.style.color = 'green';

  // Optionally reset form
  this.reset();
});

// To-Do List Functionality
function addTodo() {
  const input = document.getElementById('todoInput');
  const task = input.value.trim();

  if (task === '') return;

  const li = document.createElement('li');
  li.textContent = task;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = '❌';
  removeBtn.style.marginLeft = '10px';
  removeBtn.onclick = () => li.remove();

  li.appendChild(removeBtn);
  document.getElementById('todoList').appendChild(li);
  input.value = '';
}
