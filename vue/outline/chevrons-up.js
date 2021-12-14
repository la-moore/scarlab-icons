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
	"class": "scarlab scarlab-chevrons-up",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M15 16L12.1937 13.1937V13.1937C12.0867 13.0867 11.9133 13.0867 11.8063 13.1937V13.1937L9 16"}), 
	_createElementVNode("path", {"d":"M15 11L12.1505 8.15049V8.15049C12.0674 8.06738 11.9326 8.06738 11.8495 8.15049V8.15049L9 11"})
  ]))
}
