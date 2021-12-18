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
	"class": "scarlab scarlab-bold",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M5 4H12.9777C18.3408 4 18.3408 12 12.9777 12H5"}), 
	_createElementVNode("path", {"d":"M5 12H14.8824C20.3725 12 20.3725 20 14.8824 20H5"}), 
	_createElementVNode("path", {"d":"M5 20V4"})
  ]))
}
