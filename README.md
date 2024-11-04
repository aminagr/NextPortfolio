# Next.js Portfolio Starter Template

A fully responsive, SEO-optimized, multilingual, and ready-to-use portfolio template built with Next.js, React, Tailwind CSS, and CSS modules. This template includes all the essentials for a beautiful and functional portfolio, ready for easy customization.

## Features

- 🌐 **Multilingual Support**: Powered by `next-intl`, the template supports English and French out of the box. Easily extend to any language by adding a JSON file in the `locales` folder (e.g., `en.json`, `fr.json`).
- 💌 **Contact Form**: Integrated with EmailJS for handling form submissions. To enable, simply uncomment the code and add your EmailJS credentials.
- 📱 **Fully Responsive**: Designed with mobile-first principles for a seamless experience across devices.
- 🧩 **Reusable Components**: Modular structure with essential sections: Hero, Services, Projects, Contact, and About.
- ⚙️ **App Router & SEO**: Utilizes Next.js App Router for efficient page routing and metadata generation, with robust SEO settings.
- 🎨 **Tailwind CSS & CSS Modules**: Styled with Tailwind for rapid design and CSS modules for custom styles.

## Getting Started

**1. Clone the Repository** 
git clone https://github.com/yourusername/nextjs-portfolio-template.git
cd nextjs-portfolio-template

**2. Install Dependencies**
`npm install`
**3. Configure Environment Variables**
If you wish to enable the contact form via EmailJS, Sign up at [EmailJS](https://www.emailjs.com/) to obtain your keys, Uncomment the code in the Contact component and add the following environment variables in .env.local

NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id


**4. Change the content**
Update the language files (`en.json`, `fr.json`) in the `messages` folder for supported translations. and you can extend to new languages by adding JSON files in `public/messages`and update `next-intl` to recognize them.

**5. Run the Development Server**
`npm run dev`

Your application will be live at http://localhost:3000.