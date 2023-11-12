document.addEventListener("DOMContentLoaded", function () {
    const flyingText = document.getElementById("flying-text");
    const animatedGif = document.getElementById("animated-gif");
    const speed = 0.2; // Zwiększ wartość prędkości, aby przyspieszyć ruch (możesz dostosować według potrzeb)
    const countdownDate = new Date("November 16, 2023 22:00:00").getTime();
  
   
    function setRandomPosition() {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      flyingText.style.transform = `translate(${x}px, ${y}px)`;
    }
  
   
    function setRandomBackgroundColor() {
      const randomColor = getRandomColor();
      document.body.style.backgroundColor = randomColor;
    }
  
   
    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  
  
    function animateFlyingText() {
      setRandomPosition();
      setRandomBackgroundColor();
      requestAnimationFrame(animateFlyingText);
    }
  

    animateFlyingText();
  
  
    function slowDownAnimation() {
      flyingText.style.transition = `transform ${speed}s ease-in-out`;
    }
  
    
    slowDownAnimation();
  
  
    function updateCountdown() {
      const now = new Date().getTime();
      const distance = countdownDate - now;
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  
      if (distance < 0) {
        document.getElementById("countdown").innerHTML = "EXPIRED";
      }
    }
  

    setInterval(updateCountdown, 1000);
  });

  // Discord : Kypso_   //