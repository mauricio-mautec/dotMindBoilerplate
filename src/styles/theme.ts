export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem'
    }
  },
  colors: {
    background_dark: '#393939',
    background_main: '#393939',
    background_less: '#8B68DF',
    background_light: '#C5ACFF',
    background_medium: '#320995',
    background_plus: '#320995',
    border_dark: '#8D8D8D',
    border_less: '#8D8D8D',
    border_light: '#8D8D8D',
    border_medium: '#8D8D8D',
    primary: '#003399',
    secondary: '#E2306C',
    tertiary: '#26E55F',
    quaternary: '#8B68DF',
    quinary: '#E9E1FF',
    color_dark: '#393939',
    color_light: '#8D8D8D',
    color_medium: '#8D8D8D',
    white: '#FAFAFA',
    black: '#030517',
    gray: '#8D8D8D',
    gray_dark: '#393939',
    gray_less: '#E7E7E7',
    gray_light: '#F2F2F2',
    gray_medium: '#8D8D8D',
    gray_plus: '#666666',
    hover_dark: '#8D8D8D',
    hover_less: '#8D8D8D',
    hover_light: '#8D8D8D',
    hover_medium: '#8D8D8D',
    hover_plus: '#8D8D8D',
    select_dark: '#8D8D8D',
    select_less: '#8D8D8D',
    select_light: '#8D8D8D',
    select_medium: '#8D8D8D',
    select_plus: '#8D8D8D'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
