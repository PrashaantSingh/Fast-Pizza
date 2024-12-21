/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    backgroundImage: {
      "hero-image":
        "url('https://images.unsplash.com/photo-1593504049359-74330189a345?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      "footer-texture": "url('/img/footer-texture.png')",
    },
    screens: {
      xs: "480px", 
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
};
export const plugins = [];
