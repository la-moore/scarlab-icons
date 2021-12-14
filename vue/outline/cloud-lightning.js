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
	"class": "scarlab scarlab-cloud-lightning",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M6.27126 16C4.31103 14.7751 3 12.5463 3 10C3 6.13401 6.02208 3 9.75 3C13.1779 3 16.009 5.64982 16.4425 9.08201C16.4575 9.20119 16.5708 9.28382 16.6895 9.26537C16.8724 9.23695 17.0595 9.22222 17.25 9.22222C19.3211 9.22222 21 10.9633 21 13.1111C21 14.2576 20.5216 15.2882 19.7605 16"}), 
	_createElementVNode("path", {"d":"M13 13L11 17H15L13 21"})
  ]))
}
