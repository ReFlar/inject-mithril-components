import '@webcomponents/custom-elements'

import JSON5 from 'JSON5';

export default class FlarumComponentElement extends HTMLElement {
    constructor() {
        super();

        const componentName = this.getAttribute('data-component');

        if (componentName == null) return;

        const Component = flarum.core.compat[componentName];

        if (Component == null) throw new Error(`${componentName} does not exist or isn't public`);

        const attributes = this.getAttributeNames().reduce((obj, str) => {
            if (str === 'data-component') return obj;

            let value = this.getAttribute(str);

            if (str.startsWith(':')) {
                str = str.slice(1);

                try {
                    value = JSON5.parse(value);
                } catch (e) {
                    try {
                        value = eval(value);
                    } catch (er) {
                        console.error(`Error parsing '${str}' attribute value of '${value}`, e, er);
                    }
                }
            }

            obj[str] = value;
            return obj;
        }, {});

        const component = Component.component(attributes);

        m.mount(this, component);
    }
}
