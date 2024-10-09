/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html"
  ],
  theme: {
    fontFamily : {
      poppins : ['Poppins', 'sans'],
      OpenSans : ['Open Sans', 'sans serif'],
    },
    fontSize : {
      heading : ['40px',{
        lineHeight : '60px',
        letterSpacing : '0px',
        fontWeight : '600'
      }],
      heading2 : ['28px',{
        lineHeight : '42px',
        letterSpacing : '0px',
        fontWeight : '600'
      }],
      heading3 : ['32px',{
        lineHeight : '60px',
        letterSpacing : '0px',
        fontWeight : '600'
      }],
      parag : ['18px', {
        lineHeight : '27px',
        letterSpacing : '0px',
        fontWeight : '400',
      }],
      btn : ['14px', {
        lineHeight : '19px',
        letterSpacing : '0px',
        fontWeight : '700',
      }],
    },




    extend: {
      backgroundImage : {
        desktophbg : "url('/images/bg-hero-desktop.svg')",
        mobilehbg : "url('/images/bg-hero-mobile.svg')",
      },
      colors : {
        White : '#FFFFFF',
        darkblue : '#00252E',
        lightblue : '#808E9A',
        brsocial : '#DFE4F0',
        btncl : '#FF52C1',
        hero : '#EDFBFF'
        
      },
      screens : {
        large : '1440px',
        card : '1232px',
      },  
      
      borderRadius : {
        16 : '16px',
        24 : '24px',
        full : '9999px'
      },
      spacing : {
        12  : '12px',
        16  : '16px',
        24  : '24px',
        31  : '31px',
        32  : '32px',
        40  : '40px',
        48  : '48px',
        54  : '54px',
        56  : '56px',
        71  : '71px',
        80  : '80px',
        92 : '92px',
        140 : '140px',
        160 : '160px',
        168 : '168px',
        200 : '200px',
        256 : '256px',
        280 : '280px',
        440 : '440px',
        488 : '488px',
        680 : '680px',
        482 : '482px',
        1232 : '1232px'
      },
      dropShadow: {
        boxxshadow: '0 25px 25px 0 rgba(0, 0, 0, 0,4.77%)',
      },
    },
  },
  plugins: [],
}

