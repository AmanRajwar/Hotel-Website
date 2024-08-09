import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      height:{
'custom':'calc(100% - 80px)',
      },
      width:{
'custom':'calc(100% - 150px)',
      },
      colors: {
        green: {
          1: '#054c1d',
          2: "#3ccd41"
        },
        blue: {
          1: '#0a0f16'
        },
        gray:{
          1:'#292529'
        },
        golden:{
          1:'#ffcf40'
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      textAnchor: {
        start: 'start',
        middle: 'middle',
        end: 'end',
      },
      backgroundImage: {
        hero: "url('/images/mountain3.JPG')",
        layer: "url('/images/layers.svg')",
      },
      fontFamily: {
        1: ["Bebas Neue", 'sans-serif'],
        2: ["Anton SC", "sans-serif"],
        3: ["Josefin Sans", "sans-serif"],
      },
      transform: {
        '3d': 'translate3d(-50%, -50%, 0)',
      },
    },

  },
  variants: {
    extend: {
      transform: ['responsive', 'hover', 'focus'],
    }
  },
  plugins: [require("tailwindcss-animate"),
    function({ addUtilities }:any) {
      const newUtilities = {
        '.scrollbar-hide': {
          /* Hide scrollbar for Chrome, Safari and Opera */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          /* Hide scrollbar for IE, Edge and Firefox */
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      };
      addUtilities(newUtilities);
    },
  ],
} satisfies Config

export default config