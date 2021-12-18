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
	"class": "scarlab scarlab-goblet",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M12 13.5C14.7614 13.5 17 11.2614 17 8.5C17 6.94339 16.6822 5.39404 16.405 4.33839C16.1916 3.52591 15.4412 3 14.6011 3H9.39886C8.55883 3 7.80843 3.52591 7.59503 4.33839C7.31776 5.39404 7 6.94339 7 8.5C7 11.2614 9.23858 13.5 12 13.5Z"}), 
	_createElementVNode("path", {"d":"M8 21H16"}), 
	_createElementVNode("path", {"d":"M12 21V13.5"}), 
	_createElementVNode("path", {"d":"M7.17444 8.81475C8.10176 8.52566 8.8326 8 10 8C11.6102 8 12.3898 9 14 9C15.1932 9 15.9303 8.45087 16.8873 8.16646"})
  ]))
}