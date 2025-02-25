# Confirm Humanity

A minimalist blog platform with a clean, monospaced aesthetic.

## About

Confirm Humanity is a publishing platform for writing, visual art, internet culture research and more. The site features a clean, terminal-inspired design with PT Mono font and a minimalist black and white color scheme.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Tag-based filtering of posts
- Animated page transitions with terminal-like loading screens
- About page with contact information

## GitHub Pages Deployment

This site is designed to be deployed on GitHub Pages. To deploy:

1. Push this repository to GitHub
2. Go to repository Settings > Pages
3. Select the main branch as the source
4. Click Save

The site will be available at `https://[your-username].github.io/[repository-name]/`

## Content Management

Since this is a static site hosted on GitHub Pages, content is managed through the `posts.json` file. To add or edit posts:

1. Edit the `posts.json` file
2. Commit and push changes to GitHub
3. GitHub Pages will automatically update the site

## Local Development

To run the site locally:

```
python -m http.server
```

Then visit `http://localhost:8000` in your browser.

## License

MIT 