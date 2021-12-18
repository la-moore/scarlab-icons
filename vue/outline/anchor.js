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
	"class": "scarlab scarlab-anchor",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M19 12H20.75V12C20.8881 12 21.0004 12.1126 20.9966 12.2506C20.8638 17.1053 16.8867 21 12 21C7.11326 21 3.13617 17.1053 3.00342 12.2506C2.99965 12.1126 3.11193 12 3.25 12V12H5"}), 
	_createElementVNode("path", {"d":"M15 6C15 7.65685 13.6569 9 12 9C10.3431 9 9 7.65685 9 6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6Z"}), 
	_createElementVNode("path", {"d":"M12 9V21"})
  ]))
}