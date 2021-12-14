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
	"class": "scarlab scarlab-calculator",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M5 7.1776C5 3.73735 5.73735 3 9.1776 3H14.8224C18.2627 3 19 3.73735 19 7.1776V16.8224C19 20.2627 18.2627 21 14.8224 21H9.1776C5.73735 21 5 20.2627 5 16.8224V7.1776Z"}), 
	_createElementVNode("path", {"d":"M9 7H15"}), 
	_createElementVNode("path", {"d":"M15 17V14"}), 
	_createElementVNode("path", {"d":"M15 11H15.01"}), 
	_createElementVNode("path", {"d":"M12 11H12.01"}), 
	_createElementVNode("path", {"d":"M9 11H9.01"}), 
	_createElementVNode("path", {"d":"M9 14H9.01"}), 
	_createElementVNode("path", {"d":"M12 14H12.01"}), 
	_createElementVNode("path", {"d":"M12 17H12.01"}), 
	_createElementVNode("path", {"d":"M9 17H9.01"})
  ]))
}
