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
	"class": "scarlab scarlab-formatting",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M6 6V4.5V4.5C6 4.22386 6.22386 4 6.5 4H17.5C17.7761 4 18 4.22386 18 4.5V4.5V6"}), 
	_createElementVNode("path", {"d":"M12 4V20"}), 
	_createElementVNode("path", {"d":"M10 20H14"})
  ]))
}
