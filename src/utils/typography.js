import Typography from 'typography';
import gray from 'gray-percentage';

const typography = new Typography({
  baseFontSize: "14px",
  baseLineHeight: 1.625,
  headerFontFamily: [
    "BlinkMacSystemFont",
    "-apple-system",
    "Segoe UI",
    "Roboto",
    "Helvetica",
    "Arial",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
  ],
  bodyFontFamily: [
    "BlinkMacSystemFont",
    "-apple-system",
    "Segoe UI",
    "Roboto",
    "Helvetica",
    "Arial",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
  ],
  bodyColor: "hsla(0,0%,0%,0.8)",
  headerWeight: 600,
  bodyWeight: "normal",
  boldWeight: 600,
  overrideStyles: ({ rhythm }) => ({
    h1: {
      fontSize: '16px',
      paddingBottom: `calc(${rhythm(1 / 4)} - 1px)`,
      marginBottom: rhythm(1 / 6),
      marginTop: rhythm(1.5),
    },
    h2: {
      fontSize: '16px',
      paddingBottom: `calc(${rhythm(1 / 4)} - 1px)`,
      marginBottom: rhythm(1 / 4),
      marginTop: rhythm(1.5),
    },
    h3: {
      fontSize: '14px',
      marginBottom: rhythm(1 / 2),
      marginTop: rhythm(1.5),
    },
    h4: {
      fontSize: '14px',
      fontWeight: 'normal',
      marginBottom: rhythm(1 / 2),
      marginTop: rhythm(1 / 2),
    },
    h6: {
      color: gray(47),
    },
    "h3,h4,h5,h6": {
      fontSize: '14px',
      paddingBottom: `calc(${rhythm(1 / 4)} - 1px)`,
      marginBottom: rhythm(1 / 4),
      marginTop: rhythm(1.5),
    },
    "ol,ul": {
      marginLeft: rhythm(1.25),
    },
    // children ol, ul
    li: {
      marginBottom: rhythm(1 / 8),
    },
    "li>ol,li>ul": {
      marginLeft: rhythm(1.25),
    },
    "a:hover,a:active": {
      textDecoration: "underline",
    },
    blockquote: {
      borderLeft: `4px solid ${gray(87)}`,
      color: gray(47),
      marginTop: 0,
      marginRight: 0,
      marginLeft: 0,
      paddingLeft: `calc(${rhythm(1 / 2)} - 1px)`,
    },
  }),
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const { rhythm, scale } = typography;
