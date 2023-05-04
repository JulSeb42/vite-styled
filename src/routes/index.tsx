/*=============================================== Routes ===============================================*/

import { Homepage } from "pages/Homepage"
import { NotFound } from "pages/NotFound"

type RouteType = {
    path: string
    element: JSX.Element
}

export const routes: RouteType[] = [
    { path: "/", element: <Homepage /> },
    { path: "*", element: <NotFound /> },
]
