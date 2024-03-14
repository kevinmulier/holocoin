import daisyui from 'daisyui';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        holocoin: {
          'primary': '#ffffff',
          'secondary': '#AA1D30',
          'accent': '#999CA3',
          'neutral': '#13151B',
          'base-100': '#0d0f15',
          'info': '#0000ff',
          'success': '#00ff00',
          'warning': '#00ff00',
          'error': '#ff0000',
        },
      },
    ],
  },
};
