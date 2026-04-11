const text = "iOS Engineer • 100K+ Users • Scalable Apps • AI-Driven";
let i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 40);
  }
}

type();
