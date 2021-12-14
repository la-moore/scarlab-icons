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
	"class": "scarlab scarlab-arrow-up-alt",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M12 4L12 20"}), 
	_createElementVNode("path", {"d":"M18 10L12.0625 4.0625L12 4L11.9375 4.0625L6 10"})
  ]))
}
