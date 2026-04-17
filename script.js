document.addEventListener("DOMContentLoaded", function () {
  const colors = [
    "#FF69B4", // Hot Pink
    "#9BE69F", //Green
    "#FF7F00", // Orange (Healing)
    "#00CC00", // Green (Nature)
    "#FF00FE", // Lila
    "#4bbaab",
    "#5383c0",
    "#87CEEB", // Light Blue (for Transgender individuals)
    "#5BCEFA", // Light Blue (traditional color for baby boys)
    "#F5A9B8", // Light Pink (traditional color for baby girls)
    "#00BFFF", // Turquoise (Magic/Art)
    "#0000FF", // Indigo/Blue (Serenity)
    "#8B00FF",  // Violet (Spirit)
    "#000000"  // Black (for People of Color & those lost to AIDS)
];
    
    // Pick a random color from the array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Apply the random color to the body background
    document.body.style.backgroundColor = randomColor;
  });