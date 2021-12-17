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
	"class": "scarlab scarlab-repeat",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M15 6L10 6C8.11438 6 7.17157 6 6.58579 6.58579C6 7.17157 6 8.11438 6 10L6 11.5"}), 
	_createElementVNode("path", {"d":"M9 18L14 18C15.8856 18 16.8284 18 17.4142 17.4142C18 16.8284 18 15.8856 18 14L18 12.5"}), 
	_createElementVNode("path", {"d":"M3 9L5.56974 11.5697V11.5697C5.80737 11.8074 6.19263 11.8074 6.43026 11.5697V11.5697L9 9"}), 
	_createElementVNode("path", {"d":"M21 15L18.2252 12.2252V12.2252C18.1008 12.1008 17.8992 12.1008 17.7748 12.2252V12.2252L15 15"})
  ]))
}
