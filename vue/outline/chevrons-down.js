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
	"class": "scarlab scarlab-chevrons-down",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M9 8L11.8063 10.8063V10.8063C11.9133 10.9133 12.0867 10.9133 12.1937 10.8063V10.8063L15 8"}), 
	_createElementVNode("path", {"d":"M9 13L11.8495 15.8495V15.8495C11.9326 15.9326 12.0674 15.9326 12.1505 15.8495V15.8495L15 13"})
  ]))
}
