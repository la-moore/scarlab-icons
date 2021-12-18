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
	"class": "scarlab scarlab-gamepad",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M17 6C18.8856 6 19.8284 6 20.4142 6.58579C21 7.17157 21 8.11438 21 10L21 14C21 15.8856 21 16.8284 20.4142 17.4142C19.8284 18 18.8856 18 17 18L16 18L8 18L7 18C5.11438 18 4.17157 18 3.58579 17.4142C3 16.8284 3 15.8856 3 14L3 10C3 8.11438 3 7.17157 3.58579 6.58579C4.17157 6 5.11438 6 7 6L8 6L16 6L17 6Z"}), 
	_createElementVNode("path", {"d":"M15 10L15 10.01"}), 
	_createElementVNode("path", {"d":"M17 14L17 14.01"}), 
	_createElementVNode("path", {"d":"M8.5 9.5L8.5 14.5"}), 
	_createElementVNode("path", {"d":"M11 12L6 12"})
  ]))
}
