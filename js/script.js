document.addEventListener("DOMContentLoaded", function(e) { 
    const headerInner = document.querySelector('#site-header > .header-inner');
    
    function addLogo(e) {
        const logo = `<img class="website-logo" src="https://taxianker.be/wp-content/uploads/2022/11/logo.png" alt="Taxi Anker Logo">`;
        headerInner.insertAdjacentHTML('afterbegin', logo);
    };

    function removeOldHeader(e) {
        document.querySelector('.page-header').classList.add('hidden');
    };

    const addPhoneHome = () => {
        const phoneNumber = `<a class="hide-lg" style="font-size: 20px; font-weight: 700;" href="tel:32492887798">+32 492 88 77 98</a>`;
        headerInner.insertAdjacentHTML('beforeend', phoneNumber);
    };

    addLogo();
    removeOldHeader();

    // const pagesToShowLogo = [
    //     '/prijzen/',
    //     '/contact/',
    //     '/algemene-voorwaarden-taxi-ancker/',
    //     '/privacybeleid/'
    // ];

    // const pageLocation = window.location.pathname;

    // if (pagesToShowLogo.includes(pageLocation)) {
    //     addLogo();
    //     removeOldHeader();
    // };

    addPhoneHome();
});