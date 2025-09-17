# 🎯 Cyberpunk Nutrition Calculator

A modern, dark-themed nutrition calculator with cyberpunk aesthetics that allows users to calculate calories, protein, carbs, and fats based on selected food categories and uploaded food images.

## ✨ Features

- **Cyberpunk Dark Theme** - Neon colors, glowing effects, and futuristic UI
- **Food Categories** - Vegan, Vegetarian, Non-Vegetarian
- **Image Upload** - Drag & drop or click to upload food images for nutrition detection
- **Real-time Calculations** - Instant nutrition totals as you add foods
- **Search Functionality** - Find foods quickly with search
- **Responsive Design** - Works on desktop and mobile
- **Light/Dark Mode Toggle** - Switch between themes

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project:**
   ```bash
   cd cyberpunk-nutrition
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173`

## 🎨 Usage

### Basic Usage
1. **Select a Category** - Choose from Vegan, Vegetarian, or Non-Vegetarian
2. **Search Foods** - Use the search bar to find specific foods
3. **Add Foods** - Set quantity in grams and click "Add"
4. **View Totals** - See real-time nutrition totals in the right panel

### Image Upload Feature
1. **Upload Image** - Drag & drop or click to upload a food image
2. **AI Analysis** - The app will analyze the image and detect nutrition info
3. **Add Detected Food** - The detected food will appear in your food list
4. **Adjust Quantities** - Modify the detected nutrition values as needed

### Managing Your Selection
- **Edit Quantities** - Change grams directly in the totals panel
- **Remove Items** - Click "Remove" to delete items from your selection
- **Real-time Updates** - Totals update automatically as you make changes

## 🛠️ Technology Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **CSS3** - Custom cyberpunk styling with CSS variables
- **JavaScript ES6+** - Modern JavaScript features

## 🎯 API Integration

The app includes mock API integration for food detection. To use real APIs:

1. **Edamam API** - Replace the mock functions in `src/data/foods.js`
2. **Image Recognition** - Integrate with services like Google Vision API or Clarifai
3. **Nutrition Database** - Connect to USDA or similar nutrition databases

### Example API Integration

```javascript
// In src/data/foods.js
export async function searchFoodByImage(imageFile) {
  const formData = new FormData();
  formData.append('image', imageFile);
  
  const response = await fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`
    },
    body: formData
  });
  
  return await response.json();
}
```

## 🎨 Customization

### Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --color-magenta: #ff00ff;
  --color-cyan: #00ffff;
  --color-yellow: #ffd700;
  --color-purple: #2e003e;
}
```

### Adding New Foods
Add foods to `src/data/foods.js`:
```javascript
export const FOODS = {
  vegan: [
    {
      id: 'new-food',
      name: 'New Food',
      calories: 100,
      protein: 5.0,
      carbs: 15.0,
      fat: 3.0,
      image: 'https://example.com/image.jpg'
    }
  ]
};
```

## 📱 Responsive Design

The app is fully responsive and works on:
- Desktop (1200px+)
- Tablet (760px - 1200px)
- Mobile (< 760px)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag the `dist` folder to Netlify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 Future Enhancements

- [ ] Real API integration (Edamam, USDA)
- [ ] Barcode scanning
- [ ] Meal planning
- [ ] Nutrition goals and tracking
- [ ] Export to PDF/CSV
- [ ] Social sharing
- [ ] Offline support
- [ ] Multi-language support

---

**Built with ❤️ and neon lights**
