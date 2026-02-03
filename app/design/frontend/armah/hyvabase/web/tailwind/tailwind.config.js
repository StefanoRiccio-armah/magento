const {
  spacing
} = require('tailwindcss/defaultTheme');

const colors = require('tailwindcss/colors');

const hyvaModules = require('@hyva-themes/hyva-modules');

module.exports = hyvaModules.mergeTailwindConfig({
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1340px' // => @media (min-width: 1536px) { ... }

      },
      animation: {
        hamburger1: "hamburgerMove 5s ease-in-out infinite",
        hamburger2: "hamburgerMove 5s ease-in-out infinite 0.2s",
        hamburger3: "hamburgerMove 5s ease-in-out infinite 0.4s",
        'custom-loop': 'custom-loop 2s infinite alternate',
      },
      keyframes: {
        'custom-loop': {
          '0%, 20%': {
            backgroundColor: 'white',
            color: '#6b7280',
            borderColor: '#f47578',
          },
          '80%, 100%': {
            backgroundColor: '#EA4C50',
            color: 'white',
            borderColor: '#EA4C50',
          },
        },
        hamburgerMove: {
          "0%": { transform: "translateX(0)" },
          "5%": { transform: "translateX(5px)" },
          "15%": { transform: "translateX(-5px)" },
          "20%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(0px)" } /* Rimane ferma dal 60% al 100% */
        }
      },
      fontFamily: {
        sans: ["Segoe UI", "Helvetica Neue", "Arial", "sans-serif"]
      },
      colors: {
        orange: {
          ...colors.orange,
          lighter:"#ff9732",
          "DEFAULT":"#FF5F01",
          darker:"#CC4302"
        },
        secondary: {
          50: "#f4f7fb",
          100: "#e7eff7",
          200: "#cadced",
          300: "#9bbede",
          lighter: "#316598",
          "DEFAULT": "#284c70",
          darker: "#233c57",
          400: "#659ccb",
          500: "#4280b5",
          600: "#316598",
          700: "#28517c",
          800: "#284c70",
          900: "#233c57",
          950: "#17273a",
        },
        primary: {
          50: "#fef2f2",
          100: "#fde3e4",
          200: "#fccccd",
          300: "#f9a8aa",
          lighter: "#f47578",
          "DEFAULT": "#ea4c50",
          darker: "#b42125",
          400: "#f47578",
          500: "#ea4c50",
          600: "#d62c30",
          700: "#b42125",
          800: "#951f22",
          900: "#7c2022",
          950: "#430c0d",
        },
        background: {
          lighter: colors.blue['100'],
          "DEFAULT": colors.blue['200'],
          darker: colors.blue['300']
        },
        green: {
          50: "#f4faf3",
          100: "#e5f5e3",
          200: "#cceac8",
          300: "#a2d99c",
          lighter: "#a2d99c",
          "DEFAULT": "#5db553",
          darker: "#31692c",
          400: "#5db553",
          500: "#4ea245",
          600: "#3c8534",
          700: "#31692c",
          800: "#2b5427",
          900: "#234621",
          950: "#10250e",
        },
        yellow: colors.amber,
        purple: colors.violet
      },
      textColor: {
        orange: {
          ...colors.orange,
          lighter:"#ff9732",
          "DEFAULT":"#FF5F01",
          darker:"#CC4302"
        },
        red: {
          ...colors.red,
          "DEFAULT": colors.red['500']
        },
        secondary: {
          50: "#f4f7fb",
          100: "#e7eff7",
          200: "#cadced",
          300: "#9bbede",
          lighter: "#316598",
          "DEFAULT": "#284c70",
          darker: "#233c57",
          400: "#659ccb",
          500: "#4280b5",
          600: "#316598",
          700: "#28517c",
          800: "#284c70",
          900: "#233c57",
          950: "#17273a",
        },
        primary: {
          50: "#fef2f2",
          100: "#fde3e4",
          200: "#fccccd",
          300: "#f9a8aa",
          lighter: "#f47578",
          "DEFAULT": "#ea4c50",
          darker: "#b42125",
          400: "#f47578",
          500: "#ea4c50",
          600: "#d62c30",
          700: "#b42125",
          800: "#951f22",
          900: "#7c2022",
          950: "#430c0d",
        },
      },
      backgroundColor: {
        orange: {
          ...colors.orange,
          lighter:"#ff9732",
          "DEFAULT":"#FF5F01",
          darker:"#CC4302"
        },
        secondary: {
          50: "#f4f7fb",
          100: "#e7eff7",
          200: "#cadced",
          300: "#9bbede",
          lighter: "#316598",
          "DEFAULT": "#284c70",
          darker: "#233c57",
          400: "#659ccb",
          500: "#4280b5",
          600: "#316598",
          700: "#28517c",
          800: "#284c70",
          900: "#233c57",
          950: "#17273a",
        },
        primary: {
          50: "#fef2f2",
          100: "#fde3e4",
          200: "#fccccd",
          300: "#f9a8aa",
          lighter: "#f47578",
          "DEFAULT": "#ea4c50",
          darker: "#b42125",
          400: "#f47578",
          500: "#ea4c50",
          600: "#d62c30",
          700: "#b42125",
          800: "#951f22",
          900: "#7c2022",
          950: "#430c0d",
        },
        container: {
          lighter: '#ffffff',
          "DEFAULT": '#D6DFE7',
          darker: '#f5f5f5'
        },
        green: {
          50: "#f4faf3",
          100: "#e5f5e3",
          200: "#cceac8",
          300: "#a2d99c",
          lighter: "#a2d99c",
          "DEFAULT": "#5db553",
          darker: "#31692c",
          400: "#5db553",
          500: "#4ea245",
          600: "#3c8534",
          700: "#31692c",
          800: "#2b5427",
          900: "#234621",
          950: "#10250e",
        },
        yellow: colors.amber,
        purple: colors.violet
      },
      borderColor: {
        secondary: {
          50: "#f4f7fb",
          100: "#e7eff7",
          200: "#cadced",
          300: "#9bbede",
          lighter: "#316598",
          "DEFAULT": "#284c70",
          darker: "#233c57",
          400: "#659ccb",
          500: "#4280b5",
          600: "#316598",
          700: "#28517c",
          800: "#284c70",
          900: "#233c57",
          950: "#17273a",
        },
        primary: {
          50: "#fef2f2",
          100: "#fde3e4",
          200: "#fccccd",
          300: "#f9a8aa",
          lighter: "#f47578",
          "DEFAULT": "#ea4c50",
          darker: "#b42125",
          400: "#f47578",
          500: "#ea4c50",
          600: "#d62c30",
          700: "#b42125",
          800: "#951f22",
          900: "#7c2022",
          950: "#430c0d",
        },
        container: {
          lighter: '#f5f5f5',
          "DEFAULT": '#e7e7e7',
          darker: '#b6b6b6'
        }
      },
      minWidth: {
        8: spacing["8"],
        20: spacing["20"],
        40: spacing["40"],
        48: spacing["48"]
      },
      minHeight: {
        14: spacing["14"],
        a11y: '44px',
        'screen-25': '25vh',
        'screen-50': '50vh',
        'screen-75': '75vh'
      },
      maxHeight: {
        '0': '0',
        'screen-25': '25vh',
        'screen-50': '50vh',
        'screen-75': '75vh'
      },
      container: {
        center: true,
        padding: '1.5rem'
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
  // Examples for excluding patterns from purge
  content: [
    // this theme's phtml and layout XML files
    '../../**/*.phtml',
    '../../*/layout/*.xml',
    '../../*/page_layout/override/base/*.xml',
    '../../../../../../../vendor/hyva-themes/magento2-hyva-widgets/**/*.phtml',
    // Hyvä parent theme (se usi artifact invece di vendor)
    '../../../../../../../artifact/magento2-default-theme/**/*.phtml',
    '../../../../../../../artifact/magento2-default-theme/*/layout/*.xml',
    '../../../../../../../artifact/magento2-default-theme/*/page_layout/override/base/*.xml',
    // parent theme in Vendor (if this is a child-theme)
    '../../../../../../../vendor/hyva-themes/magento2-default-theme/**/*.phtml',
    //'../../../../../../../vendor/hyva-themes/magento2-default-theme/*/layout/*.xml',
    //'../../../../../../../vendor/hyva-themes/magento2-default-theme/*/page_layout/override/base/*.xml',
    // app/code phtml files (if need tailwind classes from app/code modules)
    //'../../../../../../../app/code/**/*.phtml',
  ]
});
