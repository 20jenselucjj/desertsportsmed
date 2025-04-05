# Desert Sports Med Website

A modern, responsive website for Desert Sports Med, a sports medicine and rehabilitation service provider in St. George, Utah.

## Features

- Responsive design for all device sizes
- Interactive chatbot for customer inquiries
- Detailed program information
- Online booking system
- Contact forms for pricing and free intro sessions

## Technologies Used

- React 19
- TypeScript
- Vite
- React Router
- Tailwind CSS
- EmailJS for form submissions

## Development

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/DesertSportsMed.git
cd DesertSportsMed

# Install dependencies
npm install

# Start development server
npm run dev
```

## Deployment to GitHub Pages

This project is configured to deploy to GitHub Pages using GitHub Actions.

### Manual Deployment

1. Update the base path in `vite.config.ts`:
   ```ts
   // Uncomment and update this line with your repository name
   base: '/DesertSportsMed/',
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy the `dist` folder to GitHub Pages.

### Automatic Deployment with GitHub Actions

This repository includes a GitHub Actions workflow that automatically builds and deploys the site to GitHub Pages when you push to the main branch.

1. Push your changes to the main branch
2. GitHub Actions will automatically build and deploy your site
3. Your site will be available at `https://yourusername.github.io/DesertSportsMed/`

## Configuration

### EmailJS Setup

To enable the contact forms, you need to set up EmailJS:

1. Sign up for an account at [EmailJS](https://www.emailjs.com/)
2. Create a service and templates for pricing requests, free intro requests, and chatbot inquiries
3. Update the EmailJS configuration in `src/utils/emailService.ts` with your service IDs and template IDs

## License

MIT
