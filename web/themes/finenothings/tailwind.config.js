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
  purge: [],
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
      boxShadow: {
        cover: 'inset 0px -10px 10px 0 rgba(0, 0, 0, .1)',
      }
    },
  },
  variants: {
    extend: {
      brightness: ['group-hover', 'hover'],
      filter: ['group-hover', 'hover'],
      fontFamily: ['dark'],
      sepia: ['group-hover', 'hover'],
      transform: ['group-hover', 'hover'],
      translate: ['group-hover', 'hover'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
