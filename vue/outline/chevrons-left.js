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
	"class": "scarlab scarlab-chevrons-left",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M16 9L13.1937 11.8063V11.8063C13.0867 11.9133 13.0867 12.0867 13.1937 12.1937V12.1937L16 15"}), 
	_createElementVNode("path", {"d":"M11 9L8.15049 11.8495V11.8495C8.06737 11.9326 8.06737 12.0674 8.15049 12.1505V12.1505L11 15"})
  ]))
}
