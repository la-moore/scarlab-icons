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
	"class": "scarlab scarlab-blur",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM13 6C13 5.44772 13.4477 5 14 5H16C16.5523 5 17 5.44772 17 6C17 6.55228 16.5523 7 16 7H14C13.4477 7 13 6.55228 13 6ZM14 9C13.4477 9 13 9.44772 13 10C13 10.5523 13.4477 11 14 11H19C19.5523 11 20 10.5523 20 10C20 9.44772 19.5523 9 19 9H14ZM13 14C13 13.4477 13.4477 13 14 13H19C19.5523 13 20 13.4477 20 14C20 14.5523 19.5523 15 19 15H14C13.4477 15 13 14.5523 13 14ZM14 17C13.4477 17 13 17.4477 13 18C13 18.5523 13.4477 19 14 19H16C16.5523 19 17 18.5523 17 18C17 17.4477 16.5523 17 16 17H14Z"})
  ]))
}
