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
	"class": "scarlab scarlab-yen-circle",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM8.4453 6.16795C8.90483 5.8616 9.5257 5.98577 9.83205 6.4453L12 9.69722L14.1679 6.4453C14.4743 5.98577 15.0952 5.8616 15.5547 6.16795C16.0142 6.4743 16.1384 7.09517 15.8321 7.5547L13.5352 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H13V14H15C15.5523 14 16 14.4477 16 15C16 15.5523 15.5523 16 15 16H13V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V16H9C8.44772 16 8 15.5523 8 15C8 14.4477 8.44772 14 9 14H11V13H9C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11H10.4648L8.16795 7.5547C7.8616 7.09517 7.98577 6.4743 8.4453 6.16795Z"})
  ]))
}