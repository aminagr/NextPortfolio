# Next.js Portfolio Starter Template

A fully responsive, SEO-optimized, multilingual, and ready-to-use portfolio template built with Next.js, React, Tailwind CSS, and CSS modules. This template includes all the essentials for a beautiful and functional portfolio, ready for easy customization.

## Features

- 🌐 **Multilingual Support**: Powered by `next-intl`, the template supports English and French. Easily extend to any language by adding a JSON file in the `messages` folder (e.g., `es.json`, `it.json`).
- 💌 **Contact Form**: Integrated with EmailJS for handling form submissions. 
- 📱 **Fully Responsive**: Designed with mobile-first principles for a seamless experience across devices.
- 🧩 **Reusable Components**: Modular structure with essential sections: Hero, Services, Projects, Contact, and About.
- ⚙️ **App Router & SEO**: Utilizes Next.js App Router for efficient page routing and metadata generation, with robust SEO settings.
- 🎨 **Tailwind CSS & CSS Modules**: Styled with Tailwind for rapid design and CSS modules for custom styles.

## 📸 Screenshots
![image](https://github.com/user-attachments/assets/7f7ebf94-6723-4c35-9ac2-d57b7f7d9b7d)
![image](https://github.com/user-attachments/assets/cc33d263-cc35-4cf3-a020-be213c899c66)
![image](https://github.com/user-attachments/assets/dc32d97c-aa2f-4a46-9537-d931e4b51d54)
![image](https://github.com/user-attachments/assets/28725a07-f45f-4672-91d9-4f16cefb8c30)
![image](https://github.com/user-attachments/assets/03812390-64d3-4775-8e8a-c77c0343f281)


## Getting Started

**1. Clone the Repository** 
 ```bash
git clone https://github.com/aminagr/NextPortfolio.git
cd NextPortfolio
```
**2. Install Dependencies**
 ```bash
npm install
```
**3. Configure Environment Variables**

If you wish to enable the contact form via EmailJS, Sign up at [EmailJS](https://www.emailjs.com/) to obtain your keys, uncomment the code in the ContactForm component and add the following environment variables in .env.local

 ```bash
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
```

**4. Change the content**

Update the language files (`en.json`, `fr.json`) in the `public/messages` folder for supported translations and you can extend to new languages by adding JSON files in `public/messages`and update `next-intl` to recognize them.

**5. Run the Development Server**
```bash 
npm run dev
 ```

Your application will be live at http://localhost:3000

# 🤝 Contributing

Contributions are welcome! Open an issue or submit a pull request to share your suggestions and improvements.
# 📜 License 


This project is licensed under the [GNU General Public License (GPL)](https://www.gnu.org/licenses/gpl-3.0.html). You can freely use, modify, and distribute this software, but any derivative works must also be licensed under the GPL. For more details, please refer to the [LICENSE](LICENSE) file in the repository.
