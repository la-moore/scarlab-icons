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
	"class": "scarlab scarlab-airplay",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M12 15L9 20H15L12 15Z"}), 
	_createElementVNode("path", {"d":"M6.984 16C3.70318 16 3 15.2968 3 12.016L3 7.984C3 4.70318 3.70318 4 6.984 4L17.016 4C20.2968 4 21 4.70318 21 7.984L21 12.016C21 15.2968 20.2968 16 17.016 16"})
  ]))
}
