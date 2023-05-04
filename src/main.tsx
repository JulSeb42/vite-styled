/*=============================================== Main ===============================================*/

import ReactDOM from "react-dom/client"
import { ThemeProviderWrapper } from "tsx-library-julseb"

import App from "App"

import "tsx-library-julseb/index.css"
import "styles/index.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <ThemeProviderWrapper>
        <App />
    </ThemeProviderWrapper>
)
