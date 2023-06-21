module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "Primary": {
          "100": "#003EB3",
          "300": "#0074F0",
          "500": "#14A9FF",
          "700": "#85DCFF",
          "pink": "#f6b8b8ff"
        },
        "Gray": {
          "500": "#595959",
          "700": "#999999",
          "900": "#D9D9D9",
          "Black": "#000000",
          "White": "#FFFFFF"
        },
        "Success": {
          "300": "#199033",
          "500": "#32A94C",
          "700": "#4CC366"
        },
        "Danger": {
          "300": "#A22020",
          "500": "#BF2626",
          "700": "#E14747"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "FourUnits": "64px",
        "Unit": "16px",
        "ThreeUnits": "48px",
        "SixUnits": "96px",
        "TwoUnits": "32px",
        "OneAndHalfUnits": "24px",
        "FiveUnits": "80px",
        "HalfUnit": "8px"
      },
      "borderRadius": {
        "Radius4": "4px",
        "Radius8": "8px",
        "Round": "50%",
        "Radius2": "2px"
      },
      "scale": {
        "Large": "144px",
        "XLarge": "192px",
        "XXLarge": "288px",
        "Medium": "96px",
        "Small": "48px",
        "MaxWidth": "1400px",
        "XSmall": "0.83vw"
      }
    }
  },
  "plugins": [],
  "content": [
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ]
}