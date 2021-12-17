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
	"class": "scarlab scarlab-minimaize-circle",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M14 7C14 6.44772 13.5523 6 13 6C12.4477 6 12 6.44772 12 7V8V10.5C12 11.3284 12.6716 12 13.5 12H16H17C17.5523 12 18 11.5523 18 11C18 10.4477 17.5523 10 17 10H16L14 10V8V7ZM6 13C6 13.5523 6.44772 14 7 14H8H9.99991L9.99997 16L10 17C10 17.5523 10.4477 18 11 18C11.5523 18 12 17.5523 12 17L12 16L11.9999 13.5C11.9999 12.6719 11.3287 12 10.5 12H8H7C6.44771 12 6 12.4477 6 13ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"})
  ]))
}
