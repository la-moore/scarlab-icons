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
	"class": "scarlab scarlab-collection",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M17 8C18.8856 8 19.8284 8 20.4142 8.58579C21 9.17157 21 10.1144 21 12L21 16C21 17.8856 21 18.8284 20.4142 19.4142C19.8284 20 18.8856 20 17 20L16 20L8 20L7 20C5.11438 20 4.17157 20 3.58579 19.4142C3 18.8284 3 17.8856 3 16L3 12C3 10.1144 3 9.17157 3.58579 8.58579C4.17157 8 5.11438 8 7 8L8 8L16 8L17 8Z"}), 
	_createElementVNode("path", {"d":"M6 8V5.71429C6 4.76751 6.76751 4 7.71429 4V4H16.2857V4C17.2325 4 18 4.76751 18 5.71429V8"})
  ]))
}
