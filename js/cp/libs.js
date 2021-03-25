var NUMBER_OF_VISITTED_KEY = 'NUMBER_OF_VISITTED';
var MOBILE_APP_DONE_INTRODUCED_KEY = 'MOBILE_APP_V1_4_DONE_INTRODUCED_KEY';
var numberOfVisitted = 0;
if (window['localStorage'] && localStorage['getItem'](NUMBER_OF_VISITTED_KEY) != null) {
    numberOfVisitted = parseInt(window['localStorage'] && localStorage['getItem'](NUMBER_OF_VISITTED_KEY))
};
numberOfVisitted++;
window['localStorage'] && localStorage['setItem'](NUMBER_OF_VISITTED_KEY, numberOfVisitted);
var isInMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i ['test'](navigator['userAgent']);
var isIniOS = /iPad|iPhone|iPod/ ['test'](navigator['userAgent']) && !window['MSStream'];
var isInChrome = /Chrome/ ['test'](navigator['userAgent']) && /Google Inc/ ['test'](navigator['vendor']);
var ua = navigator['userAgent']['toLowerCase']();
var isInAndroid = ua['indexOf']('android') > -1;
var isInFirefox = ua['indexOf']('firefox') > -1;
if (isIniOS) {
    $('#cftg_app_ios')['show']()
} else {
    $('#cftg_app_ios')['hide']()
};
if (isInAndroid) {
    $('#cftg_app_android')['show']()
} else {
    $('#cftg_app_android')['hide']()
};
$('input')['keyup'](function(_0x3d03xa) {
    if (_0x3d03xa['which'] === 13) {
        $(this)['blur']()
    }
});
$('#list-font-preview-container input:text')['click'](function() {
    document['execCommand']('selectAll', false, null)
});
$('#iosAppAd')['click'](function() {
    $(location)['attr']('href', mobile_app_link_url)
});
$('#androidAppAd')['click'](function() {
    $(location)['attr']('href', mobile_app_link_url)
});
$('#mobile_app_link')['click'](function() {
    $(location)['attr']('href', mobile_app_link_url)
});
function getParameterByName(_0x3d03xe, _0x3d03xf) {
    if (!_0x3d03xf) {
        _0x3d03xf = window['location']['href']
    };
    _0x3d03xe = _0x3d03xe['replace'](/[\[\]]/g, '\_0xb947[44]');
    var _0x3d03x10 = new RegExp('[?&]' + _0x3d03xe + '(=([^&#]*)|&|#|$)'),
        _0x3d03x11 = _0x3d03x10['exec'](_0x3d03xf);
    if (!_0x3d03x11) {
        return null
    };
    if (!_0x3d03x11[2]) {
        return ''
    };
    return decodeURIComponent(_0x3d03x11[2]['replace'](/\+/g, ' '))
}

function getWholeChar(_0x3d03x13, _0x3d03x14) {
    var _0x3d03x15 = _0x3d03x13['charCodeAt'](_0x3d03x14);
    if (Number['isNaN'](_0x3d03x15)) {
        return ''
    };
    if (_0x3d03x15 < 0xD800 || _0x3d03x15 > 0xDFFF) {
        return _0x3d03x13['charAt'](_0x3d03x14)
    };
    if (0xD800 <= _0x3d03x15 && _0x3d03x15 <= 0xDBFF) {
        if (_0x3d03x13['length'] <= (_0x3d03x14 + 1)) {
            throw 'High surrogate without following low surrogate'
        };
        var _0x3d03x16 = _0x3d03x13['charCodeAt'](_0x3d03x14 + 1);
        if (0xDC00 > _0x3d03x16 || _0x3d03x16 > 0xDFFF) {
            throw 'High surrogate without following low surrogate'
        };
        return _0x3d03x13['charAt'](_0x3d03x14) + _0x3d03x13['charAt'](_0x3d03x14 + 1)
    };
    if (_0x3d03x14 === 0) {
        throw 'Low surrogate without preceding high surrogate'
    };
    var _0x3d03x17 = _0x3d03x13['charCodeAt'](_0x3d03x14 - 1);
    if (0xD800 > _0x3d03x17 || _0x3d03x17 > 0xDBFF) {
        throw 'Low surrogate without preceding high surrogate'
    };
    return false
}

function unicodeLength(_0x3d03x13) {
    return [..._0x3d03x13]['length']
}
$('#modal-footer-close')['on']('click', function() {
    $('#myModal')['css']('display', 'none')
});

