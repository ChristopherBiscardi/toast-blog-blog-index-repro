import { h } from "/web_modules/preact.js";
import { Helmet } from "/web_modules/react-helmet.js";
import { MDXProvider } from "/web_modules/@mdx-js/preact.js";
const components = {
    codeblock: (props)=>h("div", {
            class: "bg-gray-900",
            dangerouslySetInnerHTML: {
                __html: props.children
            }
        })
};
export default function PageWrapper(props) {
    return h(MDXProvider, {
        components: components
    }, h("div", null, h(Helmet, null, h("link", {
        rel: "stylesheet",
        href: "/styles.css"
    })), props.children));
};
