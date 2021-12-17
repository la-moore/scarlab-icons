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
	"class": "scarlab scarlab-key",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M12.5 11.5L21 3"}), 
	_createElementVNode("path", {"d":"M8.5 10C11.5376 10 14 12.4624 14 15.5C14 18.5376 11.5376 21 8.5 21C5.46243 21 3 18.5376 3 15.5C3 12.4624 5.46243 10 8.5 10Z"}), 
	_createElementVNode("path", {"d":"M15.5 8.5L17 10V10C17.5523 10.5523 18.4477 10.5523 19 10L20 9C20.5523 8.44772 20.5523 7.55228 20 7V7L18.5 5.5"})
  ]))
}
