const headerInner = document.querySelector('#site-header > .header-inner');
const logo = `<img src="http://taxianker.be/wp-content/uploads/2022/11/logo.png" alt="Taxi Anker Logo">`

function addLogo(e) {
    headerInner.insertAdjacentHTML('afterbegin', logo);
}

addLogo();