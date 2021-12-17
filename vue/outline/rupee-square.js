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
	"class": "scarlab scarlab-rupee-square",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"}), 
	_createElementVNode("path", {"d":"M12 17L9.12186 14.1219V14.1219C9.07689 14.0769 9.11206 13.9992 9.17562 13.9971C13.9993 13.8351 13.9408 7 9 7H15"}), 
	_createElementVNode("path", {"d":"M9 10.5H15"})
  ]))
}
