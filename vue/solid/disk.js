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
	"class": "scarlab scarlab-disk",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM8 12C8 9.79086 9.79086 8 12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C8.68629 6 6 8.68629 6 12C6 12.5523 6.44772 13 7 13C7.55228 13 8 12.5523 8 12ZM17 11C17.5523 11 18 11.4477 18 12C18 15.3137 15.3137 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C14.2091 16 16 14.2091 16 12C16 11.4477 16.4477 11 17 11ZM12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10Z"})
  ]))
}