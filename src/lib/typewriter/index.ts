// https://github.com/ernestmarcinko/typewriter/blob/master/src/typewriter.js

class TypeWriter {
    #defaults = {
        pauseMin: 100,
        pauseMax: 170,
        keepBlinking: true,
        className: 'typewriter',
        cursor: '|',
        injectStyles: true,
        autoStart: true,
        onStart: null,
        onFinish: null,
        onTask: null
    };
    #params;
    #node;
    #tasks = [];
    #executing = false;
    #firstStart = true;
    static #injectedStyles = {};

    constructor(node, params) {
        this.#node = node;
        this.#params = {...this.#defaults, ...params};
        if ( this.#params.injectStyles ) {
            this.#injectStyles();
        }
        console.log(this.#node)
        this.#node.dataset['cursor'] = this.#params.cursor;
    }

    write( text ) {
        let _this = this;
        [...text].forEach((c) => {
            _this.#tasks.push({
                'type': 'write',
                'char': c
            })
        });
        if ( this.#params.autoStart ) {
            this.start();
        }
        return this;
    }

    delete( n = 1 ) {
        for(let i=0; i<n; i++) {
            this.#tasks.push({
                'type': 'delete',
                'all': false
            });
        }
        if ( this.#params.autoStart ) {
            this.start();
        }
        return this;
    }

    wait( t=1000 ) {
        this.#tasks.push({
            'type': 'wait',
            't': t
        });
        if ( this.#params.autoStart ) {
            this.start();
        }
        return this;
    }

    wipe() {
        this.#tasks.push({
            'type': 'delete',
            'all': true
        });
        if ( this.#params.autoStart ) {
            this.start();
        }
        return this;
    }

    config( params ) {
        this.#tasks.push({
            'type': 'config',
            'params': params
        });
        return this;
    }

    start() {
        if ( this.#firstStart ) {
            this.#node.classList.add(this.#params.className);
            this.#firstStart = false;
        }
        if ( !this.#executing ) {
            this.#params.onStart?.(this.#node, this.#params);
            this.#execute();
        }
        return this
    }

    #injectStyles() {
        if ( !TypeWriter.#injectedStyles[this.#params.className] ) {
            const str = `
            .${this.#params.className}:not(.noblink):after{animation:blink 1s linear infinite;content:attr(data-cursor)}@keyframes blink{0%{opacity:0}50%{opacity:0}51%{opacity:1}}`;
            const style = document.createElement('style');
            style.textContent = str;
            document.head.append(style);
            TypeWriter.#injectedStyles[this.#params.className] = true;
        }
    }

    #execute() {
        if ( this.#tasks.length > 0 ) {
            this.#executing = true;
            const task = this.#tasks.shift();
            let pause = this.#randomInt(this.#params.pauseMin, this.#params.pauseMax)

            this.#params.onTask?.(task, this.#node, this.#params);

            if ( task.type == 'write' ) {
                setTimeout(()=>{
                    this.#add(task.char);
                    this.#execute();
                }, pause);
            } else if ( task.type == 'delete' ) {
                setTimeout(()=>{
                    this.#remove(task.all);
                    this.#execute();
                }, pause);
            } else if ( task.type == 'wait' ) {
                setTimeout(()=>{
                    this.#execute();
                }, task.t);
            } else if ( task.type == 'config' ) {
                this.#params = {...this.#params, ...task.params};
                this.#execute();
            }
        } else {
            this.#executing = false;
            this.#finish();
        }
    }

    #add(c) {
        this.#node.innerHTML += c;
    }

    #remove( all = false ) {
        if ( all ) {
            this.#node.innerHTML = ''; 
        } else {
            this.#node.innerHTML = 
            this.#node.innerHTML.substring(0, this.#node.innerHTML.length-1);
        }
    }

    #finish() {
        this.#params.onFinish?.(this.#node, this.#params);

        if ( !this.#params.keepBlinking ) {
            this.#node.classList.add('noblink');
        }
    }

    #randomInt = (min, max) => {
        return Math.random() * (max - min) + min;
    }
}

export default TypeWriter
