import React from "react";
import "./Navbar.css";

const Navbar = ({ isMenuOpen }) => {
	const menuItems = [
		{ id: 1, label: "Home", link: "/" },
		{ id: 2, label: "About", link: "/about" },
		{ id: 3, label: "Menu", link: "/menu" },
		{ id: 4, label: "Reservations", link: "/reservations" },
		{ id: 5, label: "Order Online", link: "/orders" },
		{ id: 6, label: "Login", link: "/login" }
	];

	return (
		<nav className={`nav ${isMenuOpen ? "open" : ""}`}>
			<ul className={`menu-list ${isMenuOpen ? "open" : ""}`}>
				{menuItems.map(item => (
					<li key={item.id}>
						<a href={item.link} className="link">
							{item.label}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;