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
        fontWeight : '800'
      }],
      heading2 : ['28px',{
        lineHeight : '42px',
        letterSpacing : '0px',
        fontWeight : '800'
      }],
      heading3 : ['32px',{
        lineHeight : '60px',
        letterSpacing : '0px',
        fontWeight : '800'
      }],
      parag : ['18px', {
        lineHeight : '27px',
        letterSpacing : '0x',
        fontWeight : '400',
      }],
    },




    extend: {
      colors : {
        White : '#FFF',
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
        '16' : '16px',
        full : '9999px'
      },
      spacing : {
        12 : '12px',
        16 : '16px',
        24 : '24px',
        31 : '31px',
        32 : '32px',
        40 : '40px',
        48 : '48px',
        54 : '54px',
        71 : '71px',
        80 : '80px',
        140 : '140px',
        160 : '160px',
        168 : '168px',
        200 : '200px',
        280 : '280px',
        440 : '440px',
        488 : '488px',
      },
      dropShadow: {
        boxxshadow: '0 25px 25px 0 rgba(0, 0, 0, 0,4.77%)',
      },
    },
  },
  plugins: [],
}

