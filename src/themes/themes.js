
/** Theme reference: 
 *  https://kuler.adobe.com/yellow-submarine2-color-theme-12084275/edit/?copy=true&base=2&rule=Custom&selected=2&name=Copy%20of%20yellow-submarine2&mode=rgb&rgbvalues=0.9490196078431372,0.20784313725490197,0.3568627450980392,0.1578947368421225,0.11368421052631579,0.24,0.00784313725490196,0.6509803921568628,0.5803921568627451,0.9372549019607843,0.7176470588235294,0.01568627450980392,0.9529411764705882,0.5372549019607843,0.00784313725490196&swatchOrder=0,1,2,3,4 
 * */

const lightThemeColors = {
  normalText: '#222',
  lighterText: '#444',
  darkerText: '#111',
  complementText: '#FFF',
  perc60: 'white',
  perc30: '#02A694',
  perc10: '#F2355B',
  bgLight: '#FFF',
  bgDark: '#FAFAFA'
}

export const lightTheme = {
  text: 
  {
    primary: {
      color: lightThemeColors.normalText,
      fontWeight: 'default'
    },
    secondary: {
      color: lightThemeColors.lighterText,
      fontWeight: 300
    },
    highlight10Perc: {
      color: lightThemeColors.perc10
    },
    highlight30Perc: {
      color: lightThemeColors.perc30
    },
    againstPrimaryBg: {
      color: lightThemeColors.complementText
    }
  },
  background: {
    primary: {
      backgroundColor: lightThemeColors.bgDark
    },
    secondary: {
      backgroundColor: lightThemeColors.bgLight
    },
    highlight10Perc: {
      backgroundColor: lightThemeColors.perc10
    },
    highlight30Perc: {
      backgroundColor: lightThemeColors.perc30
    }
  }
}