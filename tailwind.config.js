/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    keyframes: {
      gradient: {
        '0%': {
          backgroundPosition: '200% 0', // Start with the gradient moved to the right
        },
        '100%': {
          backgroundPosition: '0 0', // End with the gradient at the starting point
        },
      },
    },
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      blue:colors.blue,
      green:colors.green,
      red:colors.red,
      sky:colors.sky,
      fuchsia:colors.fuchsia,
      
      'web': {
        100: '#BC002D',
        200: '#FFFFFF',
        300: '#293132',
        400: '#4F5165',
        500: '#547AA5',

    },
  },
    extend: {

      animation: {
        gradient: 'gradient 1.5s linear infinite', // Infinite gradient animation
        movingBackground: 'movingBackground 25s linear infinite',
        pulseText: 'pulseText 2s ease-in-out infinite',
        typewriter: "typewriter 2s steps(11) forwards",
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
        slideRight: 'slideRight 2s ease-out forwards',
        slideLeft: 'slideLeft 2s ease-out forwards',
      },
      keyframes: {
        gradient: {
          '0%': {
            backgroundPosition: '200% 0', // Start with the gradient moved to the right
          },
          '100%': {
            backgroundPosition: '0 0', // End with the gradient at the starting point
          },
        },
        movingBackground: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '300px 300px' },
        },
        pulseText: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
        typewriter: {
          to: {
            left: "100%"
          }
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        },
        slideRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(+100%)' },
        },
      },


    },
  },
  plugins: [],
}