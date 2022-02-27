/*
 * SOZO Design Ltd
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 *  that is bundled with this package in the file LICENSE.
 *  It is also available through the world-wide-web at this URL:
 *  http://opensource.org/licenses/osl-3.0.php
 *
 * @category    SOZO Design Ltd
 * @package     Sozo_OutdatedBrowserWarning
 * @copyright   Copyright (c) SOZO Design Ltd (https://sozodesign.co.uk)
 * @license     http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 */

define([
    'jquery'
], function ($) {
    'use strict';

    return function(config, element) {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");
        var msie_v = parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));

        if ((msie_v > 0) && (msie_v < 11)) {
            $('#browser-warning').css({"display": "block"});
            return true;
        }

        return false;
    }
});
