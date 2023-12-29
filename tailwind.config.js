tailwind.config = {
    theme: {
      extend: {
        spacing: {
            'container': '1280px',
        },
        screens: {
          'xs': '400px',
          'sm': '576px',
          'md': '768px',
          'lg': '992px',
          'xl': '1200px',
          '2xl': '1400px',
          '3xl': '1600px',
        },
        colors: {
            primary: '#161722',
            navbg: '#0D0D0D',
            secondary:'#FFD2A4',
        },
        fontFamily: {
            'robotocondensed': "Roboto Condensed, sans-serif",
        },
         backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'banner_img': "url('images/banner_img.jpg')",
        'serve': "url('images/serve.png')",
        'overlay': "linear-gradient(360deg, #060606 16.68%, rgba(0, 0, 0, 0.02) 96.44%)",
        'textgradiant': "linear-gradient(110deg, #A54E2B -53.83%, #DC9853 62.61%)",
        

        

      }
      }
    }
  }