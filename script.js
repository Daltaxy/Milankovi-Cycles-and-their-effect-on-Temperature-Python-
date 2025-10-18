/**
 * Load and display images based on Milankovitch cycle parameters
 */
function loadImages() {
    // Get parameter values from input fields
    const latitude = document.getElementById('latitude').value.trim();
    const eccentricity = document.getElementById('eccentricity').value.trim();
    const obliquity = document.getElementById('obliquity').value.trim();
    const precession = document.getElementById('precession').value.trim();
    const albedo = document.getElementById('albedo').value.trim();

    // Validate that all fields are filled
    if (!latitude || !eccentricity || !obliquity || !precession || !albedo) {
        showError('Please fill in all parameter fields before loading images.');
        return;
    }

    // Clear any existing content
    const container = document.getElementById('imageContainer');
    container.innerHTML = '';

    // Build image filenames based on the pattern
    // Pattern: Temp_lat{phi}_exc{excc}_obl{obll}_pre{precc}_alb{albb}.png
    // Pattern: Var_temp_lat{phi}_exc{excc}_obl{obll}_pre{precc}_alb{albb}.png
    const tempImageName = `Temp_lat${latitude}_exc${eccentricity}_obl${obliquity}_pre${precession}_alb${albedo}.png`;
    const varTempImageName = `Var_temp_lat${latitude}_exc${eccentricity}_obl${obliquity}_pre${precession}_alb${albedo}.png`;

    // Create image elements
    createImageElement(container, tempImageName, 'Temperature', latitude, eccentricity, obliquity, precession, albedo);
    createImageElement(container, varTempImageName, 'Temperature Variations', latitude, eccentricity, obliquity, precession, albedo);
}

/**
 * Create and append an image element to the container
 */
function createImageElement(container, imageName, title, lat, exc, obl, pre, alb) {
    const wrapper = document.createElement('div');
    wrapper.className = 'image-wrapper';

    const heading = document.createElement('h3');
    heading.textContent = title;
    wrapper.appendChild(heading);

    const params = document.createElement('p');
    params.style.fontSize = '0.9rem';
    params.style.color = '#666';
    params.style.marginBottom = '1rem';
    params.innerHTML = `
        <strong>Parameters:</strong><br>
        Latitude: ${lat}° | Eccentricity: ${exc} | Obliquity: ${obl}° | Precession: ${pre}° | Albedo: ${alb}
    `;
    wrapper.appendChild(params);

    const img = document.createElement('img');
    img.src = imageName;
    img.alt = `${title} for given parameters`;
    
    // Handle image load error
    img.onerror = function() {
        wrapper.innerHTML = `
            <h3>${title}</h3>
            <div class="error-message">
                <strong>Image not found:</strong> ${imageName}<br>
                <small>Make sure the image file exists in the same directory as this HTML file.</small>
            </div>
        `;
    };

    // Handle successful image load
    img.onload = function() {
        console.log(`Successfully loaded: ${imageName}`);
    };

    wrapper.appendChild(img);
    container.appendChild(wrapper);
}

/**
 * Clear all loaded images
 */
function clearImages() {
    const container = document.getElementById('imageContainer');
    container.innerHTML = '<p class="instruction">Enter parameters above and click "Load Images" to display the temperature visualizations.</p>';
    
    // Clear input fields
    document.getElementById('latitude').value = '';
    document.getElementById('eccentricity').value = '';
    document.getElementById('obliquity').value = '';
    document.getElementById('precession').value = '';
    document.getElementById('albedo').value = '';
}

/**
 * Show error message
 */
function showError(message) {
    const container = document.getElementById('imageContainer');
    container.innerHTML = `
        <div class="error-message">
            <strong>Error:</strong> ${message}
        </div>
    `;
}

/**
 * Allow loading images by pressing Enter in input fields
 */
document.addEventListener('DOMContentLoaded', function() {
    const inputs = ['latitude', 'eccentricity', 'obliquity', 'precession', 'albedo'];
    inputs.forEach(inputId => {
        const input = document.getElementById(inputId);
        if (input) {
            input.addEventListener('keypress', function(event) {
                if (event.key === 'Enter') {
                    loadImages();
                }
            });
        }
    });
});
