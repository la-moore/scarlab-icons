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
	"class": "scarlab scarlab-key",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M21.7071 2.29289C22.0976 2.68342 22.0976 3.31658 21.7071 3.70711L19.9142 5.5L21.7071 7.29289C22.0976 7.68342 22.0976 8.31658 21.7071 8.70711L18.7071 11.7071C18.3166 12.0976 17.6834 12.0976 17.2929 11.7071L15.5 9.91421L13.7489 11.6653C14.5356 12.7403 15 14.0659 15 15.5C15 19.0899 12.0899 22 8.5 22C4.91015 22 2 19.0899 2 15.5C2 11.9101 4.91015 9 8.5 9C9.9341 9 11.2597 9.46443 12.3347 10.2511L20.2929 2.29289C20.6834 1.90237 21.3166 1.90237 21.7071 2.29289Z"})
  ]))
}
