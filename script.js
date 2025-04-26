// Event Handling 🎈
const magicButton = document.getElementById('magicButton');
magicButton.addEventListener('click', () => {
  magicButton.textContent = "You clicked me!";
  magicButton.style.backgroundColor = "#ff69b4"; // pink
});

// Hover Effect
magicButton.addEventListener('mouseover', () => {
  magicButton.style.transform = "scale(1.1)";
});
magicButton.addEventListener('mouseout', () => {
  magicButton.style.transform = "scale(1)";
});

// Keypress Detection
document.addEventListener('keydown', (event) => {
  console.log(`You pressed: ${event.key}`);
});

// Bonus: Double-click secret
magicButton.addEventListener('dblclick', () => {
  alert('🎉 Secret Double-Click Unlocked!');
});

// Interactive Elements 🎮
// Gallery
const images = [
  "https://picsum.photos/300/200?random=1",
  "https://picsum.photos/300/200?random=2",
  "https://picsum.photos/300/200?random=3"
];
let currentImage = 0;
const galleryImage = document.getElementById('galleryImage');

document.getElementById('next').addEventListener('click', () => {
  currentImage = (currentImage + 1) % images.length;
  galleryImage.src = images[currentImage];
});

document.getElementById('prev').addEventListener('click', () => {
  currentImage = (currentImage - 1 + images.length) % images.length;
  galleryImage.src = images[currentImage];
});

// Tabs
const tabButtons = document.querySelectorAll('.tabButton');
const tabContents = document.querySelectorAll('.tabContent');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-tab');

    tabContents.forEach(content => {
      content.classList.add('hidden');
      content.classList.remove('active');
    });

    document.getElementById(target).classList.remove('hidden');
    document.getElementById(target).classList.add('active');
  });
});

// Form Validation 📋✅
const form = document.getElementById('myForm');
const feedback = document.getElementById('formFeedback');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (name === '' || email === '' || password === '') {
    feedback.textContent = "Please fill in all fields!";
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    feedback.textContent = "Please enter a valid email!";
    return;
  }

  if (password.length < 8) {
    feedback.textContent = "Password must be at least 8 characters!";
    return;
  }

  feedback.style.color = "green";
  feedback.textContent = "Form submitted successfully!";
});

// Bonus: Real-time feedback
document.getElementById('password').addEventListener('input', () => {
  const password = document.getElementById('password').value;
  if (password.length < 8) {
    feedback.style.color = "red";
    feedback.textContent = "Password too short!";
  } else {
    feedback.style.color = "green";
    feedback.textContent = "Good password length.";
  }
});
