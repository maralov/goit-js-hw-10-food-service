import { theme } from './constants'
const LOCALSTORAGE_THEME_KEY = 'current-theme';
const checkboxEl = document.querySelector('#theme-switch-toggle');

const setLightTheme = () => {
  document.body.classList.remove(theme.DARK)
  document.body.classList.add(theme.LIGHT)
  localStorage.setItem(LOCALSTORAGE_THEME_KEY, theme.LIGHT)
  checkboxEl.checked = false
}

const setDarkTheme = () => {
  document.body.classList.remove(theme.LIGHT)
  document.body.classList.add(theme.DARK)
  localStorage.setItem(LOCALSTORAGE_THEME_KEY, theme.DARK)
  checkboxEl.checked = true
}

const onCkeckboxChange = ({ target }) => {
  if (target.checked) {
    setDarkTheme()
  } else {
    setLightTheme()
  }
}

const setDefaultTheme = ({ DARK }) => {
  const themeDefault = localStorage.getItem(LOCALSTORAGE_THEME_KEY)

  switch (themeDefault) {
    case DARK:
      setDarkTheme()
      break;

    default:
      setLightTheme();
  }

}

setDefaultTheme(theme)

checkboxEl.addEventListener('change', onCkeckboxChange)
