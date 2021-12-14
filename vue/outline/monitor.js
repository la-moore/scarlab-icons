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
	"class": "scarlab scarlab-monitor",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M3 7.648C3 3.82037 3.82037 3 7.648 3H16.352C20.1796 3 21 3.82037 21 7.648V12.352C21 16.1796 20.1796 17 16.352 17H7.648C3.82037 17 3 16.1796 3 12.352V7.648Z"}), 
	_createElementVNode("path", {"d":"M7 21H17"}), 
	_createElementVNode("path", {"d":"M12 17V21"})
  ]))
}
