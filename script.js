// Floating emojis (roses + food)
const emojis = ["🌹", "🍔", "🍕", "🥞", "🍩", "🍦", "🍫", "🥟", "🍿"];
const container = document.getElementById("floating-emojis");

setInterval(() => {
  const span = document.createElement("span");
  span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  span.style.left = Math.random() * 100 + "vw";
  span.style.fontSize = Math.random() * 20 + 20 + "px";
  span.style.animationDuration = Math.random() * 5 + 5 + "s";
  container.appendChild(span);

  setTimeout(() => { span.remove(); }, 10000);
}, 500);

// Login logic
function checkLogin() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("login-error");

  if (email === "shailya_loves_vaibhav@infinite" && password === "vaibhav_loves_shaillya@infinite") {
    showPage("quiz-page");
    loadQuestion();
  } else {
    error.textContent = "❌ Wrong credentials!";
  }
}

// Quiz logic
const questions = [
  { q: "Do you love Vaibhav?", options: ["Yes", "No"], correct: 0 },
  { q: "Will you marry Vaibhav?", options: ["Yes", "No"], correct: 0 },
  { q: "Who is more beautiful?", options: ["Shailya", "Vaibhav"], correct: 0 },
  { q: "Who fights more?", options: ["Shailya", "Vaibhav"], correct: 0 },
  { q: "Who are you?", options: ["Vaibhav ki sab kuch", "Attitude queen"], correct: 0 }
];

let currentQ = 0;

function loadQuestion() {
  const question = questions[currentQ];
  document.getElementById("question").textContent = question.q;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  question.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(i);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(i) {
  const error = document.getElementById("quiz-error");
  if (i === questions[currentQ].correct) {
    error.textContent = "";
    currentQ++;
    if (currentQ < questions.length) {
      loadQuestion();
    } else {
      showPage("message-page");
    }
  } else {
    error.textContent = "Galat_jawaab 😝";
  }
}

// Navigation
function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function goToFinal() {
  showPage("final-page");
}

// Start with login page
showPage("login-page");
