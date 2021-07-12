export const setThemeCssVariable = (theme: string) => {
    const root = document.querySelector(':root') as HTMLElement
    // меняем переменные css 
    // --theme-default-header: var(--theme-neitral-header)
    // --theme-default-bg: var(--theme-neitral-bg)

    const variables = ['header', 'bg']
    variables.forEach(elem => {
        root.style.setProperty(`--theme-default-${elem}`, `var(--theme-${theme}-${elem})`)
    })
}
    // root.style.setProperty('--theme-header-default', `var(--theme-${theme}-header)`)
    // root.style.setProperty('--theme-default-bg', `var(--theme-${theme}-bg)`)