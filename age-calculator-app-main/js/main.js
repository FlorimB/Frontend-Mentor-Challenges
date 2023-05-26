import htmlStructure from "./modules/semantic.js";
import appFunctions from './modules/functins.js';

document.addEventListener('DOMContentLoaded', () => {
    let app = document.querySelector('#app');

    class Application {
        static include(parent) {
            parent.innerHTML = htmlStructure;
            appFunctions.verify();
            appFunctions.calculate();

            return parent;
        }
    }

    Application.include(app);
});