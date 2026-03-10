/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Gris neutro (escala corta pero práctica)
        neutral: {
          50:  "#f8fafb",
          100: "#f1f5f7",
          200: "#e2e8ee",
          300: "#cfd8e1",
          400: "#9aa7b5",
          500: "#6b7785",
          600: "#4b5561",
          700: "#37414b",
          800: "#262d35",
          900: "#1b2127",
        },
          anep_cyan: "rgb(0,174,239)",
          anep_cyan_two: "#08c",
          anep_cyan_three: "rgb(0,155,219)",
          anep_yellow: "rgb(255,204,0)",
          anep_blue: "rgb(22,65,148)",
          anep_black: "rgb(35,31,32)",
          anep_gray: "#bfbfbf",
          anep_site_blue: "#0d6efd",
          anep_site_indigo: "#6610f2",
          anep_site_purple: "#6f42c1",
          anep_site_pink: "#d63384",
          anep_site_red: "#dc3545",
          anep_site_orange: "#fd7e14",
          anep_site_yellow: "#ffc107",
          anep_site_green: "#198754",
          anep_site_teal: "#20c997",
          anep_site_cyan: "#0dcaf0",
          anep_site_white: "#fff",
          anep_site_gray: "#626262",
          anep_site_gray_dark: "#343a40",
          anep_site_gray_100: "#f8f9fa",
          anep_site_gray_200: "#e9ecef",
          anep_site_gray_300: "#dee2e6",
          anep_site_gray_400: "#ced4da",
          anep_site_gray_500: "#adb5bd",
          anep_site_gray_600: "#626262",
          anep_site_gray_700: "#495057",
          anep_site_gray_800: "#343a40",
          anep_site_gray_900: "#212529",
          anep_site_header: "#009bdb",
          anep_site_footer: "#262A2D",
          anep_site_primary: "#1363ff",
          anep_site_secondary: "#626262",
          anep_site_success: "#198754",
          anep_site_info: "#0dcaf0",
          anep_site_warning: "#ffc107",
          anep_site_danger: "#dc3545",
          anep_site_light: "#f8f9fa",
          anep_site_gray: "#626262",
          anep_site_dark: "#212529",
          cc_purpura: "#5A1541",
          cc_pink: "#E83D88",
          cc_gold: "#9D8C5E",


        // Cremas (fondos cálidos suaves)
        cream: {
          50:  "#fffdf5",
          100: "#fff9e8",
          200: "#fcf3d4",
          300: "#f7eab5",
          DEFAULT: "#fcfac3",
        },

        // Acentos mínimos (podés renombrar/ajustar hex)
        brand:  "#9D2236", // bordó
        accent: "#F8E71D", // dorado/amarillo
      },

      fontFamily: {
        montserrat: ["Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};