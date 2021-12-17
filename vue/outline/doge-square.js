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
	"class": "scarlab scarlab-doge-square",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M12.5 16C17.75 16 17.75 8 12.5 8H11C9.89543 8 9 8.89543 9 10V14C9 15.1046 9.89543 16 11 16H12.5Z"}), 
	_createElementVNode("path", {"d":"M7 12H11"}), 
	_createElementVNode("path", {"d":"M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"})
  ]))
}
