/**
 * @license
 * Copyright 2017 Adán Mauri Ungaro <adan.mauri@gmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

String.prototype.deromanize = function() {
	var tmpStr = this.toUpperCase().replace(" ", "").split("");
	var numerals = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
	var aux;
	var result = 0;
	while (tmpStr.length) {
		 aux = numerals[tmpStr.shift()];
		 result += aux * (aux < numerals[tmpStr[0]]?-1:1);
	}
	return result;
}

Number.prototype.romanize = function() {
	var tmpNum = this;
	var numerals = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
	var result = "";	

	Object.keys(numerals).forEach(function(key) {
		result += key.repeat(tmpNum / numerals[key] >>> 0);
		tmpNum %= numerals[key];
	});
	return result;
}


