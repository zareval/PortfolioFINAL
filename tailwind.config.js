/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'app-primary': '#295DFA',
        'app-secondary': '#4FE1D4',
        'app-white': '#FFFFFF',
        'app-black': '#081332',
        'app-gray': '#C5C5C5',
        'app-gray-black': '#5E6066',
        'app-light-background': '#F6FAFF',
        'app-light-background-2': '#ECFCFA',
        'app-dark-background': '#021C69',
        'app-border': '#C6D3FE',
        'app-warning': '#FC28FC',
        'app-success': '#996CFB',
        'app-info': '#D0DCFF',
        'orange-shade-50':'#fff7ed',
        'orange-shade-100':'#fce6d8',
        'orange-shade-200':'#f8c9b0',
        'orange-shade-300': '#F3A683',
        'color-primario':'#fff2eb',
        'color-secundario':'#ffe4d5',
        'color-terciario':'#cd9a8e',
        'color-300':'#e3c5be'
        
        
        
      },
    },
  },
  plugins: [],
};
