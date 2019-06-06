import { useState } from 'react';
import breathe from './imgs/fabian-moller-401625-unsplash.jpg';
import summer from './imgs/ernest-porzi-19106-unsplash.jpg';
import renaissance from './imgs/sandra-ollier-663002-unsplash.jpg';
import ayla from './imgs/ayla.jpg';
import paridhi from './imgs/paridhi.png';
import zainab from './imgs/zainab.png';

const variants = [
  {
    media: {
      image: breathe, // Photo by Fabian Møller on Unsplash
      title: 'Loyal Community',
      body: 'How to build a loyal community for your brand.',
    },
    profile: {
      avatar: paridhi,
      name: 'Paridhi Dutta',
      title: 'Community Manager',
    },
    theme: {
      colors: {
        black: '#2d2733',
        primary: '#d675ff',
        secondary: '#f9e9fe',
        tertiary: '#e5a8ff',
        white: '#ffffff',
        gray: '#898ba3',
      },
      radii: [0, 8, 16, 9999, '100%'],
    },
  },
  {
    media: {
      image: summer, // Photo by Ernest Porzi on Unsplash
      title: 'Summer Days',
      body: 'I am awakened by these beams of light.',
    },
    profile: {
      avatar: zainab,
      name: 'Zainab Mian',
      title: 'UX Designer',
    },
    theme: {
      colors: {
        black: '#272833',
        primary: '#6a74ff',
        secondary: '#e7e9ff',
        tertiary: '#98a2fe',
        white: '#ffffff',
        gray: '#979bae',
      },
      radii: [0, 6, 16, 16, 9999, '100%'],
    },
  },
  {
    media: {
      image: renaissance, // Photo by Sandra Ollier on Unsplash
      title: 'Renaissance',
      body: 'Humanity: the center of interest.',
    },
    profile: {
      avatar: ayla,
      name: 'Ayla Gauthier',
      title: 'Artist',
    },
    theme: {
      colors: {
        black: '#000000',
        primary: '#5f7166',
        secondary: '#e4e8e6',
        tertiary: '#bbbb9f',
        white: '#ffffff',
        gray: '#959e97',
      },
      radii: [0, 0, 16, 9999, '100%'],
    },
  },
];

export function useThemes() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [theme, setTheme] = useState(variants[1]);

  return [
    theme,
    activeIndex,
    index => {
      setActiveIndex(index);
      setTheme(variants[index]);
    },
  ];
}
