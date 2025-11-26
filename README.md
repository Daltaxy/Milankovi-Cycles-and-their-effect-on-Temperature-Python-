# Milankovitch Cycles and their Effect on Temperature (Python)

This repository contains a web-based visualization tool for displaying temperature data and variations based on Milankovitch cycle parameters.

## Overview

The Milankovitch cycles describe the collective effects of changes in the Earth's movements on its climate over thousands of years. This tool visualizes the temperature effects based on:
- **Latitude (phi)**: Geographic latitude in degrees
- **Eccentricity (exc)**: Orbital eccentricity value
- **Obliquity (obl)**: Axial tilt in degrees
- **Precession (pre)**: Precession angle in degrees
- **Albedo (alb)**: Surface reflectivity (0-1)

## Usage

### 1. Generate Images

Generate your temperature visualization images using your Python script. The images should follow these naming patterns:
- `Temp_lat{phi}_exc{excc}_obl{obll}_pre{precc}_alb{albb}.png` - Temperature data
- `Var_temp_lat{phi}_exc{excc}_obl{obll}_pre{precc}_alb{albb}.png` - Temperature variations

Example filenames:
- `Temp_lat45_exc0.05_obl23.5_pre102_alb0.3.png`
- `Var_temp_lat45_exc0.05_obl23.5_pre102_alb0.3.png`

### 2. View Images in Browser

1. Open `index.html` in a web browser
2. Place your generated PNG files in the same directory as `index.html`
3. Enter the parameter values used to generate your images
4. Click "Load Images" to display both temperature and temperature variation graphs

## Files

- `index.html` - Main webpage interface
- `styles.css` - Styling for the webpage
- `script.js` - JavaScript for dynamic image loading

## Features

- Clean, responsive web interface
- Dynamic image loading based on parameter inputs
- Error handling for missing images
- Mobile-friendly design
- Clear parameter documentation