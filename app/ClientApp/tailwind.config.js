/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins']
      }
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#e8414f",
        
"secondary": "#f3f4f6",
        
"accent": "#e11d48",
        
"neutral": "#e11d48",
        
"base-100": "#e8414f",
        
"info": "#e11d48",
        
"success": "#e11d48",
        
"warning": "#e11d48",
        
"error": "#e11d48",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
  
}
