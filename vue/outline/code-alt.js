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
	"class": "scarlab scarlab-code-alt",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M11 16L13 8"}), 
	_createElementVNode("path", {"d":"M17 15L19.6961 12.3039V12.3039C19.8639 12.1361 19.8639 11.8639 19.6961 11.6961V11.6961L17 9"}), 
	_createElementVNode("path", {"d":"M7 9L4.32151 11.6785V11.6785C4.14394 11.8561 4.14394 12.1439 4.32151 12.3215V12.3215L7 15"})
  ]))
}