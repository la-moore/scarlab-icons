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
	"class": "scarlab scarlab-cloud-fog",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M2 10C2 5.61631 5.43583 2 9.75 2C13.4633 2 16.5282 4.68197 17.3077 8.22257C19.9376 8.2545 22 10.465 22 13.1111C22 15.7766 19.9073 18 17.25 18H9.75C5.43583 18 2 14.3837 2 10Z"}), 
	_createElementVNode("path", {"d":"M4 21C4 20.4477 4.44772 20 5 20H19C19.5523 20 20 20.4477 20 21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21Z"})
  ]))
}
