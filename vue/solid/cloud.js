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
	"class": "scarlab scarlab-cloud",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M2 10C2 5.61631 5.43583 2 9.75 2C13.4633 2 16.5282 4.68197 17.3077 8.22257C19.9376 8.2545 22 10.465 22 13.1111C22 15.7766 19.9073 18 17.25 18H9.75C5.43583 18 2 14.3837 2 10Z"})
  ]))
}