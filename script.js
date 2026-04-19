document.addEventListener("DOMContentLoaded", function () {
  const colors = [
    "#f8b4d6", // Hot Pink
    "#ace5ae", //Green
    "#f5d2af", // Orange (Healing)
    "#516c51", // Green (Nature)
    "#d295d2", // Lila
    "#84b2ac",
    "#8fa1b8",
    "#87CEEB", // Light Blue (for Transgender individuals)
    "#5BCEFA", // Light Blue (traditional color for baby boys)
    "#F5A9B8", // Light Pink (traditional color for baby girls)
    "#00BFFF", // Turquoise (Magic/Art)
    "#0000FF", // Indigo/Blue (Serenity)
    "#cba7e8",  // Violet (Spirit)
    "#000000"  // Black (for People of Color & those lost to AIDS)
];
    
    // Pick a random color from the array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Apply the random color to the body background
    document.body.style.backgroundColor = randomColor;
  });