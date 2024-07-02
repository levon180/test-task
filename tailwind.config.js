/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        18: '4.25rem'
      },
      space: {
        '6.5': '1.625'
      },
      boxShadow: {
        'bottom-default': '0px -1px 0px 0px #E5E5EA inset',
        'top-default': '0px 1px 0px 0px #E5E5EA inset'
      },
      colors: {
        'brand-gray': '#666668',
        'brand-black': '#2C2C2E',
        'primary': '#007AFF',
        'secondary': '#F2F2F7',
      }
    },
  },
  plugins: [],
}

