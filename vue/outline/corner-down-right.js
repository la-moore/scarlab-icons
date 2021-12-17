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
	"class": "scarlab scarlab-corner-down-right",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M8 7L8 9.5C8 11.3856 8 12.3284 8.58579 12.9142C9.17157 13.5 10.1144 13.5 12 13.5L15.5 13.5"}), 
	_createElementVNode("path", {"d":"M13 17L16 14V14C16.2761 13.7239 16.2761 13.2761 16 13V13L13 10"})
  ]))
}
