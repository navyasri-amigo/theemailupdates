export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ink: 'rgb(var(--ink) / <alpha-value>)',
        indigo: 'rgb(var(--indigo) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        coral: 'rgb(var(--coral) / <alpha-value>)',
        'coral-deep': 'rgb(var(--coral-deep) / <alpha-value>)',
        peach: 'rgb(var(--peach) / <alpha-value>)',
        lilac: 'rgb(var(--lilac) / <alpha-value>)',
        cream: 'rgb(var(--cream) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 60px -28px rgba(30, 27, 75, 0.35)',
        card: '0 18px 40px -20px rgba(30, 27, 75, 0.45)',
        coral: '0 12px 30px -10px rgba(255, 107, 87, 0.65)',
        'coral-lg': '0 18px 40px -10px rgba(255, 107, 87, 0.8)',
      },
    },
  },
}
