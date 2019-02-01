/*
 * Copyright :
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
'use strict';

function isIPv6Address (ipAddress) {
    return new RegExp('^\\[.*\\].*').test(ipAddress);
}

exports.result = function (url) {
    var res;
    if (isIPv6Address(url)) {
        res = url.split(']');
        res = res[1].split(':');
    } else {
        res = url.split(':');
    }
    return res[1] || '';
};
