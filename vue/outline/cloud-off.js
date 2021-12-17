import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    "xmlns": "http://www.w3.org/2000/svg", 
	"width": "24", 
	"height": "24", 
	"viewBox": "0 0 24 24", 
	"fill": "none", 
	"stroke": "currentColor", 
	"stroke-width": "2", 
	"stroke-linecap": "round", 
	"stroke-linejoin": "round", 
	"class": "scarlab scarlab-cloud-off",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M9.75 3C12.9907 3 15.698 5.36832 16.3503 8.52703C16.4351 8.9375 16.8309 9.22222 17.25 9.22222V9.22222C19.3211 9.22222 21 10.9633 21 13.1111"}), 
	_createElementVNode("path", {"d":"M19.0908 16.5C18.547 16.8183 17.919 17 17.25 17H9.75C6.02208 17 3 13.866 3 9.99999C3 8.04131 3.77573 6.27052 5.02597 5"}), 
	_createElementVNode("path", {"d":"M3 3L21 18"})
  ]))
}
