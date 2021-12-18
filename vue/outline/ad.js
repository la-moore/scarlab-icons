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
	"class": "scarlab scarlab-ad",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M5 5H19C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7C3 5.89543 3.89543 5 5 5Z"}), 
	_createElementVNode("path", {"d":"M7 15V11C7 9.89543 7.89543 9 9 9V9C10.1046 9 11 9.89543 11 11V15"}), 
	_createElementVNode("path", {"d":"M17 9V15"}), 
	_createElementVNode("path", {"d":"M17 12H15.5C13.5 12 13.5 15 15.5 15H17"}), 
	_createElementVNode("path", {"d":"M7 13H11"})
  ]))
}
