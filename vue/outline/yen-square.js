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
	"class": "scarlab scarlab-yen-square",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"}), 
	_createElementVNode("path", {"d":"M9 7L11.8832 11.3248V11.3248C11.9388 11.4081 12.0612 11.4081 12.1168 11.3248V11.3248L15 7"}), 
	_createElementVNode("path", {"d":"M12 11.5V17"}), 
	_createElementVNode("path", {"d":"M9 12H15"}), 
	_createElementVNode("path", {"d":"M9 15H15"})
  ]))
}
