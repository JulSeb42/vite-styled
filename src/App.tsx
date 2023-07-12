/*=============================================== App ===============================================*/

import { useContext } from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { ThemeContext, ThemeProvider } from "tsx-library-julseb"
import type { ThemeContextProps } from "tsx-library-julseb/types"

import { routes } from "routes"

const App = () => {
    const { theme } = useContext(ThemeContext) as ThemeContextProps

    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={createBrowserRouter(routes)} />
        </ThemeProvider>
    )
}

export default App
