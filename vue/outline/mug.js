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
	"class": "scarlab scarlab-mug",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M3 9C3 8.06812 3 7.60218 3.15224 7.23463C3.35523 6.74458 3.74458 6.35523 4.23463 6.15224C4.60218 6 5.06812 6 6 6H10H14C14.9319 6 15.3978 6 15.7654 6.15224C16.2554 6.35523 16.6448 6.74458 16.8478 7.23463C17 7.60218 17 8.06812 17 9V9V15.6667C17 20 16.15 21 10 21C3.84999 21 3 20 3 15.6667V9V9Z"}), 
	_createElementVNode("path", {"d":"M17 9H19C20.1046 9 21 9.89543 21 11V14C21 15.1046 20.1046 16 19 16H17"})
  ]))
}
