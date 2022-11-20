const headerInner = document.querySelector('#site-header > .header-inner');
const logo = `<img src="https://taxianker.be/wp-content/uploads/2022/11/logo.png" alt="Taxi Anker Logo">`

const pageLocation = document.title.toLowerCase();
const pagesToShowLogo = [
    'prijzen - taxi anker',
    'contacteer taxi anker - taxi anker',
    'algemene voorwaarden - taxi anker',
    'privacybeleid - taxi anker'
];

function addLogo(e) {
    headerInner.insertAdjacentHTML('afterbegin', logo);
};

if (pagesToShowLogo.includes(pageLocation)) {
    addLogo()
};