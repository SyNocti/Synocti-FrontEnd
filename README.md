# synocti.ca

### Setup

## Option 1: Using gh-pages package (Recommended)

1. Install the gh-pages package:
```bash
npm install --save-dev gh-pages
```

2. Add deployment script to package.json (already added to this project):
```json
"scripts": {
  "deploy": "ng build --configuration production --base-href=/ && npx gh-pages -d dist/synocti-frontend/browser"
}
```

3. Deploy to GitHub Pages:
```bash
npm run deploy
```

**Note:** The site is configured to use the custom domain synocti.ca via the public/CNAME file.