# Tabernacle of Grace Fellowship Website

A modern, responsive church website built with Next.js, TypeScript, and TailwindCSS. The website features a clean design with parallax effects, smooth scrolling, and interactive elements.

## Features

- 🏠 Modern, responsive home page with parallax effects
- 📅 Events calendar and management
- 💰 Secure donations through PayFast integration
- 🙏 Prayer request submission
- 📱 Mobile-first design
- 🌓 Dark mode support
- 🎨 Glassmorphism effects
- 🔍 SEO optimized
- ⚡ Fast page loads with Next.js

## Tech Stack

- Next.js 14
- TypeScript
- TailwindCSS
- Framer Motion
- PayFast Integration

## Prerequisites

- Node.js 18.17 or later
- npm or yarn
- PayFast merchant account
- Google Maps API key (optional)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/tgf.git
   cd tgf
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:
   ```env
   # PayFast Configuration
   NEXT_PUBLIC_PAYFAST_MERCHANT_ID=your-merchant-id
   NEXT_PUBLIC_PAYFAST_MERCHANT_KEY=your-merchant-key
   PAYFAST_PASSPHRASE=your-passphrase

   # Site Configuration
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   NODE_ENV=development

   # Google Maps API Key (if needed)
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
tgf/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── events/            # Events page
│   ├── give/              # Donations page
│   ├── thank-you/         # Thank you page
│   └── api/               # API routes
├── components/            # React components
├── config/               # Configuration files
├── public/               # Static assets
└── styles/               # Global styles
```

## PayFast Integration

The website uses PayFast for processing donations and tithes. To set up PayFast:

1. Create a PayFast business account at [payfast.co.za](https://www.payfast.co.za)
2. Get your Merchant ID and Merchant Key from your PayFast dashboard
3. Set up a passphrase in your PayFast settings
4. Add these credentials to your `.env.local` file
5. Update the return and cancel URLs in the PayFast configuration

## Customization

### Styling

The website uses TailwindCSS for styling. You can customize the theme by editing the `tailwind.config.js` file.

### Content

Update the content in the following files:
- `app/page.tsx` - Home page content
- `app/about/page.tsx` - About page content
- `app/events/page.tsx` - Events page content
- Components in the `components/` directory

### Images

Replace the images in the `public/` directory with your own images. Make sure to maintain the same file names or update the references in the code.

## Deployment

1. Build the project:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. Deploy to your hosting platform of choice. We recommend Vercel for the best Next.js deployment experience.

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please contact [elithegreat018@gmail.com](mailto:your-email@example.com)
