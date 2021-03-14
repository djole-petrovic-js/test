class Player {
    constructor(config) {
        this.name = config.name;

        this.test = config.test;
        this.version = config.version;

        this.anotherTest1 = config.anotherTest1;
        this.anotherTest2 = config.anotherTest2;

        this.el = config.el;
        this.anotherTest3 = config.anotherTest3;
        this.nesto = config.nesto;
    }

    play() {
        console.log('play');
    }

    index() {
        console.log('index');

        alert('da');

        setTimeout(() => {
            
        }, timeout);
    }
    pause() {
        console.log('pause');
    }

    next() {
        console.log('nexr');
    }
}