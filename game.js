document.addEventListener("DOMContentLoaded", () => {
  let selected = null; // Track the selected token

  // Add click listeners to all tokens
  const tokens = document.querySelectorAll(".token");
  tokens.forEach((token) => {
    // On click, update the selected token
    token.addEventListener("click", () => {
      // Remove 'selected' class from all tokens
      tokens.forEach((t) => t.classList.remove("selected"));

      // Add 'selected' class to the clicked token
      token.classList.add("selected");

      // Update the `selected` variable
      selected = token.getAttribute("data-token");
      console.log(`Selected token: ${selected}`);
    });
  });
});
