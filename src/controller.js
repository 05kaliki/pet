(function exportController () {   
    function Controller (name) {
        this.name = name;
        this.initialisePet();

        document.querySelector('#grow-button').addEventListener('click', () => {
            this.growUp();
        });
        document.querySelector('#feed-button').addEventListener('click', () => {
            this.feed();
        });
        document.querySelector('#walk-button').addEventListener('click', () => {
            this.walk();
        });
    };

    Controller.prototype = {
        initialisePet() {

        },
        XXXX() {

        }
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Controller;
    } else {
        window.Controller = Controller;
    };
}());