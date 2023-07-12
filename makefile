# Generate components and pages automatically
# Usage for components: run in terminal `make component name=NameOfComponent`
# Usage for pages: run in terminal `make page pageName=NameOfPage`

define newline


endef

define INDEX_FILE
/*=============================================== $(name) exports ===============================================*/

export * from "components/$(name)/$(name)"
endef

define COMPONENT_FILE
/*=============================================== $(name) component ===============================================*/

import { } from "tsx-library-julseb"

import { Styled$(name) } from "components/$(name)/styles"
import type { $(name)Props } from "components/$(name)/types"

export const $(name) = ({  }: $(name)Props) => {
	return (
		<Styled$(name)>

		</Styled$(name)>
	)
}
endef

define STYLES_FILE
/*=============================================== $(name) styles ===============================================*/

import styled from "styled-components"
import { } from "tsx-library-julseb"

export const Styled$(name) = styled.div`
	
`
endef

define TYPES_FILE
/*=============================================== $(name) types ===============================================*/

export interface $(name)Props {
	
}
endef

define PAGE_FILE
/*=============================================== $(pageName) ===============================================*/

import { } from "tsx-library-julseb"

import { Page } from "components"

export const $(pageName) = () => {
    return (
        <Page title="$(pageName)">

        </Page>
    )
}
endef

component:
	mkdir src/components/$(name)
	touch src/components/$(name)/index.ts
	touch src/components/$(name)/$(name).tsx
	touch src/components/$(name)/styles.tsx
	touch src/components/$(name)/types.ts

	@echo '$(subst $(newline),\n,${INDEX_FILE})' > src/components/$(name)/index.ts
	@echo '$(subst $(newline),\n,${COMPONENT_FILE})' > src/components/$(name)/$(name).tsx
	@echo '$(subst $(newline),\n,${STYLES_FILE})' > src/components/$(name)/styles.tsx
	@echo '$(subst $(newline),\n,${TYPES_FILE})' > src/components/$(name)/types.ts
	@echo 'export * from "components/$(name)"' >> src/components/index.ts

page:
	touch src/pages/$(pageName).tsx
	@echo '$(subst $(newline),\n,${PAGE_FILE})' > src/pages/$(pageName).tsx