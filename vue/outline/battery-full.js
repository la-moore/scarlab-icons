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
	"class": "scarlab scarlab-battery-full",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M21 11V13"}), 
	_createElementVNode("path", {"d":"M6.99994 13L5.99994 11"}), 
	_createElementVNode("path", {"d":"M10.9999 13L9.99994 11"}), 
	_createElementVNode("path", {"d":"M14.9999 13L13.9999 11"}), 
	_createElementVNode("path", {"d":"M3 10.656C3 8.46878 3.46878 8 5.656 8H15.344C17.5312 8 18 8.46878 18 10.656V13.344C18 15.5312 17.5312 16 15.344 16H5.656C3.46878 16 3 15.5312 3 13.344V10.656Z"})
  ]))
}
