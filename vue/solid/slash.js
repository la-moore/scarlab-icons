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
	"class": "scarlab scarlab-slash",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M19.7423 18.3297C21.1534 16.6057 22.0001 14.4017 22.0001 12C22.0001 6.47715 17.523 2 12.0001 2C9.5984 2 7.39443 2.84669 5.67041 4.25786C5.68291 4.26917 5.69519 4.28084 5.70724 4.29289L19.7072 18.2929C19.7193 18.3049 19.7423 18.3297 19.7423 18.3297Z"}), 
	_createElementVNode("path", {"d":"M4.25786 5.67029C2.84669 7.3943 2 9.59828 2 12C2 17.5229 6.47715 22 12 22C14.4017 22 16.6057 21.1533 18.3297 19.7421C18.3297 19.7421 18.3049 19.7192 18.2929 19.7071L4.29289 5.70711C4.28084 5.69506 4.26917 5.68278 4.25786 5.67029Z"})
  ]))
}
