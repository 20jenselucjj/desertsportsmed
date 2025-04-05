# Setting Up EmailJS for Form Submissions

This document explains how to set up EmailJS to handle form submissions from your Desert Sports Med website.

## What is EmailJS?

EmailJS is a service that allows you to send emails directly from client-side JavaScript code without needing a server. It's perfect for handling form submissions on static websites.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. The free tier allows you to send 200 emails per month, which should be sufficient for most small businesses

## Step 2: Create an Email Service

1. After signing in, go to the "Email Services" tab
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. Give your service a name (e.g., "Desert Sports Med Forms")
6. Note down the Service ID for later use

## Step 3: Create Email Templates

### Pricing Request Template

1. Go to the "Email Templates" tab
2. Click "Create New Template"
3. Name it "Pricing Request"
4. Design your email template. Here's a suggested format:

```
Subject: New Pricing Request from {{firstName}} {{lastName}}

You have received a new pricing request from the Desert Sports Med website.

Customer Information:
Name: {{firstName}} {{lastName}}
Phone: {{phone}}
Email: {{email}}
Interested in: {{interest}}

Please contact this customer with pricing information as soon as possible.

This email was sent automatically from your website's contact form.
```

5. Save the template and note down the Template ID

### Free Intro Request Template

1. Click "Create New Template" again
2. Name it "Free Intro Request"
3. Design your email template. Here's a suggested format:

```
Subject: New Free Intro Request from {{firstName}} {{lastName}}

You have received a new free intro session request from the Desert Sports Med website.

Customer Information:
Name: {{firstName}} {{lastName}}
Phone: {{phone}}
Email: {{email}}
Interested in: {{interest}}
Goals: {{goals}}

Please contact this customer to schedule their free intro session as soon as possible.

This email was sent automatically from your website's contact form.
```

4. Save the template and note down the Template ID

## Step 4: Update Your Code

1. Open the file `src/utils/emailService.ts`
2. Replace the placeholder values with your actual EmailJS credentials:
   - Replace `YOUR_USER_ID` with your EmailJS User ID (found in Account > API Keys)
   - Replace `YOUR_SERVICE_ID` with the Service ID you noted down
   - Replace `YOUR_PRICING_TEMPLATE_ID` with the Pricing Request Template ID
   - Replace `YOUR_FREE_INTRO_TEMPLATE_ID` with the Free Intro Request Template ID

## Step 5: Initialize EmailJS

1. Open the file `src/main.tsx`
2. Add the following import at the top:
   ```typescript
   import initEmailJS from './utils/emailService';
   ```
3. Add the following line before the `createRoot` call:
   ```typescript
   initEmailJS();
   ```

## Testing Your Setup

1. After completing the setup, test your forms by submitting test data
2. Check your email to ensure you receive the form submissions
3. Check the browser console for any errors if submissions aren't working

## Troubleshooting

- If emails aren't being sent, check the browser console for error messages
- Verify that your EmailJS account is active and that you haven't exceeded the free tier limits
- Double-check that all IDs (User ID, Service ID, Template IDs) are correctly entered in your code

## Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS API Reference](https://www.emailjs.com/docs/api/)
