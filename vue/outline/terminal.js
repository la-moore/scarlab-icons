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
	"class": "scarlab scarlab-terminal",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M13 15H16"}), 
	_createElementVNode("path", {"d":"M8 15L10.5 12.5V12.5C10.7761 12.2239 10.7761 11.7761 10.5 11.5V11.5L8 9"}), 
	_createElementVNode("path", {"d":"M3 8C3 6.11438 3 5.17157 3.58579 4.58579C4.17157 4 5.11438 4 7 4H12H17C18.8856 4 19.8284 4 20.4142 4.58579C21 5.17157 21 6.11438 21 8V12V16C21 17.8856 21 18.8284 20.4142 19.4142C19.8284 20 18.8856 20 17 20H12H7C5.11438 20 4.17157 20 3.58579 19.4142C3 18.8284 3 17.8856 3 16V12V8Z"})
  ]))
}
