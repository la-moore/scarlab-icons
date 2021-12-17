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
	"class": "scarlab scarlab-maximaize",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M8 12L8 15.5V15.5C8 15.7761 8.22386 16 8.5 16V16L12 16"}), 
	_createElementVNode("path", {"d":"M16 12V8.5V8.5C16.0001 8.22388 15.7761 8 15.5 8V8L12 8"})
  ]))
}
