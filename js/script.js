document.addEventListener("DOMContentLoaded", function(e) { 
    const headerInner = document.querySelector('#site-header > .header-inner');
    const logo = `<img src="https://taxianker.be/wp-content/uploads/2022/11/logo.png" alt="Taxi Anker Logo">`

    function addLogo(e) {
        headerInner.insertAdjacentHTML('afterbegin', logo);
    };

    function removeOldHeader(e) {
        document.querySelector('.page-header').classList.add('hidden');
    }

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
});