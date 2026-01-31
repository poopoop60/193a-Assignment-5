// Bigger button
function makeBigger() {
  alert("Hello, world!");
  document.getElementById("userText").style.fontSize = "24pt";
}

// Radio buttons
function applyStyle() {
  const textArea = document.getElementById("userText");
  const fancy = document.getElementById("fancy").checked;

  if (fancy) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  }
}

// Moo button
function mooText() {
  let textArea = document.getElementById("userText");
  let text = textArea.value.toUpperCase();

  // If there is no period just uppercase
  if (!text.includes(".")) {
    textArea.value = text;
    return;
  }

  let sentences = text.split(".");

  for (let i = 0; i < sentences.length; i++) {
    let sentence = sentences[i].trim();
    if (sentence === "") continue;

    let words = sentence.split(" ");
    words[words.length - 1] += "-Moo";
    sentences[i] = words.join(" ");
  }

  textArea.value = sentences.join(". ").trim();
}



