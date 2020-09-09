import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = key => {
    const [value, setValue] = useLocalStorage(key)

    const toggleDarkMode = e => {
        // toggle between two modes
        e.preventDefault();
        setValue(!value)
    }
    return [value, toggleDarkMode]
}