document.addEventListener("DOMContentLoaded", function(e) { 
    const headerInner = document.querySelector('#site-header > .header-inner');
    
    function addLogo(e) {
        const logo = `<img src="https://taxianker.be/wp-content/uploads/2022/11/logo.png" alt="Taxi Anker Logo">`;
        headerInner.insertAdjacentHTML('afterbegin', logo);
    };

    function removeOldHeader(e) {
        document.querySelector('.page-header').classList.add('hidden');
    };

    const addPhoneHome = () => {
        const phoneNumber = `<a class="hide-lg" style="font-size: 20px; font-weight: 700;" href="tel:32492887798">+32 492 88 77 98</a>`;
        headerInner.insertAdjacentHTML('beforeend', phoneNumber);
    };

    const pagesToShowLogo = [
        'onze prijzen bij taxi anker',
        'contacteer taxi anker voor meer informatie | taxi anker',
        'algemene voorwaarden | taxi anker',
        'privacybeleid | taxi anker'
    ];

    const pageLocation = document.title.toLowerCase();

    if (pagesToShowLogo.includes(pageLocation)) {
        addLogo();
        removeOldHeader();
    };

    addPhoneHome();
});