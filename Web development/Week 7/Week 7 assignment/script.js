// ===== PART 2: JAVASCRIPT FUNCTIONS - SCOPE, PARAMETERS & RETURN VALUES =====

// Global variables
const baseColorInput = document.getElementById('baseColor');
const paletteTypeSelect = document.getElementById('paletteType');
const generateBtn = document.getElementById('generateBtn');
const animateAllBtn = document.getElementById('animateAllBtn');
const colorCards = document.querySelectorAll('.color-card');
const toast = document.getElementById('toast');

// Function to convert hex to RGB (demonstrates parameters and return value)
function hexToRgb(hex) {
    // Remove the # if present
    hex = hex.replace('#', '');
    
    // Parse the hex values
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    return { r, g, b };
}

// Function to convert RGB to hex (demonstrates parameters and return value)
function rgbToHex(r, g, b) {
    return '#' + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('');
}

// Function to generate color palette based on base color and type
function generatePalette(baseHex, paletteType) {
    const baseRgb = hexToRgb(baseHex);
    let colors = [];
    
    switch(paletteType) {
        case 'analogous':
            colors = generateAnalogousColors(baseRgb);
            break;
        case 'complementary':
            colors = generateComplementaryColors(baseRgb);
            break;
        case 'triadic':
            colors = generateTriadicColors(baseRgb);
            break;
        case 'monochromatic':
            colors = generateMonochromaticColors(baseRgb);
            break;
        default:
            colors = [baseHex, baseHex, baseHex, baseHex, baseHex];
    }
    
    return colors;
}

// Color generation functions (demonstrate function scope and return values)
function generateAnalogousColors(baseRgb) {
    const colors = [];
    for (let i = -2; i <= 2; i++) {
        const hueShift = i * 30;
        const newColor = adjustHue(baseRgb, hueShift);
        colors.push(rgbToHex(newColor.r, newColor.g, newColor.b));
    }
    return colors;
}

function generateComplementaryColors(baseRgb) {
    const complementary = adjustHue(baseRgb, 180);
    return [
        rgbToHex(baseRgb.r, baseRgb.g, baseRgb.b),
        rgbToHex(complementary.r, complementary.g, complementary.b),
        adjustLightness(baseRgb, 20),
        adjustLightness(baseRgb, -20),
        adjustLightness(complementary, 20)
    ];
}

function generateTriadicColors(baseRgb) {
    const triadic1 = adjustHue(baseRgb, 120);
    const triadic2 = adjustHue(baseRgb, 240);
    return [
        rgbToHex(baseRgb.r, baseRgb.g, baseRgb.b),
        rgbToHex(triadic1.r, triadic1.g, triadic1.b),
        rgbToHex(triadic2.r, triadic2.g, triadic2.b),
        adjustLightness(baseRgb, 30),
        adjustLightness(triadic1, -30)
    ];
}

function generateMonochromaticColors(baseRgb) {
    return [
        adjustLightness(baseRgb, 40),
        adjustLightness(baseRgb, 20),
        rgbToHex(baseRgb.r, baseRgb.g, baseRgb.b),
        adjustLightness(baseRgb, -20),
        adjustLightness(baseRgb, -40)
    ];
}

// Helper functions with parameters and return values
function adjustHue(rgb, degrees) {
    // Convert RGB to HSL, adjust hue, then convert back to RGB
    // Simplified implementation for demonstration
    const r = Math.min(255, Math.max(0, rgb.r + degrees / 3));
    const g = Math.min(255, Math.max(0, rgb.g + degrees / 3));
    const b = Math.min(255, Math.max(0, rgb.b + degrees / 3));
    return { r: Math.round(r), g: Math.round(g), b: Math.round(b) };
}

function adjustLightness(rgb, percent) {
    const factor = 1 + (percent / 100);
    const r = Math.min(255, Math.max(0, rgb.r * factor));
    const g = Math.min(255, Math.max(0, rgb.g * factor));
    const b = Math.min(255, Math.max(0, rgb.b * factor));
    return rgbToHex(Math.round(r), Math.round(g), Math.round(b));
}

// ===== PART 3: COMBINING CSS ANIMATIONS WITH JAVASCRIPT =====

// Function to update color display (triggers CSS transitions)
function updateColorDisplay(colors) {
    colorCards.forEach((card, index) => {
        const colorDisplay = card.querySelector('.color-display');
        const colorValue = card.querySelector('.color-value');
        
        // Smooth transition with JavaScript triggering CSS
        colorDisplay.style.transition = 'background-color 0.5s ease';
        colorDisplay.style.backgroundColor = colors[index];
        
        colorValue.textContent = colors[index];
        
        // Update copy button onclick with new color
        const copyBtn = card.querySelector('.copy-btn');
        copyBtn.onclick = () => copyToClipboard(colors[index]);
    });
}

// Function to apply animation to all color cards
function animateAllColors(animationType) {
    colorCards.forEach(card => {
        const colorDisplay = card.querySelector('.color-display');
        
        // Remove any existing animations
        colorDisplay.classList.remove('pulse-animation', 'bounce-animation', 'spin-animation', 'color-shift');
        
        // Add new animation after a slight delay to ensure CSS registers the change
        setTimeout(() => {
            colorDisplay.classList.add(animationType);
        }, 10);
    });
}

// Function to reset all animations
function resetAllAnimations() {
    colorCards.forEach(card => {
        const colorDisplay = card.querySelector('.color-display');
        colorDisplay.classList.remove('pulse-animation', 'bounce-animation', 'spin-animation', 'color-shift');
    });
}

// Function to show toast notification
function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// Function to copy color to clipboard
function copyToClipboard(color) {
    navigator.clipboard.writeText(color).then(() => {
        showToast(`Copied ${color} to clipboard!`);
    }).catch(err => {
        console.error('Failed to copy: ', err);
        showToast('Failed to copy color');
    });
}

// Event listeners
generateBtn.addEventListener('click', () => {
    const baseColor = baseColorInput.value;
    const paletteType = paletteTypeSelect.value;
    
    // Generate new palette using our functions
    const newColors = generatePalette(baseColor, paletteType);
    
    // Update display with smooth transitions
    updateColorDisplay(newColors);
    
    // Add a subtle animation effect on generate
    animateAllColors('pulse-animation');
});

animateAllBtn.addEventListener('click', () => {
    animateAllColors('color-shift');
});

// Add event listeners for animation buttons
document.querySelectorAll('.btn-effect').forEach(button => {
    button.addEventListener('click', (e) => {
        const effect = e.target.dataset.effect;
        
        if (effect === 'reset') {
            resetAllAnimations();
        } else {
            animateAllColors(effect + '-animation');
        }
    });
});

// Initialize with default colors
document.addEventListener('DOMContentLoaded', () => {
    const defaultColors = generatePalette('#3498db', 'analogous');
    updateColorDisplay(defaultColors);
});

// Additional utility function to demonstrate function scope
function calculateColorContrast(hexColor) {
    // Local scope variables
    const rgb = hexToRgb(hexColor);
    const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
    
    // Return value based on calculation
    return luminance > 0.5 ? '#000000' : '#ffffff';
}

// Example of using the contrast function
function updateTextColors() {
    colorCards.forEach(card => {
        const colorValue = card.querySelector('.color-value');
        const backgroundColor = card.querySelector('.color-display').style.backgroundColor;
        
        // This would need additional logic to convert background-color to hex
        // For demonstration purposes, we're showing the function usage concept
    });
}