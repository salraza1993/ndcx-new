/** @type {import('tailwindcss').Config} */
import PrimeUI from 'tailwindcss-primeui';

export default {
  darkMode: ['selector', '[class="p-dark"]'],
  content: ['./src/**/*.{html,ts}'],
  plugins: [PrimeUI],
};
