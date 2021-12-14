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
	"class": "scarlab scarlab-git-commit",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M8.12602 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11L8.12602 11C8.57006 9.27477 10.1362 8 12 8C13.8638 8 15.4299 9.27477 15.874 11L21 11C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H15.874C15.4299 14.7252 13.8638 16 12 16C10.1362 16 8.57006 14.7252 8.12602 13Z"})
  ]))
}
