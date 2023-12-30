"use client"
import React from "react"
import createCache from "@emotion/cache"
import { useServerInsertedHTML } from "next/navigation"
import { ThemeProvider, Theme as MuiThemeType } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import CssBaseline from "@mui/material/CssBaseline"
import { lightTheme, darkTheme } from "./mui-themes"
import { CacheProvider } from "@emotion/react"

export enum Themes {
  LIGHT = "light",
  DARK = "dark",
}
type Theme = (typeof Themes)[keyof typeof Themes];

const useActiveThemeProvider = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  const [activeTheme, setActiveTheme] = React.useState<Theme>(Themes.DARK)

  const switchTheme = () => {
    setActiveTheme(prevTheme => prevTheme === Themes.DARK ? Themes.LIGHT : Themes.DARK)
  }
  React.useEffect(() => {
    setActiveTheme(prefersDarkMode ? Themes.DARK : Themes.LIGHT)
  }, [prefersDarkMode])

  return {
    activeTheme,
    setActiveTheme,
    switchTheme
  }
}

export const ActiveThemeContext = React.createContext<
  ReturnType<typeof useActiveThemeProvider>
>({ activeTheme: Themes.DARK, setActiveTheme: () => {}, switchTheme: () => {}})

// This implementation is from emotion-js
// https://github.com/emotion-js/emotion/issues/2928#issuecomment-1319747902
export function ThemeRegistry(props: any) {
  const { options, children } = props

  const [{ cache, flush }] = React.useState(() => {
    const cache = createCache(options)
    cache.compat = true
    const prevInsert = cache.insert
    let inserted: string[] = []
    cache.insert = (...args) => {
      const serialized = args[1]
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name)
      }
      return prevInsert(...args)
    }
    const flush = () => {
      const prevInserted = inserted
      inserted = []
      return prevInserted
    }
    return { cache, flush }
  })

  useServerInsertedHTML(() => {
    const names = flush()
    if (names.length === 0) {
      return null
    }
    let styles = ""
    for (const name of names) {
      styles += cache.inserted[name]
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    )
  })

  const { activeTheme, ...restUseActiveThemeProvider } = useActiveThemeProvider()

  return (
    <CacheProvider value={cache}>
      <ActiveThemeContext.Provider value={{ activeTheme, ...restUseActiveThemeProvider }}>
        <ThemeProvider theme={activeTheme === Themes.DARK ? darkTheme : lightTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ActiveThemeContext.Provider>
    </CacheProvider>
  )
}
