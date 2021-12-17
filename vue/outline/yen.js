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
	"class": "scarlab scarlab-yen",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M9 7L11.8832 11.3248V11.3248C11.9388 11.4081 12.0612 11.4081 12.1168 11.3248V11.3248L15 7"}), 
	_createElementVNode("path", {"d":"M12 11.5V17"}), 
	_createElementVNode("path", {"d":"M9 12H15"}), 
	_createElementVNode("path", {"d":"M9 15H15"})
  ]))
}
