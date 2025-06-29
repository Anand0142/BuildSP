import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				electric: '#00D9FF',
				neon: '#FFFF00',
				cyber: '#FF00FF',
				matrix: '#00FF41'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px) scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1)'
					}
				},
				'fade-in-delayed': {
					'0%': {
						opacity: '0',
						transform: 'translateY(50px) scale(0.9)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1)'
					}
				},
				'rotate-y': {
					'0%': { transform: 'rotateY(0deg)' },
					'100%': { transform: 'rotateY(360deg)' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)',
						filter: 'brightness(1)'
					},
					'50%': { 
						boxShadow: '0 0 40px rgba(0, 217, 255, 0.8), 0 0 60px rgba(0, 217, 255, 0.3)',
						filter: 'brightness(1.2)'
					}
				},
				'float': {
					'0%, 100%': { 
						transform: 'translateY(0px) rotateX(0deg)' 
					},
					'25%': { 
						transform: 'translateY(-10px) rotateX(2deg)' 
					},
					'50%': { 
						transform: 'translateY(-20px) rotateX(0deg)' 
					},
					'75%': { 
						transform: 'translateY(-10px) rotateX(-2deg)' 
					}
				},
				'slide-in-right': {
					'0%': { 
						transform: 'translateX(100%) scale(0.95)', 
						opacity: '0' 
					},
					'100%': { 
						transform: 'translateX(0) scale(1)', 
						opacity: '1' 
					}
				},
				'slide-in-left': {
					'0%': { 
						transform: 'translateX(-100%) scale(0.95)', 
						opacity: '0' 
					},
					'100%': { 
						transform: 'translateX(0) scale(1)', 
						opacity: '1' 
					}
				},
				'slide-in-up': {
					'0%': { 
						transform: 'translateY(100px) scale(0.95)', 
						opacity: '0' 
					},
					'100%': { 
						transform: 'translateY(0) scale(1)', 
						opacity: '1' 
					}
				},
				'typewriter': {
					'0%': { width: '0' },
					'100%': { width: '100%' }
				},
				'smooth-bounce': {
					'0%, 20%, 53%, 80%, 100%': {
						transform: 'translate3d(0, 0, 0)'
					},
					'40%, 43%': {
						transform: 'translate3d(0, -15px, 0)'
					},
					'70%': {
						transform: 'translate3d(0, -8px, 0)'
					},
					'90%': {
						transform: 'translate3d(0, -3px, 0)'
					}
				},
				'grid-move': {
					'0%': { backgroundPosition: '0 0' },
					'100%': { backgroundPosition: '50px 50px' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'fade-in-delayed': 'fade-in-delayed 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'rotate-y': 'rotate-y 20s linear infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'slide-in-right': 'slide-in-right 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'slide-in-left': 'slide-in-left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'slide-in-up': 'slide-in-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'typewriter': 'typewriter 3s steps(40, end)',
				'smooth-bounce': 'smooth-bounce 2s ease-in-out infinite',
				'grid-move': 'grid-move 20s linear infinite'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace']
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'cyber-grid': 'linear-gradient(rgba(0,217,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,217,255,0.1) 1px, transparent 1px)'
			}
		}
	},
	plugins: [animate],
} satisfies Config;
