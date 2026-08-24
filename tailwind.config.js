import tailwindcssAnimate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Recovered from the deployed bundle: Inter is the body face,
        // Geist does duty for both `font-serif` and `font-display`.
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Geist', 'system-ui', 'sans-serif'],
        display: ['Geist', 'system-ui', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          glow: 'hsl(var(--primary-glow))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        // Every one of these is lifted verbatim from the deployed stylesheet.
        marquee: {
          '0%': { transform: 'translate(0)' },
          '100%': { transform: 'translate(calc(-100% - var(--gap)))' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translate(calc(-100% - var(--gap)))' },
          '100%': { transform: 'translate(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        spinMark: {
          '0%': { transform: 'rotate(0)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        sendPress: {
          '0%': { transform: 'scale(1)', animationTimingFunction: 'cubic-bezier(.4,0,.2,1)' },
          '40%': { transform: 'scale(.87)', animationTimingFunction: 'cubic-bezier(.4,0,.2,1)' },
          '100%': { transform: 'scale(1)' },
        },
        caretBlink: {
          '0%,49.9%': { opacity: '1' },
          '50%,100%': { opacity: '0' },
        },
        countTick: {
          '0%': { transform: 'translateY(-2px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'animation-path': {
          '0%': { offsetDistance: '0%' },
          '100%': { offsetDistance: '100%' },
        },
        'neuroneus-drift': {
          '0%': { backgroundPosition: '0% 0%' },
          '25%': { backgroundPosition: '100% 30%' },
          '50%': { backgroundPosition: '60% 100%' },
          '75%': { backgroundPosition: '10% 60%' },
          '100%': { backgroundPosition: '0% 0%' },
        },
      },
      animation: {
        marquee: 'marquee var(--duration, 40s) linear infinite',
        'marquee-reverse': 'marquee-reverse var(--duration, 40s) linear infinite',
        shimmer: 'shimmer 2s linear infinite',
        spinMark: 'spinMark 1s linear infinite',
        sendPress: 'sendPress 300ms both',
        caretBlink: 'caretBlink 1s step-end infinite',
        countTick: 'countTick 150ms ease-out',
        'neuroneus-drift': 'neuroneus-drift 12s ease-in-out infinite',
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
