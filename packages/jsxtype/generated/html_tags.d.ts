import { ValueSets } from "./html_value_sets";
export interface Tags {
    'html': {
        children: any;
    } & {
        'manifest': any;
        'version': any;
        'xmlns': any;
    };
    'head': {
        children: any;
    } & {
        'profile': any;
    };
    'title': {
        children: any;
    };
    'base': {
        'href': any;
        'target': ValueSets['target'];
    };
    'link': {
        'href': any;
        'crossorigin': ValueSets['xo'];
        'rel': any;
        'media': any;
        'hreflang': any;
        'type': any;
        'sizes': any;
        'as': any;
        'importance': any;
        'integrity': any;
        'referrerpolicy': any;
        'title': any;
    };
    'meta': {
        'name': any;
        'http-equiv': any;
        'content': any;
        'charset': any;
        'scheme': any;
    };
    'style': {
        children: any;
    } & {
        'media': any;
        'nonce': any;
        'type': any;
        'scoped': any;
        'title': any;
    };
    'body': {
        children: any;
    } & {
        'onafterprint': any;
        'onbeforeprint': any;
        'onbeforeunload': any;
        'onhashchange': any;
        'onlanguagechange': any;
        'onmessage': any;
        'onoffline': any;
        'ononline': any;
        'onpagehide': any;
        'onpageshow': any;
        'onpopstate': any;
        'onstorage': any;
        'onunload': any;
        'alink': any;
        'background': any;
        'bgcolor': any;
        'bottommargin': any;
        'leftmargin': any;
        'link': any;
        'onblur': any;
        'onerror': any;
        'onfocus': any;
        'onload': any;
        'onredo': any;
        'onresize': any;
        'onundo': any;
        'rightmargin': any;
        'text': any;
        'topmargin': any;
        'vlink': any;
    };
    'article': {
        children: any;
    };
    'section': {
        children: any;
    };
    'nav': {
        children: any;
    };
    'aside': {
        children: any;
    };
    'h1': {
        children: any;
    };
    'h2': {
        children: any;
    };
    'h3': {
        children: any;
    };
    'h4': {
        children: any;
    };
    'h5': {
        children: any;
    };
    'h6': {
        children: any;
    };
    'header': {
        children: any;
    };
    'footer': {
        children: any;
    };
    'address': {
        children: any;
    };
    'p': {
        children: any;
    };
    'hr': {
        'align': any;
        'color': any;
        'noshade': any;
        'size': any;
        'width': any;
    };
    'pre': {
        children: any;
    } & {
        'cols': any;
        'width': any;
        'wrap': any;
    };
    'blockquote': {
        children: any;
    } & {
        'cite': any;
    };
    'ol': {
        children: any;
    } & {
        'reversed': any;
        'start': any;
        'type': ValueSets['lt'];
        'compact': any;
    };
    'ul': {
        children: any;
    } & {
        'compact': any;
    };
    'li': {
        children: any;
    } & {
        'value': any;
        'type': any;
    };
    'dl': {
        children: any;
    };
    'dt': {
        children: any;
    };
    'dd': {
        children: any;
    } & {
        'nowrap': any;
    };
    'figure': {
        children: any;
    };
    'figcaption': {
        children: any;
    };
    'main': {
        children: any;
    };
    'div': {
        children: any;
    };
    'a': {
        children: any;
    } & {
        'href': any;
        'target': ValueSets['target'];
        'download': any;
        'ping': any;
        'rel': any;
        'hreflang': any;
        'type': any;
        'referrerpolicy': any;
    };
    'em': {
        children: any;
    };
    'strong': {
        children: any;
    };
    'small': {
        children: any;
    };
    's': {
        children: any;
    };
    'cite': {
        children: any;
    };
    'q': {
        children: any;
    } & {
        'cite': any;
    };
    'dfn': {
        children: any;
    };
    'abbr': {
        children: any;
    };
    'ruby': {
        children: any;
    };
    'rb': {
        children: any;
    };
    'rt': {
        children: any;
    };
    'rp': {
        children: any;
    };
    'time': {
        children: any;
    } & {
        'datetime': any;
    };
    'code': {
        children: any;
    };
    'var': {
        children: any;
    };
    'samp': {
        children: any;
    };
    'kbd': {
        children: any;
    };
    'sub': {
        children: any;
    };
    'sup': {
        children: any;
    };
    'i': {
        children: any;
    };
    'b': {
        children: any;
    };
    'u': {
        children: any;
    };
    'mark': {
        children: any;
    };
    'bdi': {
        children: any;
    };
    'bdo': {
        children: any;
    } & {
        'dir': any;
    };
    'span': {
        children: any;
    };
    'br': {
        'clear': any;
    };
    'wbr': {};
    'ins': {
        children: any;
    } & {
        'cite': any;
        'datetime': any;
    };
    'del': {
        children: any;
    } & {
        'cite': any;
        'datetime': any;
    };
    'picture': {
        children: any;
    };
    'img': {
        'alt': any;
        'src': any;
        'srcset': any;
        'crossorigin': ValueSets['xo'];
        'usemap': any;
        'ismap': any;
        'width': any;
        'height': any;
        'decoding': ValueSets['decoding'];
        'loading': ValueSets['loading'];
        'referrerpolicy': ValueSets['referrerpolicy'];
        'sizes': any;
        'importance': any;
        'intrinsicsize': any;
    };
    'iframe': {
        children: any;
    } & {
        'src': any;
        'srcdoc': any;
        'name': any;
        'sandbox': ValueSets['sb'];
        'seamless': any;
        'allowfullscreen': any;
        'width': any;
        'height': any;
        'allow': any;
        'allowpaymentrequest': any;
        'csp': any;
        'importance': any;
        'referrerpolicy': any;
    };
    'embed': {
        'src': any;
        'type': any;
        'width': any;
        'height': any;
    };
    'object': {
        children: any;
    } & {
        'data': any;
        'type': any;
        'typemustmatch': any;
        'name': any;
        'usemap': any;
        'form': any;
        'width': any;
        'height': any;
        'archive': any;
        'border': any;
        'classid': any;
        'codebase': any;
        'codetype': any;
        'declare': any;
        'standby': any;
        'tabindex': any;
    };
    'param': {
        'name': any;
        'value': any;
        'type': any;
        'valuetype': any;
    };
    'video': {
        children: any;
    } & {
        'src': any;
        'crossorigin': ValueSets['xo'];
        'poster': any;
        'preload': ValueSets['pl'];
        'autoplay': any;
        'mediagroup': any;
        'loop': any;
        'muted': any;
        'controls': any;
        'width': any;
        'height': any;
    };
    'audio': {
        children: any;
    } & {
        'src': any;
        'crossorigin': ValueSets['xo'];
        'preload': ValueSets['pl'];
        'autoplay': any;
        'mediagroup': any;
        'loop': any;
        'muted': any;
        'controls': any;
    };
    'source': {
        'src': any;
        'type': any;
        'sizes': any;
        'srcset': any;
        'media': any;
    };
    'track': {
        'default': any;
        'kind': ValueSets['tk'];
        'label': any;
        'src': any;
        'srclang': any;
    };
    'map': {
        children: any;
    } & {
        'name': any;
    };
    'area': {
        'alt': any;
        'coords': any;
        'shape': ValueSets['sh'];
        'href': any;
        'target': ValueSets['target'];
        'download': any;
        'ping': any;
        'rel': any;
        'hreflang': any;
        'type': any;
        'accesskey': any;
    };
    'table': {
        children: any;
    } & {
        'border': any;
        'align': any;
    };
    'caption': {
        children: any;
    } & {
        'align': any;
    };
    'colgroup': {
        children: any;
    } & {
        'span': any;
        'align': any;
    };
    'col': {
        'span': any;
        'align': any;
    };
    'tbody': {
        children: any;
    } & {
        'align': any;
    };
    'thead': {
        children: any;
    } & {
        'align': any;
    };
    'tfoot': {
        children: any;
    } & {
        'align': any;
    };
    'tr': {
        children: any;
    } & {
        'align': any;
    };
    'td': {
        children: any;
    } & {
        'colspan': any;
        'rowspan': any;
        'headers': any;
        'abbr': any;
        'align': any;
        'axis': any;
        'bgcolor': any;
    };
    'th': {
        children: any;
    } & {
        'colspan': any;
        'rowspan': any;
        'headers': any;
        'scope': ValueSets['s'];
        'sorted': any;
        'abbr': any;
        'align': any;
        'axis': any;
        'bgcolor': any;
    };
    'form': {
        children: any;
    } & {
        'accept-charset': any;
        'action': any;
        'autocomplete': ValueSets['o'];
        'enctype': ValueSets['et'];
        'method': ValueSets['m'];
        'name': any;
        'novalidate': any;
        'target': ValueSets['target'];
        'accept': any;
        'autocapitalize': any;
    };
    'label': {
        children: any;
    } & {
        'form': any;
        'for': any;
    };
    'input': {
        'accept': any;
        'alt': any;
        'autocomplete': ValueSets['inputautocomplete'];
        'autofocus': any;
        'checked': any;
        'dirname': any;
        'disabled': any;
        'form': any;
        'formaction': any;
        'formenctype': ValueSets['et'];
        'formmethod': ValueSets['fm'];
        'formnovalidate': any;
        'formtarget': any;
        'height': any;
        'inputmode': ValueSets['im'];
        'list': any;
        'max': any;
        'maxlength': any;
        'min': any;
        'minlength': any;
        'multiple': any;
        'name': any;
        'pattern': any;
        'placeholder': any;
        'readonly': any;
        'required': any;
        'size': any;
        'src': any;
        'step': any;
        'type': ValueSets['t'];
        'value': any;
        'width': any;
    };
    'button': {
        children: any;
    } & {
        'autofocus': any;
        'disabled': any;
        'form': any;
        'formaction': any;
        'formenctype': ValueSets['et'];
        'formmethod': ValueSets['fm'];
        'formnovalidate': any;
        'formtarget': any;
        'name': any;
        'type': ValueSets['bt'];
        'value': any;
        'autocomplete': any;
    };
    'select': {
        children: any;
    } & {
        'autocomplete': ValueSets['inputautocomplete'];
        'autofocus': any;
        'disabled': any;
        'form': any;
        'multiple': any;
        'name': any;
        'required': any;
        'size': any;
    };
    'datalist': {
        children: any;
    };
    'optgroup': {
        children: any;
    } & {
        'disabled': any;
        'label': any;
    };
    'option': {
        children: any;
    } & {
        'disabled': any;
        'label': any;
        'selected': any;
        'value': any;
    };
    'textarea': {
        children: any;
    } & {
        'autocomplete': ValueSets['inputautocomplete'];
        'autofocus': any;
        'cols': any;
        'dirname': any;
        'disabled': any;
        'form': any;
        'inputmode': ValueSets['im'];
        'maxlength': any;
        'minlength': any;
        'name': any;
        'placeholder': any;
        'readonly': any;
        'required': any;
        'rows': any;
        'wrap': ValueSets['w'];
        'autocapitalize': any;
        'spellcheck': any;
    };
    'output': {
        children: any;
    } & {
        'for': any;
        'form': any;
        'name': any;
    };
    'progress': {
        children: any;
    } & {
        'value': any;
        'max': any;
    };
    'meter': {
        children: any;
    } & {
        'value': any;
        'min': any;
        'max': any;
        'low': any;
        'high': any;
        'optimum': any;
        'form': any;
    };
    'fieldset': {
        children: any;
    } & {
        'disabled': any;
        'form': any;
        'name': any;
    };
    'legend': {
        children: any;
    };
    'details': {
        children: any;
    } & {
        'open': any;
    };
    'summary': {
        children: any;
    };
    'dialog': {
        children: any;
    } & {
        'open': any;
    };
    'script': {
        children: any;
    } & {
        'src': any;
        'type': any;
        'charset': any;
        'async': any;
        'defer': any;
        'crossorigin': ValueSets['xo'];
        'nonce': any;
        'integrity': any;
        'nomodule': any;
        'referrerpolicy': any;
        'text': any;
    };
    'noscript': {
        children: any;
    };
    'template': {
        children: any;
    };
    'canvas': {
        children: any;
    } & {
        'width': any;
        'height': any;
        'moz-opaque': any;
    };
    'slot': {
        children: any;
    } & {
        'name': any;
    };
    'data': {
        children: any;
    } & {
        'value': any;
    };
    'hgroup': {
        children: any;
    };
    'menu': {
        children: any;
    };
}
