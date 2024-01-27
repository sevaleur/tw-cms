import { buildLegacyTheme, defineConfig } from "sanity"

const props = {
  "--light": "#ffeadb", 
  '--dark': '#15252d',
  '--orange': '#fc5200',
  '--grey': '#cfd7d6',
  '--green': '#03d89f',
}

export const newTheme = buildLegacyTheme({
  '--dark': props['--dark'],
  '--light': props['--light'],

  '--component-bg': props['--light'],
  '--component-text-color': props['--dark'],

  '--gray': props['--grey'],

  /* Brand */
  '--brand-primary': props['--light'],

  // Default button
  '--default-button-color': props['--green'],
  '--default-button-primary-color': props['--dark'],
  '--default-button-success-color': props['--green'],
  '--default-button-warning-color': props['--orange'],
  '--default-button-danger-color': props['--orange'],

  /* State */
  '--state-info-color': props['--grey'],
  '--state-success-color': props['--green'],
  '--state-warning-color': props['--orange'],
  '--state-danger-color': props['--orange'],

  /* Navbar */
  '--main-navigation-color': props['--orange'],
  '--main-navigation-color--inverted': props['--dark'],

  '--focus-color': props['--dark'],
})