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
	"class": "scarlab scarlab-cone",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M6.03308 21H17.9669C19.4028 21 20.3708 19.5319 19.8052 18.2122L19.2857 17L18 14L13.8383 4.28934C13.1456 2.67313 10.8544 2.67313 10.1617 4.28935L6 14L4.71429 17L4.19479 18.2122C3.62919 19.5319 4.59725 21 6.03308 21Z"}), 
	_createElementVNode("path", {"d":"M5 17H19"}), 
	_createElementVNode("path", {"d":"M6 14H18"})
  ]))
}
