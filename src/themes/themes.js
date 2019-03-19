const darkThemeColors = {
  perc60: 'white',
  perc30: 'hotpink',
  perc10: 'purple',
  bgMain: '#333',
  bgLight: '#666'
}

export const darkTheme = {
  text: 
  {
    primary: {
      color: darkThemeColors.perc60,
      fontWeight: 'default'
    },
    secondary: {
      color: darkThemeColors.perc60,
      opacity: 0.8,
      fontWeight: 300
    },
    highlight10Perc: {
      color: darkThemeColors.perc10
    },
    highlight30Perc: {
      color: darkThemeColors.perc30
    }
  },
  background: {
    primary: {
      backgroundColor: darkThemeColors.bgMain
    },
    secondary: {
      backgroundColor: darkThemeColors.bgLight
    },
    highlight10Perc: {
      backgroundColor: darkThemeColors.perc10
    },
    highlight30Perc: {
      backgroundColor: darkThemeColors.perc30
    }
  }
}