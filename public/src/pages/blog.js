import { h } from "/web_modules/preact.js";
export default ((props)=>h("div", null, h("h1", null, "blog posts!"), h("a", {
        href: "/blog/some-post"
    }, "post"))
);
