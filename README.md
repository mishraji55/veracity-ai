# Veracity AI - AI-Powered Misinformation Detection Platform

A modern, responsive multi-page website for Veracity AI, an innovative hackathon project designed to detect misinformation and help users verify the credibility of online content.

## 🔗 Live Demo
[Click Here to View the Demo](https://mishraji55.github.io/veracity-ai/)

## 🎯 Project Overview

Veracity AI is a hackathon project created to combat the spread of misinformation in India and beyond. The platform provides instant, AI-powered analysis of news articles, headlines, and social media posts to help users identify potentially fake or misleading information.

### Key Features

- **Multi-page Architecture**: Fully responsive website with 6 main sections
- **Interactive Verification Tool**: Real-time demo of credibility analysis
- **Educational Content**: Learn about different types of misinformation
- **Modern Design**: Clean, professional UI suitable for hackathon judges
- **Smooth Animations**: Elegant fade-in, hover, and scroll effects
- **Mobile Optimized**: Works perfectly on all devices
- **No Dependencies**: Pure HTML, CSS, JavaScript + Tailwind CSS CDN

## 📁 File Structure

```
veracity-ai/
├── index.html              # Home page with hero section and features
├── verify.html             # Interactive news verification tool
├── how-it-works.html       # 3-step process explanation
├── learn.html              # Educational content on misinformation types
├── about.html              # Project information and mission
├── contact.html            # Contact form and FAQ
├── style.css               # Custom animations and styles
├── script.js               # Shared JavaScript functionality
└── README.md               # This file
```
## 📄 Page Descriptions

### 1. **Home Page** (`index.html`)
- Hero section with main value proposition
- Problem statement about misinformation
- 3 feature cards showcasing core capabilities
- Call-to-action button linking to verification tool
- Professional footer with navigation links

### 2. **Verify News** (`verify.html`)
- Text input area for content to analyze
- Interactive analysis demonstration
- Real-time credibility score calculation
- Detailed breakdown of analysis factors
- Risk level indicator
- Sample headlines for quick testing

**Features:**
- Mock AI analysis with realistic data
- Animated score animations
- Multiple analysis dimensions (source, language, accuracy)
- Warning system for detected misinformation tactics

### 3. **How It Works** (`how-it-works.html`)
- 3-step visual explanation of the process:
  1. Input News
  2. AI Analysis
  3. Credibility Report
- Detailed breakdown of analysis methods
- Source analysis capabilities
- Language and tone detection
- Factual accuracy checking
- Pattern recognition features
- Credibility score matrix

### 4. **Learn About Misinformation** (`learn.html`)
- Educational content on different misinformation types:
  - **Fake News**: Completely fabricated stories
  - **Deepfakes**: AI-generated synthetic media
  - **Manipulated Statistics**: Misleading data presentation
  - **Emotional Manipulation**: Triggers and bias tactics
- Detection tips for each type
- Common characteristics of misinformation
- How to spot false information

### 5. **About Project** (`about.html`)
- Problem statement: Misinformation in India
- Impact statistics and challenges
- Project mission and goals
- Hackathon details and tech stack
- Future vision
- Reasoning behind the creation

### 6. **Contact** (`contact.html`)
- Contact information cards
- Functional contact form
  - Name, Email, Subject, Message fields
  - Form validation
  - Success message display
- Frequently Asked Questions (FAQ) section
- Expandable FAQ items with smooth animations

## 🎨 Design Features

### Color Scheme
- **Primary**: Dark Blue (#0f172a - Slate-950)
- **Secondary**: Cyan (#06b6d4)
- **Accent**: Blue (#0ea5e9)
- **Text**: White (#ffffff) and Gray (#e2e8f0)

### Animations
- **Fade-in**: Smooth opacity transitions on page load
- **Hover Effects**: Lift effect on cards and buttons
- **Scroll Animations**: Elements animate as they come into view
- **Smooth Transitions**: All interactive elements have smooth color/transform changes
- **Ripple Effect**: Button click feedback
- **Counter Animation**: Animated number increases

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px (md) for tablet/desktop
- Hamburger menu for mobile navigation
- Touch-friendly button sizes
- Readable typography on all sizes

## 🔧 Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Advanced styling with Tailwind CSS
- **JavaScript**: Vanilla JS for interactivity (no frameworks)
- **Tailwind CSS**: Utility-first CSS framework via CDN
- **Font Awesome**: Icons via CDN

### CDN Resources
```html
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Font Awesome Icons -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
```

## ✨ Key Features

### Interactive Elements
- **Mobile Menu**: Hamburger menu with smooth animations
- **Contact Form**: Client-side validation and success feedback
- **Analysis Tool**: Mock AI with animated score updates
- **FAQ Accordion**: Expandable answers with smooth transitions
- **Sample Headlines**: Quick-test buttons for demonstrations

### User Experience
- Smooth page transitions
- Persistent navigation bar with active link highlighting
- Back-to-top button (generated via JavaScript)
- Form validation with visual feedback
- Keyboard shortcuts (expandable)
- Accessibility features (focus states, alt text)

## 📱 Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Hackathon Highlights

### What Makes This Suitable for Judges:
1. **Complete Solution**: Fully functional, multi-page website
2. **Professional Design**: Production-ready UI/UX
3. **Fast Loading**: No heavy frameworks, optimized performance
4. **Responsive**: Works on all devices
5. **Interactive Demo**: Realistic mock analysis engine
6. **Educational Value**: Teaches about misinformation
7. **Clean Code**: Well-organized, commented structure
8. **Real Problem Solving**: Addresses actual misinformation crisis

### Technical Excellence:
- Vanilla JavaScript (no dependencies)
- Semantic HTML5
- CSS animations and transitions
- Proper form handling
- LocalStorage integration ready
- Accessibility considerations

## 🚀 Future Enhancements

Potential features for full production:
- Backend API integration with real ML models
- Multi-language support (Hindi, Tamil, Telugu, etc.)
- User authentication and accounts
- Save analysis history
- Share results on social media
- Mobile app version
- Real-time misinformation tracking dashboard
- Integration with social media platforms

## 📝 Usage Notes

### Testing the Verification Tool
The `verify.html` page includes mock analysis. When you click "Analyze Content":
- Random credibility scores are generated (for demo)
- Results include detailed breakdown
- Three different analysis profiles are available
- Sample headlines are provided for testing

### Customization
To customize the content:
1. Update text in respective HTML files
2. Modify colors in HTML class attributes
3. Edit animations in `style.css`
4. Add custom JavaScript in `script.js`

### Adding New Pages
1. Create new `page-name.html`
2. Copy the navigation header from existing pages
3. Add page-specific content
4. Update all navigation menus to include new page
5. Add footer section

## 🤝 Contributing

To extend this project:
1. Keep file structure organized
2. Follow the naming conventions (kebab-case for HTML files)
3. Use Tailwind utility classes for styling
4. Add animations to `style.css`
5. Keep JavaScript modular and commented

## 📜 License

This hackathon project is created for educational and demonstration purposes.

## 🎉 Credits

Created as a hackathon submission to combat misinformation and promote digital literacy in India.

---

**Made with ❤️ for a more informed world**

**Last Updated**: March 2026
