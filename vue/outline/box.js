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
	"class": "scarlab scarlab-box",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M4.57143 7.17857L4 7.5L4.57143 7.82143L11.6138 11.7828L12 12L12.3862 11.7828L19.6184 7.71468L20 7.5L19.6184 7.28532L12.3862 3.21724L12 3L11.6138 3.21724L4.57143 7.17857Z"}), 
	_createElementVNode("path", {"d":"M4 7.5V15.75V15.8294C4 16.1119 4.14935 16.3733 4.39267 16.5167V16.5167L11.621 20.7766V20.7766C11.8549 20.9145 12.1451 20.9145 12.379 20.7766V20.7766L19.6073 16.5167V16.5167C19.8506 16.3733 20 16.1119 20 15.8294V15.75V7.5"}), 
	_createElementVNode("path", {"d":"M12 21V12"})
  ]))
}
