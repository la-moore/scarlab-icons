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
	"class": "scarlab scarlab-slash",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M5.67139 4.25705L19.7431 18.3287C21.1538 16.6049 22.0001 14.4013 22.0001 12C22.0001 6.47715 17.523 2 12.0001 2C9.59885 2 7.39526 2.84637 5.67139 4.25705Z"}), 
	_createElementVNode("path", {"d":"M4.25705 5.67126C2.84637 7.39514 2 9.59873 2 12C2 17.5228 6.47715 22 12 22C14.4013 22 16.6049 21.1536 18.3287 19.7429L4.25705 5.67126Z"})
  ]))
}
