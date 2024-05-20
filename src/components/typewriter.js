// typewriter.js
export function startTypewriterEffect(words, elementId, typingDelay) {
    let currentIndex = 0;
    let charIndex = 0;
    let typewriterText = '';
    
    function typeWriter() {
      if (charIndex < words[currentIndex].length) {
        document.getElementById(elementId).textContent += words[currentIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, typingDelay);
      } else {
        setTimeout(deleteText, 1000); // Wait for 1 second before deleting
      }
    }
    
    function deleteText() {
        typewriterText = document.getElementById(elementId).textContent; // Update typewriterText with current text content
        if (charIndex > 0) {
          document.getElementById(elementId).textContent = typewriterText.slice(0, -1);
          charIndex--;
          setTimeout(deleteText, 10); // Increase the delay to 200 milliseconds
        } else {
          currentIndex = (currentIndex + 1) % words.length;
          typeWriter(); // Immediately start typing again without any delay
        }
      }
      
      
    
    typeWriter(); // Start the typewriter effect
  }
  