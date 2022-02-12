import { Scroll } from "./Scroll.js";
import { Menu } from "./Menu.js";

const App = {
	init() {
		Menu.toggleMenuButton.addEventListener("click", Menu.toggleMenu);

		Scroll.init(Menu.closeMenu);
	},
};

App.init();
