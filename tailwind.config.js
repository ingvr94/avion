/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark-primary':'#2A254B',
        'light-primary':'#505977',
        'dark':'#1E193E',
        'primary':'#4E4D93',
        'light-grey':'#F9F9F9',
        'border-grey':'#EBE8F4',
        'border-dark':'#CAC6DA',
        'header-list':'#726E8D',
      },
      fontFamily:{
        satoshi:['Satoshi', 'sans-serif'],
        clashdisplay:['ClashDisplay-Regular','sans-serif']
      },
      fontSize:{
        'h1': '36px',
        'h2':'32px',
        'h3':'24px',
        'h4':'20px',
        'h5':'16px',
        'h6':'14px',
        'body_sm':'14px',
        'body_md':'16px',
        'body_lg':'18px'
      }
    },
    backgroundImage:{
      'page-header':'url(/Page Headers-2.png)'
    },
    screens:{
      xs:"390px",
      sm:'768px',
      md:'1060px',
      lg:'1440px'
    }
   
  },
  plugins: [],
}
