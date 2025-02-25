document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM Content Loaded");
    
    // Get references to elements
    const loadingOverlay = document.getElementById('loading-overlay');
    const hashLines = document.querySelectorAll('.hash-line');
    const mainContent = document.getElementById('content');
    const postsContainer = document.getElementById('posts-container');
    
    // Initially hide main content and show loading overlay
    if (mainContent) {
        mainContent.style.display = 'none';
    }
    loadingOverlay.classList.remove('hidden');
    
    // Function to show loading animation
    function showLoadingAnimation(targetPage) {
        console.log("Starting loading animation for: " + targetPage);
        
        // Update navigation info text
        document.getElementById('navigation-info').textContent = `Loading müßiggang revisited`;
        
        // Show loading overlay by removing hidden class
        loadingOverlay.classList.remove('hidden');
        
        // Clear hash lines
        hashLines.forEach(line => {
            line.textContent = '';
        });
        
        // Type out hash lines with delay - even faster now
        let delay = 30; // Reduced from 50
        const originalTexts = [
            'contentDigest: 8f7e9b2c4a',
            'pageDataHash: 3d7f6e5a2b',
            'routeId: 9c8b7a6d5e'
        ];
        
        hashLines.forEach((line, index) => {
            setTimeout(() => {
                typeText(line, originalTexts[index], 3); // Faster typing (was 5)
            }, delay);
            delay += 150; // Reduced from 300
        });
        
        return delay + 100; // Reduced from 200 - Return total animation time
    }
    
    // Function to hide loading and show content
    function hideLoadingAndShowContent(targetPageId) {
        console.log("Hiding loading and showing content: " + targetPageId);
        
        // Hide loading overlay by adding hidden class
        loadingOverlay.classList.add('hidden');
        
        // Show main content
        if (mainContent) {
            mainContent.style.display = 'block';
        }
        
        // If a specific page is requested, show only that page
        if (targetPageId) {
            // Hide all pages first
            document.querySelectorAll('main > section, .post-page').forEach(section => {
                section.style.display = 'none';
            });
            
            // Show the requested page
            const targetElement = document.getElementById(targetPageId + '-page');
            if (targetElement) {
                targetElement.style.display = 'block';
                console.log("Showing page: " + targetPageId);
            } else {
                document.getElementById('posts-page').style.display = 'block';
                console.log("Target page not found, showing posts page");
            }
        } else {
            // Default to posts page
            document.getElementById('posts-page').style.display = 'block';
        }
    }
    
    // Type text animation helper
    function typeText(element, text, speed) {
        let i = 0;
        const typing = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
            }
        }, speed);
    }
    
    // Function to load posts from JSON file
    function loadPosts() {
        fetch('posts.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                renderPosts(data.posts);
                setupPostPages(data.posts);
                setupPostLinks();
            })
            .catch(error => {
                console.error('Error loading posts:', error);
                postsContainer.innerHTML = '<p class="error-message">Failed to load posts. Please try again later.</p>';
            });
    }
    
    // Function to render posts in the posts container
    function renderPosts(posts) {
        if (!postsContainer) return;
        
        postsContainer.innerHTML = '';
        
        posts.forEach(post => {
            const postElement = document.createElement('article');
            postElement.className = 'post-entry';
            
            postElement.innerHTML = `
                <h2 class="post-title"><a href="#" class="post-link" data-post="${post.id}">${post.title}</a></h2>
                <div class="post-meta">${post.date} | ${post.author}</div>
                <div class="post-summary">${post.summary}</div>
            `;
            
            postsContainer.appendChild(postElement);
        });
    }
    
    // Function to create post pages
    function setupPostPages(posts) {
        const mainElement = document.querySelector('main');
        
        // Remove any existing post pages
        document.querySelectorAll('.post-page').forEach(page => page.remove());
        
        // Create post pages
        posts.forEach(post => {
            const postPage = document.createElement('section');
            postPage.id = `${post.id}-page`;
            postPage.className = 'post-page';
            postPage.style.display = 'none';
            
            postPage.innerHTML = `
                <div class="post-header">
                    <h1>${post.title}</h1>
                    <div class="post-meta">${post.date} | ${post.author}</div>
                </div>
                <div class="post-content">
                    ${post.content}
                </div>
                <div class="post-footer">
                    <a href="#" class="return-link" data-page="posts">← Back to Posts</a>
                </div>
            `;
            
            mainElement.appendChild(postPage);
        });
    }
    
    // Function to set up post link event listeners
    function setupPostLinks() {
        // Post link navigation
        const postLinks = document.querySelectorAll('.post-link');
        postLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetPost = this.getAttribute('data-post');
                if (!targetPost) return;
                
                console.log("Navigating to post: " + targetPost);
                
                // Show loading animation
                const animationDelay = showLoadingAnimation('post/' + targetPost);
                
                // After animation completes, switch to post content
                setTimeout(() => {
                    hideLoadingAndShowContent(targetPost);
                }, animationDelay);
            });
        });
        
        // Return links (back to posts)
        const returnLinks = document.querySelectorAll('.return-link');
        returnLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetPage = this.getAttribute('data-page');
                if (!targetPage) return;
                
                console.log("Returning to: " + targetPage);
                
                // Show loading animation
                const animationDelay = showLoadingAnimation(targetPage);
                
                // After animation completes, switch page content
                setTimeout(() => {
                    hideLoadingAndShowContent(targetPage);
                }, animationDelay);
            });
        });
    }
    
    // Humanity Verification functionality has been removed
    
    // Load posts from JSON
    loadPosts();
    
    // Initial page load animation
    const initialDelay = showLoadingAnimation('');
    setTimeout(() => {
        hideLoadingAndShowContent('posts');
    }, initialDelay);
    
    // Page navigation with animation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetPage = this.getAttribute('data-page');
            if (!targetPage) return;
            
            console.log("Navigating to: " + targetPage);
            
            // Show loading animation
            const animationDelay = showLoadingAnimation(targetPage);
            
            // After animation completes, switch page content
            setTimeout(() => {
                hideLoadingAndShowContent(targetPage);
            }, animationDelay);
        });
    });
    
    // Newsletter functionality removed
    
    // Filter posts by tag
    window.filterByTag = function(tag) {
        fetch('posts.json')
            .then(response => response.json())
            .then(data => {
                const filteredPosts = tag === 'all' 
                    ? data.posts 
                    : data.posts.filter(post => post.tags.includes(tag));
                
                renderPosts(filteredPosts);
                setupPostLinks();
                
                // Update active tag
                document.querySelectorAll('.tag-filter').forEach(btn => {
                    btn.classList.remove('active');
                });
                document.querySelector(`.tag-filter[data-tag="${tag}"]`)?.classList.add('active');
            })
            .catch(error => {
                console.error('Error filtering posts:', error);
            });
    };
});