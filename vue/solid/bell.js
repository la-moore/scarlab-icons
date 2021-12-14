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
	"class": "scarlab scarlab-bell",
    ..._ctx
  }, [
    _createElementVNode("path", {"d":"M7.25036 4.66355C8.1201 3.36729 9.62323 2 12.0001 2C14.377 2 15.8802 3.36729 16.7499 4.66355C17.6075 5.94174 17.9254 7.2474 17.9712 7.44762C17.9776 7.47579 17.9823 7.49925 17.9854 7.51539L19.5201 15.4288C19.8792 17.2803 18.461 19 16.575 19H7.42528C5.53928 19 4.12108 17.2803 4.48016 15.4288L6.01489 7.51539C6.01802 7.49925 6.02265 7.47579 6.0291 7.44762C6.07491 7.2474 6.39275 5.94174 7.25036 4.66355Z"}), 
	_createElementVNode("path", {"d":"M8.84401 20C8.69366 20 8.59812 20.1592 8.67875 20.2862C8.92545 20.6744 9.26668 21.0589 9.73622 21.3672C10.346 21.7675 11.1128 22 12.0462 22C12.9797 22 13.7465 21.7675 14.3563 21.3672C14.8258 21.0589 15.167 20.6744 15.4137 20.2862C15.4944 20.1592 15.3988 20 15.2485 20H8.84401Z"})
  ]))
}