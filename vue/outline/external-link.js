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
	"class": "scarlab scarlab-external-link",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M12 3C4.5885 3 3 4.5885 3 12C3 19.4115 4.5885 21 12 21C19.4115 21 21 19.4115 21 12"}), 
	_createElementVNode("path", {"d":"M20.5 3.5L15 9"}), 
	_createElementVNode("path", {"d":"M16 3H20.6717C20.853 3 21 3.14703 21 3.32837V8"})
  ]))
}
