import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily:{
      display: 'Oswald, ui-serif', // Adds a new `font-display` class
    },
    colors:{
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'pavlova' : '#F2EACE',
        'pavlovaLight':'#F5EFDA',
        'indigoDark':'#270140',
        'indigoLight':'#5A0F8C',
        'pebble':'#C5BFAB',
        'seaShell':'#EAE8EB',
        'nectarine':'#F27405',
        'lavender':'#270140',
        'slate':'#6D6C66',
        'successTeal':'#008080',
        'spearmint':'#94C973',
        'charcoal':'#150D1A',
        'coal':'#212121',
        'pearl':'#FFFCF3',
        'gray':'#7B7A7C',
        'pearlGray':'#B3B2B4',


        
    },  
  },
  plugins: [],
};
export default config;
