# Next.js Portfolio Starter Template

A fully responsive, SEO-optimized, multilingual, and ready-to-use portfolio template built with Next.js, React, Tailwind CSS, and CSS modules. This template includes all the essentials for a beautiful and functional portfolio, ready for easy customization.

## Features

- 🌐 **Multilingual Support**: Powered by `next-intl`, the template supports English and French. Easily extend to any language by adding a JSON file in the `messages` folder (e.g., `es.json`, `it.json`).
- 💌 **Contact Form**: Integrated with EmailJS for handling form submissions. 
- 📱 **Fully Responsive**: Designed with mobile-first principles for a seamless experience across devices.
- 🧩 **Reusable Components**: Modular structure with essential sections: Hero, Services, Projects, Contact, and About.
- ⚙️ **App Router & SEO**: Utilizes Next.js App Router for efficient page routing and metadata generation, with robust SEO settings.
- 🎨 **Tailwind CSS & CSS Modules**: Styled with Tailwind for rapid design and CSS modules for custom styles.

## Getting Started

**1. Clone the Repository** 
 ```bash
git clone https://github.com/yourusername/nextjs-portfolio-template.git
cd nextjs-portfolio-template
```
**2. Install Dependencies**
`npm install`
**3. Configure Environment Variables**

- If you wish to enable the contact form via EmailJS, Sign up at [EmailJS](https://www.emailjs.com/) to obtain your keys, uncomment the code in the ContactForm component and add the following environment variables in .env.local

 ```bash
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
```

**4. Change the content**

Update the language files (`en.json`, `fr.json`) in the `public/messages` folder for supported translations and you can extend to new languages by adding JSON files in `public/messages`and update `next-intl` to recognize them.

**5. Run the Development Server**
`npm run dev`

Your application will be live at http://localhost:3000

# 🤝 Contributing

Contributions are welcome! Open an issue or submit a pull request to share your suggestions and improvements.
# 📜 License 


This project is licensed under the [GNU General Public License (GPL)](https://www.gnu.org/licenses/gpl-3.0.html). You can freely use, modify, and distribute this software, but any derivative works must also be licensed under the GPL. For more details, please refer to the [LICENSE](LICENSE) file in the repository.
