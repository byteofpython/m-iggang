# Setting Up Your Blog on GitHub Pages

## Initial Setup

1. **Create a GitHub Repository**
   - Go to [GitHub](https://github.com) and sign in
   - Click the "+" icon in the top right and select "New repository"
   - Name your repository (e.g., "my-blog" or use your domain name)
   - Add a description (optional)
   - Choose "Private" for repository visibility
   - Check "Add a README file"
   - Click "Create repository"

2. **Upload Your Files**
   - In your new repository, click "Add file" → "Upload files"
   - Drag and drop all your blog files (HTML, CSS, JS, JSON, etc.)
   - Add a commit message like "Initial upload of blog files"
   - Click "Commit changes"

## Configure GitHub Pages

1. **Enable GitHub Pages**
   - Go to your repository's "Settings" tab
   - Scroll down to the "GitHub Pages" section
   - Under "Source", select "main" branch
   - Click "Save"
   - GitHub will provide you with a URL where your site is published

2. **Configure Custom Domain (Optional)**
   - In the GitHub Pages section, enter your custom domain
   - Create a CNAME record with your domain provider pointing to your GitHub Pages URL
   - Add a file named `CNAME` to your repository with your domain name

## Security Setup

1. **Keep Your Repository Private**
   - Your repository will remain private, but GitHub Pages will still be public
   - This protects your source code and admin credentials while allowing public access to the site

2. **Generate Your Secure Password**
   - Use the `generate-password-hash.html` file locally on your computer
   - Create a strong password and generate its hash
   - Update the hash in your `admin.js` file
   - Commit and push the changes to GitHub

3. **Delete Sensitive Files**
   - Remove `generate-password-hash.html` from your repository
   - You can keep it locally for future password changes

## Workflow for Updates

1. **Content Updates**
   - For major updates, edit files directly in GitHub or clone the repository locally
   - For blog posts, you can use the admin interface on your live site
   - Remember that changes made through the admin interface are temporary unless you update the actual `posts.json` file in your repository

2. **Maintaining Security**
   - Regularly change your admin password by generating a new hash
   - Keep your GitHub account secure with a strong password and 2FA
   - Regularly backup your content

## Troubleshooting

- If your site doesn't appear, check the GitHub Pages section in Settings for any error messages
- It may take a few minutes for changes to propagate after pushing to GitHub
- If you're using a custom domain, make sure your DNS settings are correct

Remember that while your code is protected in the private repository, the published site and its assets (including JavaScript files) are still publicly accessible. The security comes from obscuring the admin access and using strong, hashed passwords. 