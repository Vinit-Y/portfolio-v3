declare module 'tailwindcss/lib/util/flattenColorPalette' {
  type ColorObject = { [key: string]: string | ColorObject };
  function flattenColorPalette(colors: ColorObject): { [key: string]: string };
  export default flattenColorPalette;
} 