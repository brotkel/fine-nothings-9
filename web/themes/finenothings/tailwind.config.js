'use strict';

const colorFn = cssVariable => {
  return ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(--${cssVariable}), ${opacityValue})`;
    }
    if (opacityVariable !== undefined) {
      return `rgba(var(--${cssVariable}), var(${opacityVariable}, 1))`;
    }
    return `rgb(var(--${cssVariable}))`;
  };
};

module.exports = {
  content: [
    './src/**/*.{html,twig,php,js,json}',
    './dist/**/*.{html,twig,php,js,json}'
  ],
  safelist: [
    'list-inside',
    'text-center',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colorFn('color-black'),
      white: colorFn('color-white'),
      paperwhite: colorFn('color-paperwhite'),
      sky: colorFn('color-sky'),
      night: colorFn('color-night'),
      gray: colorFn('color-gray'),
      red: colorFn('color-red'),
      orange: colorFn('color-orange'),
      yellow: colorFn('color-yellow'),
      mint: colorFn('color-mint'),
      teal: colorFn('color-teal'),
      magenta: colorFn('color-magenta'),
      pink: colorFn('color-pink'),
      maroon: colorFn('color-maroon'),
    },
    fontFamily: {
      sans: ['Raleway Flex', 'Raleway', 'ui-sans-serif', 'sans-serif'],
      serif: ['Josefin Slab Flex', 'Josefin Slab', 'ui-serif', 'serif'],
      mono: ['Roboto Mono Flex', 'Roboto Mono', 'ui-monospace', 'monospace'],
    },
    extend: {
      backgroundImage: {
        'static-pattern':  'url("../images/noise-transparent.png")',
      },
      borderRadius: {
        ['1/2']: '50%',
      },
      boxShadow: {
        cover: 'inset 0px -10px 10px 0 rgba(0, 0, 0, .1)',
        ['glow-pink']: '0px 0px 8px 5px rgba(var(--color-pink), .5)',
        ['glow-mint']: '0px 0px 8px 5px rgba(var(--color-mint), .5)',
        ['glow-teal']: '0px 0px 8px 5px rgba(var(--color-teal), .5)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
