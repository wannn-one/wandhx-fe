# wandhx-fe - Personal Portfolio Website

My personal portfolio website built with React, TypeScript, and Tailwind CSS. Visit the live site at [wandhx.site](https://wandhx.site).

## 🚀 Features

- **Modern UI/UX**
  - Responsive design for all devices
  - Dark mode support
  - Smooth animations and transitions
  - Space Mono font implementation

- **Interactive Components**
  - Typing animation in Hero section
  - Hover animations for skills
  - Card-style project showcase
  - Functional contact form

- **Technical Implementation**
  - TypeScript for type safety
  - React + Vite for optimal performance
  - Tailwind CSS for styling
  - API integration with backend
  - SEO optimization with react-helmet-async

## 🛠️ Tech Stack

- **Frontend Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v3
- **Form Handling**: Getform.io
- **Deployment**: AWS EC2
- **API**: [wandhx-be](https://github.com/wannn-one/wandhx-be)

## 🏗️ Project Structure

```
src/
├── components/         # React components
├── constants/         # Constants and configuration
├── context/          # React context providers
├── assets/           # Static assets
└── types/           # TypeScript type definitions
```

## 🚦 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/wannn-one/wandhx-fe.git
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_SITE_URL=https://wandhx.site
VITE_API_BASE_URL=<API_BASE_URL>
VITE_GETFORM_URL=<GETFORM_URL>
```

4. Start the development server:
```bash
npm run dev
```

## 📝 Environment Variables

- `VITE_SITE_URL`: Your website's URL
- `VITE_API_BASE_URL`: Your API base URL
- `VITE_GETFORM_URL`: Getform.io form endpoint

## 🎨 Customization

### Styling
The project uses Tailwind CSS for styling. Main theme colors and other configurations can be found in `tailwind.config.js`.

### Content
Update the following files to customize content:
- Hero section text in `Hero.tsx`
- About section content in `About.tsx`
- Skills list in `Skills.tsx`
- Projects data in `Projects.tsx`

## 🌐 SEO

The project includes comprehensive SEO setup:
- Meta tags management with react-helmet-async
- OpenGraph tags for social media sharing
- Twitter card support
- Favicon for all devices/platforms
- Proper canonical URLs

## 📱 PWA Support

The website includes proper PWA setup with:
- Manifest file
- Various icon sizes for different devices
- Theme color configuration
- Apple touch icons

## 🤝 Contributing

Feel free to open issues and pull requests!

## 📄 License

See [LICENSE](LICENSE) for more details.

## 👤 Contact

- Website: [wandhx.site](https://wandhx.site)
- GitHub: [@wannn-one](https://github.com/wannn-one)
- LinkedIn: [Ikhwanul Abiyu Dhiyya'ul Haq](https://www.linkedin.com/in/ikhwanul-abiyu-dhiyya-ul-haq/)
- Instagram: [@wandhx](https://instagram.com/wandhx)
