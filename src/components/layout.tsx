import type { PropsWithChildren } from "react";

const Layout = (props: PropsWithChildren) => (
	<main className="flex justify-center h-screen items-center">
		<div>
			{props.children}
		</div>
	</main>
)

export default Layout


