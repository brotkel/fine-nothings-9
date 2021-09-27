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
      gray: {
        light: colorFn('color-light-gray'),
      },
      night: colorFn('color-night'),
      red: colorFn('color-red'),
      orange: colorFn('color-orange'),
      yellow: colorFn('color-yellow'),
      mint: colorFn('color-mint'),
      teal: colorFn('color-teal'),
      magenta: colorFn('color-magenta'),
      pink: colorFn('color-pink'),
    },
    fontFamily: {
      sans: ['Raleway Flex', 'Raleway', 'ui-sans-serif', 'sans-serif'],
      serif: ['Josefin Slab Flex', 'Josefin Slab', 'ui-serif', 'serif'],
      mono: ['Roboto Mono Flex', 'Roboto Mono', 'ui-monospace', 'monospace'],
    },
    extend: {},
  },
  variants: {
    extend: {
      fontFamily: ['dark']
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};