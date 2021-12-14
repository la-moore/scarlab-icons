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
	"class": "scarlab scarlab-printer",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M19 16.9593C20.6201 16.7975 21 16.1031 21 14.016V9.984C21 7.52668 20.4733 7 18.016 7H5.984C3.52668 7 3 7.52668 3 9.984V14.016C3 16.1031 3.37993 16.7975 5 16.9593"}), 
	_createElementVNode("path", {"d":"M6 6.5808C6 3.63201 6.63201 3 9.5808 3H14.4192C17.368 3 18 3.63201 18 6.5808"}), 
	_createElementVNode("path", {"d":"M5 15.3872C5 13.4213 5.42134 13 7.3872 13H16.6128C18.5787 13 19 13.4213 19 15.3872V18.6128C19 20.5787 18.5787 21 16.6128 21H7.3872C5.42134 21 5 20.5787 5 18.6128V15.3872Z"})
  ]))
}
