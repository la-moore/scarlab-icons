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
	"class": "scarlab scarlab-chevrons-down-alt",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M6.5 6.5L12.2093 12.2093V12.2093C12.3698 12.3698 12.6302 12.3698 12.7907 12.2093V12.2093L18.5 6.5"}), 
	_createElementVNode("path", {"d":"M6.5 11.5L12.2492 17.2492V17.2492C12.3877 17.3877 12.6123 17.3877 12.7508 17.2492V17.2492L18.5 11.5"})
  ]))
}
