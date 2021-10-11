function h(type, props, ...args) {
    let outDom;
    let comp;
    let textDom;
    if (typeof type==='string') {
        outDom = document.createElement(type);
    } else if (typeof type==='function') {
        comp = new type();
        outDom = comp.render();
        comp._dom = outDom;
        outDom._component = comp;
    }

    Object.keys(props || {}).forEach(k => {
        outDom[k] = props[k];
    });

    args.forEach(ch => {
        if (typeof ch==='string') {
            textDom = document.createTextNode(ch);
            outDom.appendChild(textDom);
        } else {
            outDom.appendChild(ch);
        }
    });

    return outDom;
}


function render(dom, parentDom) {
    parentDom.appendChild(dom);
}

class Component {
    constructor() {
        this.props = {};
        this.state = {};
        this._dom = null;
    }


    setState(state) {
        let newDom;
        let oldDom = this._dom;
        let parentDom = oldDom.parentNode;
        this.state = state;
        newDom = this.render();
        newDom._component = this;
        parentDom.replaceChild(newDom, oldDom);
        this._dom = newDom;
    }
}




export { h, render, Component }