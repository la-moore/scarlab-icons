import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    "xmlns": "http://www.w3.org/2000/svg", 
	"width": "24", 
	"height": "24", 
	"viewBox": "0 0 24 24", 
	"fill": "none", 
	"stroke": "currentColor", 
	"stroke-width": "2", 
	"stroke-linecap": "round", 
	"stroke-linejoin": "round", 
	"class": "scarlab scarlab-atom",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M20 20.0001C17.7909 22.2092 12.4183 20.4183 8 16.0001C3.58171 11.5818 1.79084 6.20916 3.99999 4.00001C6.20913 1.79087 11.5817 3.58173 16 8.00003C20.4183 12.4183 22.2092 17.7909 20 20.0001Z"}), 
	_createElementVNode("path", {"d":"M4.00006 20C1.79091 17.7909 3.58178 12.4183 8.00007 8C12.4184 3.58171 17.791 1.79084 20.0001 3.99999C22.2093 6.20913 20.4184 11.5817 16.0001 16C11.5818 20.4183 6.20921 22.2092 4.00006 20Z"}), 
	_createElementVNode("path", {"d":"M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"})
  ]))
}