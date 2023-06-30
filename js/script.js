(function () {
    let menus = document.querySelectorAll(".menu");

    menus.forEach(menu => {
        let toggler = menu.querySelector(".menu__toggler");
        let togglerIcon = toggler.querySelector(".fas");

        toggler.addEventListener('click', () => {
            menu.classList.toggle("menu_showed");
            togglerIcon.classList.toggle('fa-times');
            togglerIcon.classList.toggle('fa-bars');
        });
    })
})();