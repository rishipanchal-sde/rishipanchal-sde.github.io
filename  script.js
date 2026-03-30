const text = "iOS Engineer | Swift | Scalable Systems | AI-Driven Developer";
let i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 40);
  }
}

type();