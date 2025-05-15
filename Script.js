```
// Get the image element
const image = document.getElementById('image');

// Create a canvas element
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

// Set the canvas dimensions to match the image
canvas.width = image.width;
canvas.height = image.height;

// Draw the image on the canvas
image.onload = function() {
    ctx.drawImage(image, 0, 0);

    // Get the pixel data from the canvas
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

    // Detect colors
    const colors = detectColors(pixels);

    // Display the colors
    displayColors(colors);
};

// Function to detect colors
function detectColors(pixels) {
    const colors = {};

    // Loop through each pixel
    for (let i = 0; i < pixels.length; i += 4) {
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];

        // Convert RGB to HEX
        const hexColor = rgbToHex(r, g, b);

        // Add the color to the colors object
        if (!colors[hexColor]) {
            colors[hexColor] = 1;
        } else {
            colors[hexColor]++;
        }
    }

    return colors;
}

// Function to convert RGB to HEX
function rgbToHex(r, g, b) {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

// Function to display colors
function displayColors(colors) {
    const colorPalette = document.getElementById('color-palette');

    // Loop through each color
    for (const color in colors) {
        const colorSwatch = document.createElement('div');
        colorSwatch.classList.add('color-swatch');
        colorSwatch.style.backgroundColor = color;

        const colorInfo = document.createElement('div');
        colorInfo.classList.add('color-info');
        colorInfo.textContent = `${color} (${colors[color]} pixels)`;

        
```
