module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '32rem',
      },
      spacing: {
        '128': '32rem',
      },
      scale: {
        '175': '1.75',
        '200': '2.0',
        '250': '2.5',
      },
      backgroundImage: {
        'login-image': "url('/public/illustration.jpg')",
        
      },
      zIndex: {
        "-1": "-1",
      },
      colors: {
        'skyblue': '#3493db',
        "primary": "var(--primary)",
        "secondary": "var(--secondary)",
        "font-primary": "var(--font-primary)",
        "font-secondary": "var(--font-secondary)",
        "background": "var(--background)",
        "header": "var(--header)",
        "font-normal": "var(--font-normal)",
        "accent": "var(--accent)",
        "secondary-accent": "var(--secondary-accent)",
        "hover": "var(--hover)",
        "focus": "var(--focus)",
        "activ": "var(--activ)",
      },
      fontFamily: {
        'merriweather': ['Merriweather' , 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'] ,
        'greatvibes': ['Great Vibe', 'cursive'],
        'dancingscript': ['Dancing Script', 'cursive'],

      },
    },
  },
  plugins: [],
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
  },
}
