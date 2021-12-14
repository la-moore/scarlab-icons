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
	"class": "scarlab scarlab-play-square",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M12 2C3.765 2 2 3.765 2 12C2 20.235 3.765 22 12 22C20.235 22 22 20.235 22 12C22 3.765 20.235 2 12 2ZM10.5145 8.14251C10.2056 7.95715 9.82081 7.95229 9.5073 8.1298C9.19379 8.30731 9 8.63973 9 9V15C9 15.3603 9.19379 15.6927 9.5073 15.8702C9.82081 16.0477 10.2056 16.0429 10.5145 15.8575L15.5145 12.8575C15.8157 12.6768 16 12.3513 16 12C16 11.6487 15.8157 11.3232 15.5145 11.1425L10.5145 8.14251Z"})
  ]))
}
