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
	"class": "scarlab scarlab-pin",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M12 2C7.02944 2 3 6.02944 3 11C3 13.704 4.40858 16.0555 5.97592 17.8473C7.55461 19.652 9.3972 21.0075 10.4939 21.7371C11.411 22.3473 12.589 22.3473 13.5061 21.7371C14.6028 21.0075 16.4454 19.652 18.0241 17.8473C19.5914 16.0555 21 13.704 21 11C21 6.02944 16.9706 2 12 2ZM10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13C10.8954 13 10 12.1046 10 11ZM12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7Z"})
  ]))
}
