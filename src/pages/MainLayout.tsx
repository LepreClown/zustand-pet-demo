import {Link, Outlet} from "react-router-dom";
import {AppLinks} from "../constants/appLinks.constants.ts";
import "./MainLayout.css"

export const MainLayout = () => {
	
	return (
		<div>
			<h1>HOME PAGE</h1>
			<ul className="links">
				{Object.entries(AppLinks).map(([key,value]) => (
					<li key={key} className="link">
						<Link to={value}>
							{key}
						</Link>
					</li>
				))}
			</ul>
			
			<Outlet />
		</div>
	)
}