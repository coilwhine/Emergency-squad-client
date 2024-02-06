class BrowserBehavior {

    scrollToTheTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

const browserBehavior = new BrowserBehavior();
export default browserBehavior;
