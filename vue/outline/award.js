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
	"class": "scarlab scarlab-award",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M17 9C17 11.7614 14.7614 14 12 14C9.23858 14 7 11.7614 7 9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9Z"}), 
	_createElementVNode("path", {"d":"M8.5 13L7.09478 17.2156C6.52204 18.9339 8.34567 20.4677 9.94035 19.609L11.0518 19.0106C11.6438 18.6918 12.3562 18.6918 12.9482 19.0106L14.0596 19.609C15.6543 20.4677 17.478 18.9339 16.9052 17.2156L15.5 13"})
  ]))
}
