/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'hsl(214, 20%, 12%)',
        accent: 'hsl(32, 90%, 50%)',
        primary: 'hsl(210, 80%, 50%)',
        surface: 'hsl(214, 20%, 16%)',
        'text-primary': 'hsl(0, 0%, 90%)',
        'text-secondary': 'hsl(210, 15%, 60%)',
      },
      borderRadius: {
        lg: '12px',
        md: '8px',
        sm: '4px',
      },
      spacing: {
        'lg': '16px',
        'md': '12px',
        'sm': '8px',
        'xl': '24px',
      },
      boxShadow: {
        card: '0 4px 12px hsla(0, 0%, 0%, 0.1)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
