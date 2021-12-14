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
	"class": "scarlab scarlab-cash",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M7 12.32C7 9.58598 7.58598 9 10.32 9H17.68C20.414 9 21 9.58598 21 12.32V15.68C21 18.414 20.414 19 17.68 19H10.32C7.58598 19 7 18.414 7 15.68V12.32Z"}), 
	_createElementVNode("path", {"d":"M7 15H6.32C3.58598 15 3 14.414 3 11.68V8.32C3 5.58598 3.58598 5 6.32 5H13.68C16.414 5 17 5.58598 17 8.32V9"}), 
	_createElementVNode("path", {"d":"M12.75 12.75C12.0596 13.4404 12.0596 14.5596 12.75 15.25C13.4404 15.9404 14.5596 15.9404 15.25 15.25C15.9404 14.5596 15.9404 13.4404 15.25 12.75C14.5596 12.0596 13.4404 12.0596 12.75 12.75Z"})
  ]))
}
