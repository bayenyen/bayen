// client/src/configs/theme.configs.js
import { createTheme } from "@mui/material/styles";
import { colors } from "@mui/material";

export const themeModes = {
  dark: "dark",
  light: "light"
};

/**
 * Option A - Clean Instagram App Look
 * - Light default: white background, subtle greys
 * - Accent: soft Instagram gradient used sparingly for primary actions
 * - Typography: Inter for UI, keep Grand Hotel available for logo usage
 *
 * Safe: uses MuiCssBaseline overrides and component overrides only.
 */

const instaAccentGradient = "linear-gradient(90deg, #feda75 0%, #fa7e1e 25%, #d62976 50%, #962fbf 75%, #4f5bd5 100%)";

const themeConfigs = {
  custom: ({ mode }) => {
    const isDark = mode === themeModes.dark;

    const customPalette = isDark
      ? {
          primary: {
            // subtle bluish-purple for dark mode accents
            main: "#9a7cff",
            contrastText: "#ffffff"
          },
          secondary: {
            main: "#d1c4ff",
            contrastText: "#000000"
          },
          background: {
            default: "#0b0b0b",
            paper: "#111111"
          },
          text: {
            primary: "#ffffff",
            secondary: "rgba(255,255,255,0.7)"
          }
        }
      : {
          // Light mode (Instagram app style)
          primary: {
            // primary is a calm indigo used for icons/buttons (accents only)
            main: "#405DE6",
            contrastText: "#ffffff"
          },
          secondary: {
            main: "#262626"
          },
          background: {
            default: "#ffffff", // main page background
            paper: "#ffffff"     // surfaces remain white for app look
          },
          text: {
            primary: "#000000",
            secondary: "rgba(0,0,0,0.6)"
          }
        };

    return createTheme({
      palette: {
        mode,
        ...customPalette
      },

      typography: {
        // UI font
        fontFamily: [
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif"
        ].join(","),
        // Keep headings crisp
        h1: { fontWeight: 600 },
        h2: { fontWeight: 600 },
        h3: { fontWeight: 600 },
        h4: { fontWeight: 600 },
        h5: { fontWeight: 600 },
        h6: { fontWeight: 600 }
      },

      components: {
        MuiCssBaseline: {
          // Global styles: import Inter and provide subtle page scaffolding.
          styleOverrides: `
            /* Import UI font */
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Grand+Hotel&display=swap');

            html, body, #root {
              height: 100%;
            }

            body {
              margin: 0;
              padding: 0;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              background-color: ${isDark ? "#0b0b0b" : "#ffffff"};
              color: ${isDark ? "#ffffff" : "#000000"};
            }

            /* subtle page-level sheen for light mode (keeps it minimal) */
            ${!isDark ? `
            body::after {
              content: "";
              position: fixed;
              inset: 0;
              pointer-events: none;
              background: radial-gradient(1200px 600px at 10% 10%, rgba(79,91,213,0.04), transparent 10%),
                          radial-gradient(800px 400px at 90% 90%, rgba(214,41,118,0.03), transparent 12%);
              z-index: 0;
            }` : ""}

            /* utility: subtle smooth transitions */
            * {
              transition: background-color 180ms ease, color 180ms ease, box-shadow 180ms ease;
            }

            /* small helper classes for gradient accents if needed */
            .insta-accent {
              background: ${instaAccentGradient};
              -webkit-background-clip: text;
              background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          `
        },

        MuiAppBar: {
          styleOverrides: {
            root: {
              // AppBar: clean, white surface with subtle shadow like Instagram app
              backgroundColor: isDark ? "#0f0f0f" : "#ffffff",
              color: isDark ? "#ffffff" : "#000000",
              boxShadow: isDark
                ? "0 1px 12px rgba(0,0,0,0.6)"
                : "0 1px 6px rgba(16,24,40,0.08)",
              backdropFilter: "blur(6px)"
            }
          }
        },

        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: 12,
              textTransform: "none",
              paddingLeft: 16,
              paddingRight: 16,
              boxShadow: "none"
            },
            containedPrimary: {
              // primary contained uses a subtle gradient accent but stays clean
              backgroundImage: isDark
                ? "linear-gradient(90deg, rgba(154,124,255,0.95), rgba(79,91,213,0.95))"
                : instaAccentGradient,
              color: "#fff",
              backgroundSize: "200% 200%",
              transition: "background-position 400ms ease, transform 120ms ease",
              '&:hover': {
                backgroundPosition: "100% 0",
                transform: "translateY(-1px)"
              }
            },
            outlined: {
              borderRadius: 12
            }
          },
          defaultProps: {
            disableElevation: true
          }
        },

        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 16,
              boxShadow: isDark
                ? "0 6px 18px rgba(0,0,0,0.6)"
                : "0 6px 18px rgba(16,24,40,0.06)",
              background: isDark ? "#0f0f0f" : "#ffffff"
            }
          }
        },

        MuiPaper: {
          styleOverrides: {
            root: {
              borderRadius: 12
            }
          }
        },

        MuiTextField: {
          defaultProps: {
            variant: "outlined"
          }
        },

        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              borderRadius: 10,
              backgroundColor: isDark ? "rgba(255,255,255,0.02)" : "#ffffff",
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.08)"
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.16)"
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: isDark ? "#9a7cff" : "#405DE6"
              }
            }
          }
        },

        MuiAvatar: {
          styleOverrides: {
            root: {
              borderRadius: 12
            }
          }
        },

        MuiBadge: {
          styleOverrides: {
            badge: {
              // small gradient badge accent
              background: isDark ? "linear-gradient(90deg,#9a7cff,#4f5bd5)" : instaAccentGradient,
              color: "#fff",
              boxShadow: "0 2px 6px rgba(0,0,0,0.12)"
            }
          }
        },

        MuiTooltip: {
          styleOverrides: {
            tooltip: {
              borderRadius: 8,
              backgroundColor: isDark ? "#222" : "#111",
              color: "#fff",
              fontSize: "0.85rem"
            }
          }
        }
      }
    });
  }
};

export default themeConfigs;
