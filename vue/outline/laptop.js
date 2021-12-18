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
	"class": "scarlab scarlab-laptop",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M4 10C4 8.11438 4 7.17157 4.58579 6.58579C5.17157 6 6.11438 6 8 6H12H16C17.8856 6 18.8284 6 19.4142 6.58579C20 7.17157 20 8.11438 20 10V12V14C20 15.8856 20 16.8284 19.4142 17.4142C18.8284 18 17.8856 18 16 18H12H8C6.11438 18 5.17157 18 4.58579 17.4142C4 16.8284 4 15.8856 4 14V12V10Z"}), 
	_createElementVNode("path", {"d":"M3 21H21"})
  ]))
}