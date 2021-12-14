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
	"class": "scarlab scarlab-code",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M17 15L19.6462 12.3538V12.3538C19.8416 12.1584 19.8416 11.8416 19.6462 11.6462V11.6462L17 9"}), 
	_createElementVNode("path", {"d":"M7 9L4.35151 11.6485V11.6485C4.15738 11.8426 4.15738 12.1574 4.35151 12.3515V12.3515L7 15"})
  ]))
}
