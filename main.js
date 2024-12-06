const accordionBtns = document.querySelectorAll(".accordion-btn");

accordionBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        accordionBtns.forEach(otherBtn => {
            const panel = otherBtn.nextElementSibling;
            const isActive = otherBtn === btn && !otherBtn.classList.contains("active");

            //   update Button Status
            otherBtn.classList.toggle("active", isActive);

            // update panel height  
            panel.style.maxHeight = isActive ? `${panel.scrollHeight}px` : null;

            toggleIcons(otherBtn, isActive);
        });
    });
});

    //  Change icons func
    function toggleIcons(btn, isActive) {
    const iconPlus = btn.querySelector(".icon-plus");
    const iconMinus = btn.querySelector(".icon-minus");

    iconPlus.style.display = isActive ? "none" : "inline";
    iconMinus.style.display = isActive ? "inline" : "none";
}
