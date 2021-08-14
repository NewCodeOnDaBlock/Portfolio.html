// About Button Slider //

document.querySelector(".btn-1").addEventListener("click",(e) => {

    console.log("about me clicked")
    
    
    document.querySelector(".about-slider").classList.add("active");
    
    });
    
    document.querySelector(".close-btn").addEventListener("click",(e) => {
    
    console.log("close button clicked")
    
    
    document.querySelector(".about-slider").classList.remove("active");
    
    });
    
    // Portfolio  Slider //
    
    document.querySelector(".btn-2").addEventListener("click",(e) => {
    
    console.log("Portfolio btn clicked")
    
    
    document.querySelector(".portfolio-slider").classList.add("active");
    
    });
    
    document.querySelector(".close-btn2").addEventListener("click",(e) => {
    
    console.log("close button clicked")
    
    
    document.querySelector(".portfolio-slider").classList.remove("active");
    
    });
    
    // Portfolio Slider Scroll //
    
    
    
    
    // Message Pop Up //
    
    document.querySelector(".login-btn").addEventListener("click", (e) => {
    
      console.log("message-btn-clicked")
    
    document.querySelector(".form-container").classList.add("active");
    
    });
    
    
    // Message Pop up close //
    
    document.querySelector(".form-close").addEventListener("click", (e) => {
    
    console.log ("pop-up-closed-btn-clicked")
    
    document.querySelector(".form-container").classList.remove("active")
    
    });