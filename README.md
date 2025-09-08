# Function Eleven 🚀

This is your troubleshooting blog and project showcase with Tailwind.

## Run locally
```bash
npm install
npm start
```

## Build for production
```bash
npm run build
```
A troubleshooting & tutorial hub for modern tech products like Dynamics 365, Power Pages, Power Automate, Azure DevOps, Azure Cloud, AWS Cloud, and more.
The site also showcases implementation projects and integrates YouTube tutorials.

Built with:

⚛️ React (CRA)

🎨 Tailwind CSS

🧩 Custom UI components (Card, Input, Select)

☁️ Deployed on Netlify via GitHub Actions

📦 Getting Started (Local Development)

Clone the repository

git clone https://github.com/<your-username>/function-eleven.git
cd function-eleven


Install dependencies

npm install


Start the dev server

npm start


👉 App will run on http://localhost:3000

🚀 Deployment (Netlify + GitHub Actions)

This project auto-deploys to Netlify whenever you push to main.

Setup Steps

Create a Netlify site

Sign up at Netlify

Add a new site → choose GitHub repo

Get credentials

Copy Site ID (from Site Settings → Site Information)

Create a Personal Access Token (from User Settings → Applications)

Add GitHub Secrets

In your repo → Settings → Secrets → Actions → New Repository Secret

Add:

NETLIFY_SITE_ID = your site ID

NETLIFY_AUTH_TOKEN = your personal access token

Workflow file
Already included at:

.github/workflows/deploy.yml


Push to main

git add .
git commit -m "Deploying Function Eleven"
git push origin main


✅ GitHub Actions will build and auto-deploy to Netlify.

📂 Project Structure
function-eleven/
├── public/                 # Static assets
├── src/
│   ├── components/ui/      # Custom UI components (Card, Input, Select)
│   ├── App.js              # Main app component
│   ├── index.js            # Entry point
│   └── index.css           # Tailwind base styles
├── .github/workflows/      # GitHub Actions (Netlify deploy)
├── package.json
├── tailwind.config.js
└── README.md

✨ Features

📚 Troubleshooting Guides for multiple tech stacks

🎥 YouTube video embedding

🛠️ Implementation project showcase

🎨 Modern, responsive UI with Tailwind CSS

☁️ Continuous Deployment via Netlify

🔮 Future Ideas

Authentication for gated content

Blog post CMS integration (e.g., Sanity, Strapi)

Dark mode toggle

Search & filter for troubleshooting articles

👨‍💻 Author

Function Eleven – by [Faisal Aziz]
