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
	"class": "scarlab scarlab-square",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M2 12C2 3.765 3.765 2 12 2C20.235 2 22 3.765 22 12C22 20.235 20.235 22 12 22C3.765 22 2 20.235 2 12Z"})
  ]))
}
