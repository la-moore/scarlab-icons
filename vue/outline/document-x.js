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
	"class": "scarlab scarlab-document-x",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M9 10L15 16"}), 
	_createElementVNode("path", {"d":"M15 10L9.00005 15.9999"}), 
	_createElementVNode("path", {"d":"M9.648 3C5.82037 3 5 3.82037 5 7.648V16.352C5 20.1796 5.82037 21 9.648 21H14.352C18.1796 21 19 20.1796 19 16.352V8.06221C19 7.797 18.8946 7.54264 18.7071 7.35511L14.6449 3.29289C14.4574 3.10536 14.203 3 13.9378 3H9.648Z"})
  ]))
}
