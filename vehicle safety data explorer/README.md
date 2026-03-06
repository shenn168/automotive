# 🚗 NHTSA Vehicle Safety Data Explorer

A modern, browser-based web application that provides comprehensive vehicle safety information using the National Highway Traffic Safety Administration (NHTSA) public API. This application displays safety ratings, recalls, consumer complaints, and detailed explanations of how NHTSA collects and measures vehicle safety data.

![NHTSA Vehicle Safety Data Explorer](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 📋 Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Data Displayed](#data-displayed)
- [Technology Stack](#technology-stack)
- [Browser Compatibility](#browser-compatibility)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## ✨ Features

### 🎯 Core Functionality

- **Real-time NHTSA Data Integration** - Fetches live data from official government APIs
- **Comprehensive Safety Ratings** - Displays NCAP 5-star safety ratings with detailed breakdowns
- **Safety Recalls Database** - Shows all manufacturer recalls with campaign numbers and remedies
- **Consumer Complaints** - Displays user-submitted complaints organized by component
- **Statistical Dashboard** - Quick overview of safety metrics and issue counts
- **Educational Information** - Detailed explanations of how NHTSA collects and measures data

### 🎨 Modern Design

- **Car-Themed Styling** - Sleek gradient backgrounds inspired by automotive design
- **Responsive Layout** - Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations** - Professional transitions and hover effects
- **Visual Star Ratings** - Easy-to-understand visual representations
- **Color-Coded Indicators** - Badges and alerts for quick identification of issues

### 🔍 User Experience

- **Default Vehicle Loading** - Pre-loads with Toyota Corolla 2022 data
- **Simple Search Interface** - Easy-to-use form for year, make, and model input
- **Loading States** - Animated spinner during data fetching
- **Error Handling** - User-friendly error messages with troubleshooting guidance
- **Data Grouping** - Organized complaint data by component for easy navigation

## 🎬 Demo

### Default View (2022 Toyota Corolla)
The application loads with pre-populated data for a 2022 Toyota Corolla, demonstrating all features immediately.

### Search Functionality
Simply enter:
- **Year** (1990-2025)
- **Make** (e.g., Toyota, Honda, Ford)
- **Model** (e.g., Corolla, Civic, F-150)

Click **"Search Vehicle Data"** to fetch comprehensive safety information.

## 🚀 Installation

### Option 1: Direct Download

1. Download the HTML file
2. Save it with any name (e.g., `nhtsa-explorer.html`)
3. Double-click to open in your default browser

### Option 2: Clone Repository

```bash
git clone https://github.com/yourusername/nhtsa-vehicle-safety-explorer.git
cd nhtsa-vehicle-safety-explorer