"use client";
import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

/*
for rented123, use this theme settings as little as possible:
 - components
 - button colors
 - for palette: mode,background,primary,secondary and aciton
*/
interface Props {
  children: React.ReactNode;
}

/* const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
  palette: {
    action: {
      active: "#ffffff",
      hover: "#C1DFBE",
      hoverOpacity: 0.2,
      selected: "#C1DFBE",
      selectedOpacity: 0.2,
      disabledBackground: "#0000006F",
    },
    background: {
      paper: "#121212",
    },
    primary: {
      main: "#ffffff",
      dark: "#ffffff",
      light: "#025D4A",
    },
    secondary: {
      main: "#ffffff",
      dark: "#00990D",
      light: "#C1DFBE",
    },
    info: {
      main: "#EEF6EE",
    },
    error: {
      main: "#E03813",
    },
    common: {
      white: "rgba(255, 255, 255);",
    },
  },
}); */
const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000", // Deep black background
      paper: "#121212", // Slightly lighter black
    },
    primary: {
      main: "#FFFFFF", // Default button color (white bg)
      contrastText: "#000000", // Black text for primary button
    },
    secondary: {
      main: "#B3B3B3", // Light gray for secondary elements
      contrastText: "#FFFFFF", // White text
    },
    action: {
      active: "#FFFFFF", // White active icons
      hover: "rgba(255, 255, 255, 0.9)", // Opacity effect on hover
      selected: "#B3B3B3", // Light gray selection color
      disabledBackground: "#181818", // Dark gray for disabled elements
    },
    /*  text: {
      primary: "#FFF",
      secondary: "#B3B3B3", // Light gray text
    },
    success: {
      main: "#1DB954", // Green for play/pause CTA buttons only
    },
    info: {
      main: "#EEF6EE",
    },
    common: {
      white: "rgba(255, 255, 255);",
    }, */
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          variants: {
            contained: {
              backgroundColor: "#FFFFFF",
            },
            text: {
              backgroundColor: "#FFFFFF",
            },
            color: "#000000", // Default button text: black
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#FFFFFF", // Default link color
          textDecoration: "none",
          transition: "opacity 0.3s ease",
          "&:hover": {
            opacity: 0.7, // Opacity effect on hover
          },
        },
      },
    },
  },
});
export const AppTheme = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
