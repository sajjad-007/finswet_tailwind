tailwind.config = {
    theme: {
      extend: {
        spacing: {
            'container': '1280px',
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
        'overlay': "linear-gradient(360deg, #060606 16.68%, rgba(0, 0, 0, 0.02) 96.44%)",

      }
      }
    }
  }