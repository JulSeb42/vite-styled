/*=============================================== Header ===============================================*/

import { useContext } from "react"
import {
    Header as Container,
    ButtonIcon,
    ThemeContext,
    uuid,
} from "tsx-library-julseb"
import type { ThemeContextProps } from "tsx-library-julseb/types"
import { NavLink } from "react-router-dom"

import { siteData } from "data"

import type { NavItemType } from "types"

export const Header = () => {
    const { toggleTheme, selectedTheme } = useContext(
        ThemeContext
    ) as ThemeContextProps

    const links: NavItemType[] = [
        {
            text: "Home",
            to: "/",
            end: true,
        },
    ]

    const navLinks = (links: NavItemType[]) =>
        links.map(({ text, to, onClick, end }) =>
            to ? (
                <NavLink to={to} end={end} key={uuid()}>
                    {text}
                </NavLink>
            ) : (
                <button onClick={onClick} key={uuid()}>
                    {text}
                </button>
            )
        )

    return (
        <Container logo={{ text: siteData.name }}>
            {navLinks(links)}

            <ButtonIcon
                icon={selectedTheme === "dark" ? "sun" : "moon"}
                size={24}
                variant="transparent"
                color="background"
                onClick={toggleTheme}
                label="Toggle theme"
            />
        </Container>
    )
}
