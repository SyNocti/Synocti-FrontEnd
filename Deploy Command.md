### Setup

1. Install the gh-pages package:
```bash
npm install --save-dev angular-cli-ghpages
```

2. Build the project for production:
```bash
ng build --configuration production --base-href=/
```

3. Deploy to GitHub Pages:
```bash
npx angular-cli-ghpages --dir=dist/synocti-frontend/browser
```

The site is configured to use the custom domain synocti.ca via the public/CNAME file.