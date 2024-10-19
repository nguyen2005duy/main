function addListener() {
    var btn = document.querySelector('#Heart_2_');
    btn.addEventListener("click", restart, false);  
  }
  
  function restart() {
    var container = document.querySelector('#Layer_1');
    var newContainer = container.cloneNode(true);
    container.parentNode.replaceChild(newContainer, container);
    addListener();
  }
  
  addListener();
  
  <script>
  document.getElementById("heart-link").addEventListener("click", function(event) {
    // Prevent default anchor behavior to trigger animation
    event.preventDefault();
    
    // Replay animation
    const heart = document.getElementById("Heart_2_");
    heart.style.animation = "none"; // Reset animation
    heart.offsetHeight; // Trigger a reflow, allowing the animation to restart
    heart.style.animation = ""; // Reapply animation

    // Redirect after a slight delay to let the animation complete
    setTimeout(() => {
      window.location.href = this.href;
    }, 1800); // Adjust delay to match your animation duration
  });
</script>
