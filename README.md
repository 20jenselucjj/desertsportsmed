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

## Setup Instructions

### Prerequisites

- Node.js 18+ and npm
- GitHub account

### Installation

```bash
# Clone the repository
git clone https://github.com/20jenselucjj/desertsportsmed.git
cd desertsportsmed

# Install dependencies
npm install

# Start development server
npm run dev
```

## GitHub Pages Setup

This project is configured to deploy to GitHub Pages using GitHub Actions.

### Setting Up GitHub Pages

1. Go to your GitHub repository settings
2. Navigate to the "Pages" section
3. Under "Build and deployment", select "GitHub Actions" as the source
4. The site will be available at `https://20jenselucjj.github.io/desertsportsmed/`

### Automatic Deployment with GitHub Actions

This repository includes a GitHub Actions workflow that automatically builds and deploys the site to GitHub Pages when you push to the main branch.

1. Push your changes to the main branch
2. GitHub Actions will automatically build and deploy your site
3. Your site will be available at `https://20jenselucjj.github.io/desertsportsmed/`

## EmailJS Setup

To enable the contact forms, you need to set up EmailJS:

1. Sign up for an account at [EmailJS](https://www.emailjs.com/)
2. Create a service and templates for pricing requests, free intro requests, and chatbot inquiries
3. Update the EmailJS configuration in `src/utils/emailService.ts` with your service IDs and template IDs:
   - Replace `YOUR_USER_ID` with your EmailJS User ID (found in Account > API Keys)
   - Replace `YOUR_SERVICE_ID` with the Service ID you created
   - Replace `YOUR_PRICING_TEMPLATE_ID` with the Pricing Request Template ID
   - Replace `YOUR_FREE_INTRO_TEMPLATE_ID` with the Free Intro Request Template ID
   - Replace `YOUR_CHATBOT_TEMPLATE_ID` with the Chatbot Inquiry Template ID

Refer to the `EMAIL_SETUP.md` file for detailed instructions on setting up EmailJS.

## Development Workflow

1. Make changes to the code
2. Test locally using `npm run dev`
3. Commit and push changes to GitHub
4. GitHub Actions will automatically deploy the site to GitHub Pages

## License

MIT
