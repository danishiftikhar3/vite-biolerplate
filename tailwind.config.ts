import type { Config } from 'tailwindcss'
const config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: '',
    theme: {
        screens: {
            '2xl': '1536px',
            xl: '1280px',
            lg: '1024px',
            md: '768px',
            sm: '640px',
            xs: '340px',
        },

        container: {
            center: true,
            padding: '2rem',
        },
        extend: {
            colors: {
                dark: {
                    active: '#1F242F',
                    brand: {
                        secondary: {
                            700: '#CECFD2',
                        },
                    },
                    border: {
                        primary: {
                            DEFAULT: '#373A41',
                        },
                    },
                    placeholder: '#85888E',
                    primary: {
                        DEFAULT: '#0C0E12',
                        alt: '#13161B',
                        900: '#F7F7F7',
                    },
                    secondary: {
                        DEFAULT: '#22262F',
                        700: '#161B26',
                    },
                    tertiary: {
                        DEFAULT: '#1F242F',
                        600: '#94979C',
                    },
                },
                border: {
                    DEFAULT: 'hsl(var(--border))',
                    primary: '#CDC8C3',
                    secondary: '#E0DDD9',
                    50: '#cdc8c3',
                    100: '#eaecf0',
                    200: '#d0d5dd',
                    300: '#ed46bb',
                    brand: '#7678ED',
                },
                input: '#CDC8C3',
                ring: 'hsl(var(--ring))',
                background: {
                    DEFAULT: 'hsl(var(--primary-background))',
                    blue: {
                        dark: '#2A4062',
                    },
                    white: {
                        opacity_80: '#FFFFFFCC',
                    },
                },
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: '#7678ED',
                    background: '#FFFFFF',
                    foreground: 'hsl(var(--primary-foreground))',
                    border: '#D0D5DD',
                    solid: '#0C111D',
                    900: '#25221D',
                },
                secondary: {
                    DEFAULT: '#F9FAFB',
                    background: '#F2F4F7',
                    foreground: 'hsl(var(--secondary-foreground))',
                    hover: '#18212f',
                    subtle: '#FDFCFC',
                    500: '#3c3830',
                    600: '#544d43',
                    700: '#344054',
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
                warning: {
                    400: '#FDB022',
                },
                quinary: {
                    100: '#A89E95',
                },
                brand: {
                    'pampas-grass': {
                        100: '#F3F0EC',
                    },
                    primary: {
                        200: '#395D90',
                        300: '#F4F6FB',
                        900: '#24334C',
                    },
                    secondary: {
                        DEFAULT: '#C8C9F8',
                        50: '#F4F6FB',
                        200: '#CDD9EA',
                        300: '#9FA1F2',
                        500: '#4B75AC',
                        600: '#395D90',
                        700: '#5B57CC',
                    },
                    section: {
                        background: '#2A4062',
                    },
                },
                tertiary: {
                    DEFAULT: '#F3F1F0',
                    400: '#A89E95',
                    500: '#475467',
                    600: '#6B6155',
                },
                quarterly: {
                    500: '#667085',
                },
                quaternary: {
                    500: '#837568',
                },
                'alpha-black': {
                    10: '#0000001A',
                    30: '#0000004D',
                },
                white: '#FFFFFF',
                blue: {
                    200: '#B2DDFF',
                    300: '#2E90FA',
                    400: '#175CD3',
                    dark: '#2A4062',
                    600: '#453CA3',
                    700: '#363F72',
                },
                pink: {
                    200: '#FCCEEE',
                    300: '#EE46BC',
                    400: '#C11574',
                },
                green: {
                    50: 'ECFDF3',
                    200: '#ABEFC6',
                    300: '#17B26A',
                    400: '#067647',
                },
                error: {
                    50: '#FEF3F2',
                    100: '#d92c20',
                    200: '#F04438',
                    400: '#c96946',
                    500: '#F04438',
                    600: '#D92D20',
                    700: '#B42318',
                    secondary: '#FEE4E2',
                },
                dark_blue: {
                    200: '#C7D7FE',
                    300: '#6172F3',
                    400: '#3538CD',
                },
                success: {
                    50: '#ABEFC6',
                    100: '#ecfcf2',
                    200: '#aaefc6',
                    300: '#75dfa6',
                    400: '#069454',
                    500: '#057647',
                    600: '#17b169',
                    700: '#067647',
                    primary: '#079455',
                },
                gray: {
                    200: '#E0DDD9',
                    300: '#D0D5DD',
                    400: '#98A2B3',
                    500: '#e4e7ec',
                },
                utility: {
                    brand: {
                        50: '#DDDDFB',
                        200: '#B4B5F5',
                        700: '#5B57CC',
                    },
                    gray: {
                        50: '#F9F8F7',
                        200: '#E0DDD9',
                        700: '#544D43',
                    },
                },
            },
            fontSize: {
                sm: '14px',
                base: '16px',
                lg: '18px',
                xl: '20px',
                '2xl': '24px',
                '3xl': '30px',
                '4xl': '36px',
                '5xl': '48px',
                '6xl': '60px',
                '7xl': '72px',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
                '2xl': '1rem',
                '3xl': '1.5rem',
                '4xl': '24px',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
                'fade-in': {
                    from: { opacity: '0' },
                    to: { opacity: '1' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.5s ease-out',
            },
            fontFamily: {
                'anek-bangla': "'Anek Bangla', sans-serif",
                'titillium-web': "'Titillium Web', sans-serif",
            },
            boxShadow: {
                xs: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                btn: '0px 0px 0px 1px rgba(255, 255, 255, 0.08) inset, 0px -2px 0px 0px rgba(16, 24, 40, 0.05) inset, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
            },
            screens: {
                '3xl': '1680px',
                '5xl': '1920px',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
