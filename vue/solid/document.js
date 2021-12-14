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
	"class": "scarlab scarlab-document",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M9.648 2C8.66827 2 7.81273 2.05119 7.09002 2.21181C6.35596 2.37495 5.6991 2.66396 5.18153 3.18153C4.66396 3.6991 4.37495 4.35596 4.21181 5.09002C4.05119 5.81273 4 6.66827 4 7.648V16.352C4 17.3317 4.05119 18.1873 4.21181 18.91C4.37495 19.644 4.66396 20.3009 5.18153 20.8185C5.6991 21.336 6.35596 21.6251 7.09002 21.7882C7.81273 21.9488 8.66827 22 9.648 22H14.352C15.3317 22 16.1873 21.9488 16.91 21.7882C17.644 21.6251 18.3009 21.336 18.8185 20.8185C19.336 20.3009 19.6251 19.644 19.7882 18.91C19.9488 18.1873 20 17.3317 20 16.352V8.06221C20 7.53178 19.7893 7.02307 19.4142 6.648L15.352 2.58579C14.9769 2.21071 14.4682 2 13.9378 2H9.648Z"})
  ]))
}
