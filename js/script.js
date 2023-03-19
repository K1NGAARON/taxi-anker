document.addEventListener("DOMContentLoaded", function(e) { 
    const headerInner = document.querySelector('#site-header > .header-inner');
    
    function addLogo(e) {
        const logo = `<img class="website-logo" src="https://taxianker.be/wp-content/uploads/2022/11/logo.png" alt="Taxi Anker Logo">`;
        headerInner.insertAdjacentHTML('afterbegin', logo);
    };

    function removeOldHeader(e) {
        const pageHeader = document.querySelector('.page-header');
        
        if (pageHeader) {
            pageHeader.classList.add('hidden');
        }
        else {
            return;
        }
    };

    const addPhoneHome = () => {
        const phoneNumber = `<a class="hide-lg" style="font-size: 20px; font-weight: 700;" href="tel:32492887798">+32 492 88 77 98</a>`;
        headerInner.insertAdjacentHTML('beforeend', phoneNumber);
    };

    function addContactBar(e) {
        const header = document.querySelector('#site-header');
        const contactBar = `
            <div class="contact-bar">
                <div class="row">
                    <div class="item">
                        <i aria-hidden="true" class="fas fa-phone-square-alt"></i>
                        <a class="phone" href="tel:+32 492 88 77 98">
                            +32 492 88 77 98
                        </a>
                    </div>
                    <div class="item">
                        <i aria-hidden="true" class="fas fa-envelope"></i>
                        <a class="mail" href="mailto:taxianker@gmail.com">
                            taxianker@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        `
        header.insertAdjacentHTML('afterbegin', contactBar);
    };

    addLogo();
    removeOldHeader();
    addPhoneHome();
    addContactBar();
});