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
	"class": "scarlab scarlab-award",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9C18 12.3137 15.3137 15 12 15C8.68629 15 6 12.3137 6 9Z"}), 
	_createElementVNode("path", {"d":"M7.10992 14.0087L6.14635 16.8994C5.28723 19.4767 8.02267 21.7775 10.4147 20.4895L11.5261 19.891C11.8221 19.7316 12.1784 19.7316 12.4743 19.891L13.5858 20.4895C15.9778 21.7775 18.7133 19.4767 17.8541 16.8994L16.8905 14.0083C15.6287 15.2406 13.903 16 12 16C10.0972 16 8.37167 15.2407 7.10992 14.0087Z"})
  ]))
}
