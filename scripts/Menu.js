export const Menu = {
	toggleMenuButton: document.querySelector(".vegie-menu"),
	menuElement: document.querySelector(".menu"),
	menuIsOpened: false,

	toggleMenu(event) {
		event.preventDefault();

		Menu.toggleMenuButton.classList.toggle("on");
		Menu.menuElement.classList.toggle("opened");

		Menu.menuIsOpened = !Menu.menuIsOpened;
	},

	closeMenu() {
		Menu.toggleMenuButton.classList.remove("on");
		Menu.menuElement.classList.remove("opened");

		Menu.menuIsOpened = false;
	},
};
