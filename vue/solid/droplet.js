import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    "xmlns": "http://www.w3.org/2000/svg", 
	"width": "24", 
	"height": "24", 
	"viewBox": "0 0 24 24", 
	"fill": "currentColor", 
	"stroke": "none", 
	"fill-rule": "evenodd", 
	"clip-rule": "evenodd", 
	"class": "scarlab scarlab-droplet",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M21 13.5C21 18.4706 16.9706 22.5 12 22.5C7.02944 22.5 3 18.4706 3 13.5C3 10.796 4.40858 8.44449 5.97593 6.65272C7.55461 4.84799 9.3972 3.49253 10.4939 2.76287C11.411 2.15267 12.589 2.15267 13.5061 2.76287C14.6028 3.49253 16.4454 4.84799 18.0241 6.65272C19.5914 8.44449 21 10.796 21 13.5Z"})
  ]))
}
