document.addEventListener("DOMContentLoaded", () => {
  const roles = ["Web Developer", "Software Developer", "Full-Stack Developer"];
  let roleIndex = 0;
  let charIndex = 0;
  const typingElement = document.getElementById("typing");

  if (!typingElement) return;

  function type() {
    // 🟢 Clear textContent if we just started typing a new word
    if (charIndex === 0) {
      typingElement.textContent = "";
    }

    if (charIndex < roles[roleIndex].length) {
      typingElement.textContent += roles[roleIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 1500);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 50);
    } else {
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(type, 300);
    }
  }

  type();
});
