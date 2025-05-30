// Font Awesome Icons
document.addEventListener('DOMContentLoaded', function() {
    // Create Font Awesome style element
    const faStyle = document.createElement('style');
    faStyle.textContent = `
        .fas, .fab {
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            display: inline-block;
            font-style: normal;
            font-variant: normal;
            text-rendering: auto;
            line-height: 1;
        }
        
        .fa-moon:before {
            content: "\\f186";
        }
        
        .fa-bars:before {
            content: "\\f0c9";
        }
        
        .fa-times:before {
            content: "\\f00d";
        }
        
        .fa-arrow-up:before {
            content: "\\f062";
        }
        
        .fa-github:before {
            content: "\\f09b";
        }
        
        .fa-linkedin-in:before {
            content: "\\f0e1";
        }
        
        .fa-twitter:before {
            content: "\\f099";
        }
        
        .fa-instagram:before {
            content: "\\f16d";
        }
        
        .fa-envelope:before {
            content: "\\f0e0";
        }
        
        .fa-phone-alt:before {
            content: "\\f879";
        }
        
        .fa-map-marker-alt:before {
            content: "\\f3c5";
        }
        
        .fa-js:before {
            content: "\\f3b8";
        }
        
        .fa-react:before {
            content: "\\f41b";
        }
        
        .fa-node-js:before {
            content: "\\f3d3";
        }
        
        .fa-database:before {
            content: "\\f1c0";
        }
        
        .fa-html5:before {
            content: "\\f13b";
        }
        
        .fa-git-alt:before {
            content: "\\f841";
        }
        
        @font-face {
            font-family: 'Font Awesome 5 Brands';
            font-style: normal;
            font-weight: 400;
            font-display: block;
            src: url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/webfonts/fa-brands-400.woff2") format("woff2"),
                 url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/webfonts/fa-brands-400.ttf") format("truetype");
        }
        
        @font-face {
            font-family: 'Font Awesome 5 Free';
            font-style: normal;
            font-weight: 900;
            font-display: block;
            src: url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/webfonts/fa-solid-900.woff2") format("woff2"),
                 url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/webfonts/fa-solid-900.ttf") format("truetype");
        }
        
        .fab {
            font-family: 'Font Awesome 5 Brands';
            font-weight: 400;
        }
        
        .fas {
            font-family: 'Font Awesome 5 Free';
            font-weight: 900;
        }
    `;
    document.head.appendChild(faStyle);
});