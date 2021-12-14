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
	"class": "scarlab scarlab-percent-square",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M12 2C3.765 2 2 3.765 2 12C2 20.235 3.765 22 12 22C20.235 22 22 20.235 22 12C22 3.765 20.235 2 12 2ZM16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289C16.3166 6.90237 15.6834 6.90237 15.2929 7.29289L7.29289 15.2929C6.90237 15.6834 6.90237 16.3166 7.29289 16.7071C7.68342 17.0976 8.31658 17.0976 8.70711 16.7071L16.7071 8.70711ZM13 15C13 13.8954 13.8954 13 15 13C16.1046 13 17 13.8954 17 15C17 16.1046 16.1046 17 15 17C13.8954 17 13 16.1046 13 15ZM9 7C7.89543 7 7 7.89543 7 9C7 10.1046 7.89543 11 9 11C10.1046 11 11 10.1046 11 9C11 7.89543 10.1046 7 9 7Z"})
  ]))
}
