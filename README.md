# Hangul Online - Korean Learning Platform

A modern Korean language learning platform built with React, TypeScript, and Tailwind CSS. This project was generated from a Figma design and implements a comprehensive learning interface with progress tracking, lesson management, and interactive components.

## 🚀 Features

- **Interactive Learning Interface**: Clean, modern UI designed for optimal learning experience
- **Progress Tracking**: Visual progress bars and completion indicators
- **Lesson Management**: Different lesson states (completed, locked, current, skip)
- **Streak Counter**: Gamified learning with streak tracking
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component-Based Architecture**: Reusable React components
- **TypeScript Support**: Full type safety and better development experience

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing and optimization

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Korean
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── LearningPage.tsx  # Main learning interface
│   ├── NavBar.tsx        # Navigation component
│   ├── ProgressSection.tsx # Progress tracking
│   ├── StreakSection.tsx # Streak counter
│   ├── TopicTitle.tsx    # Topic headers
│   ├── KhoaHc.tsx        # Lesson status indicators
│   ├── LessonsCheckbox.tsx # Lesson completion checkboxes
│   ├── Footer.tsx        # Footer component
│   └── index.ts          # Component exports
├── App.tsx              # Main app component
├── App.css              # Global styles
├── main.tsx             # Application entry point
└── index.css            # Tailwind and base styles
```

## 🎨 Design System

The application follows a consistent design system with:

- **Color Palette**:
  - Primary: `#464394` (Purple)
  - Secondary: `#ffaa00` (Orange)
  - Success: `#6ba823` (Green)
  - Warning: `#755700` (Dark Yellow)
  - Neutral: `#1f1f1f` (Dark Gray)

- **Typography**: Nunito font family with multiple weights (400, 700, 800, 900)

- **Components**: Modular, reusable components with consistent styling

## 📱 Components Overview

### LearningPage
The main container component that orchestrates all learning interface elements.

### NavBar
Top navigation with logo, menu items, and language selector.

### ProgressSection
Shows learning progress with animated progress bar and completion statistics.

### StreakSection
Displays current learning streak with fire icon and counter.

### TopicTitle
Sticky topic headers with different color themes (yellow, green, purple).

### KhoaHc
Lesson status indicators with multiple states:
- `Hoàn thành` (Completed) - Green with checkmark
- `Khóa` (Locked) - Gray with lock icon
- `Bài cuối` (Last Lesson) - Orange with exclamation
- `Bỏ qua` (Skip) - Purple with skip icon

### LessonsCheckbox
Lesson completion checkboxes with different states:
- Default (Completed) - Green with checkmark
- Variant2 (Partial) - Gray with checkmark
- Variant3 (Not Started) - White with border
- Variant4 (Skipped) - Gray with X mark

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎯 Key Features Implementation

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Flexible layouts that adapt to different screen sizes
- Touch-friendly interactive elements

### Performance
- Optimized React components with proper key props
- Efficient re-rendering with functional components
- Fast build times with Vite

### Accessibility
- Semantic HTML structure
- Proper ARIA labels and roles
- Keyboard navigation support
- Focus management

## 🔧 Customization

### Adding New Lesson States
To add new lesson states, modify the `KhoaHc` component:

```typescript
interface KhoaHcProps {
  property1?: "Hoàn thành" | "Khóa" | "Đang học" | "Bài cuối" | "Bỏ qua" | "NewState";
}
```

### Styling Modifications
The application uses Tailwind CSS for styling. Modify colors and spacing by updating the Tailwind configuration or component classes.

### Adding New Topics
Add new topics by creating additional `TopicTitle` components with different variants:

```typescript
<TopicTitle 
  topicNumber={4}
  title="Your New Topic"
  variant="purple" // or "yellow", "green"
  sticky={true}
/>
```

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support and questions, please open an issue in the repository.

---

Built with ❤️ for Korean language learners worldwide.