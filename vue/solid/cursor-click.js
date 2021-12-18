import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    "xmlns": "http://www.w3.org/2000/svg", 
	"width": "24", 
	"height": "24", 
	"viewBox": "0 0 24 24", 
	"fill": "currentColor", 
	"stroke": "none", 
	"fill-rule": "evenodd", 
	"clip-rule": "evenodd", 
	"class": "scarlab scarlab-cursor-click",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M15.2855 17.0113C14.7666 20.0509 10.5501 20.4239 9.50564 17.5226L7.15545 10.9943C6.29564 8.60595 8.60591 6.29569 10.9943 7.15551L17.5226 9.50569C20.4238 10.5501 20.0509 14.7666 17.0113 15.2856L16.2354 15.418C15.8171 15.4894 15.4894 15.8171 15.418 16.2355L15.2855 17.0113Z"}), 
	_createElementVNode("path", {"d":"M10 4V3"}), 
	_createElementVNode("path", {"d":"M4 10H3"}), 
	_createElementVNode("path", {"d":"M4 4L6 6"})
  ]))
}
