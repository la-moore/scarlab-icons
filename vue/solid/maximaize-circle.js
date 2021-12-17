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
	"class": "scarlab scarlab-maximaize-circle",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M15 12C15 12.5523 15.4477 13 16 13C16.5523 13 17 12.5523 17 12L17 11L17.0001 8.50003C17.0001 7.67128 16.3281 7 15.5 7H13H12C11.4477 7 11 7.44772 11 8C11 8.55229 11.4477 9 12 9H13L15.0001 9L15 11L15 12ZM9 12C9 11.4477 8.55228 11 8 11C7.44772 11 7 11.4477 7 12V13V15.5C7 16.3284 7.67157 17 8.5 17H11H12C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15H11L9 15V13V12ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"})
  ]))
}
