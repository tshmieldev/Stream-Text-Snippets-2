// Polyfills for older browsers
var __awaiter =
	(this && this.__awaiter) ||
	function (thisArg, _arguments, P, generator) {
		function adopt(value) {
			return value instanceof P
				? value
				: new P(function (resolve) {
						resolve(value);
				  });
		}
		return new (P || (P = Promise))(function (resolve, reject) {
			function fulfilled(value) {
				try {
					step(generator.next(value));
				} catch (e) {
					reject(e);
				}
			}
			function rejected(value) {
				try {
					step(generator['throw'](value));
				} catch (e) {
					reject(e);
				}
			}
			function step(result) {
				result.done
					? resolve(result.value)
					: adopt(result.value).then(fulfilled, rejected);
			}
			step((generator = generator.apply(thisArg, _arguments || [])).next());
		});
	};
var __generator =
	(this && this.__generator) ||
	function (thisArg, body) {
		var _ = {
				label: 0,
				sent: function () {
					if (t[0] & 1) throw t[1];
					return t[1];
				},
				trys: [],
				ops: [],
			},
			f,
			y,
			t,
			g = Object.create(
				(typeof Iterator === 'function' ? Iterator : Object).prototype
			);
		return (
			(g.next = verb(0)),
			(g['throw'] = verb(1)),
			(g['return'] = verb(2)),
			typeof Symbol === 'function' &&
				(g[Symbol.iterator] = function () {
					return this;
				}),
			g
		);
		function verb(n) {
			return function (v) {
				return step([n, v]);
			};
		}
		function step(op) {
			if (f) throw new TypeError('Generator is already executing.');
			while ((g && ((g = 0), op[0] && (_ = 0)), _))
				try {
					if (
						((f = 1),
						y &&
							(t =
								op[0] & 2
									? y['return']
									: op[0]
									? y['throw'] || ((t = y['return']) && t.call(y), 0)
									: y.next) &&
							!(t = t.call(y, op[1])).done)
					)
						return t;
					if (((y = 0), t)) op = [op[0] & 2, t.value];
					switch (op[0]) {
						case 0:
						case 1:
							t = op;
							break;
						case 4:
							_.label++;
							return { value: op[1], done: false };
						case 5:
							_.label++;
							y = op[1];
							op = [0];
							continue;
						case 7:
							op = _.ops.pop();
							_.trys.pop();
							continue;
						default:
							if (
								!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
								(op[0] === 6 || op[0] === 2)
							) {
								_ = 0;
								continue;
							}
							if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
								_.label = op[1];
								break;
							}
							if (op[0] === 6 && _.label < t[1]) {
								_.label = t[1];
								t = op;
								break;
							}
							if (t && _.label < t[2]) {
								_.label = t[2];
								_.ops.push(op);
								break;
							}
							if (t[2]) _.ops.pop();
							_.trys.pop();
							continue;
					}
					op = body.call(thisArg, _);
				} catch (e) {
					op = [6, e];
					y = 0;
				} finally {
					f = t = 0;
				}
			if (op[0] & 5) throw op[1];
			return { value: op[0] ? op[1] : void 0, done: true };
		}
	};
function main() {
	return __awaiter(this, void 0, void 0, function () {
		function checkForCombo() {
			if (keys_1.Control) {
				handleSnippetManipulation();
				keys_1.Control = false;
				keys_1.Shift = false;
			}
		}
		function capitalizeArgs(args) {
			return __awaiter(this, void 0, void 0, function () {
				return __generator(this, function (_a) {
					//all to upper
					return [
						2 /*return*/,
						args.map(function (arg) {
							return arg.toUpperCase();
						}),
					];
				});
			});
		}
		function transformText(text) {
			return __awaiter(this, void 0, void 0, function () {
				var levels,
					lastLevel,
					lastLevelIndex,
					lastLevelText,
					lastLevelCloseIndex,
					lastLevelCloseText,
					processedText;
				return __generator(this, function (_a) {
					switch (_a.label) {
						case 0:
							levels = processText(text);
							_a.label = 1;
						case 1:
							if (!levels.length) return [3 /*break*/, 3];
							lastLevel = levels[levels.length - 1];
							lastLevelIndex = lastLevel[0];
							lastLevelText = text.slice(lastLevelIndex + 1);
							lastLevelCloseIndex = lastLevelText.indexOf(')');
							lastLevelCloseText = lastLevelText.slice(
								0,
								lastLevelCloseIndex
							);
							return [4 /*yield*/, transformText(lastLevelCloseText)];
						case 2:
							processedText = _a.sent();
							text =
								text.slice(0, lastLevelIndex) +
								processedText +
								text.slice(lastLevelIndex + 2 + lastLevelCloseIndex);
							levels = processText(text);
							return [3 /*break*/, 1];
						case 3:
							text = multiplyText(text);
							return [4 /*yield*/, resolveFunctions(text)];
						case 4:
							text = _a.sent();
							return [4 /*yield*/, resolveEmotes(text)];
						case 5:
							text = _a.sent();
							text = removeEscapes(text);
							return [2 /*return*/, text];
					}
				});
			});
		}
		function removeEscapes(text) {
			// "\" => ""
			// "\\" => "\"
			return text.replaceAll(/\\(.)/g, '$1');
		}
		function matchingFunctionSyntax(text) {
			var regex = /(?<!\\)\$(\w+)\s*(.*)/g;
			var match = regex.exec(text);
			return match;
		}
		function matchingEmoteSyntax(text) {
			var regex = /(?<!\\)\\(\w+)/g;
			var match = regex.exec(text);
			return match;
		}
		function resolveEmotes(text) {
			return __awaiter(this, void 0, void 0, function () {
				var match;
				return __generator(this, function (_a) {
					while ((match = matchingEmoteSyntax(text))) {
						if (!(match[1] in emoteDict)) {
							text = text.replaceAll(
								'\\'.concat(match[1]),
								'\\\\'.concat(match[1])
							);
							continue;
						}
						text = text.replaceAll(
							'\\'.concat(match[1]),
							emoteDict[match[1]]
						);
					}
					return [2 /*return*/, text];
				});
			});
		}
		function resolveFunctions(text) {
			return __awaiter(this, void 0, void 0, function () {
				var match, func, args, i, _a, _b, processedArgs, _c;
				return __generator(this, function (_d) {
					switch (_d.label) {
						case 0:
							if (!(match = matchingFunctionSyntax(text)))
								return [3 /*break*/, 9];
							if (!(match[1] in funcFict)) {
								text = text.replaceAll(
									'$'.concat(match[1]),
									'\\$'.concat(match[1])
								);
								return [3 /*break*/, 0];
							} //@ts-ignore
							func = funcFict[match[1]];
							if (!func) return [3 /*break*/, 8];
							if (!func.argc) return [3 /*break*/, 6];
							args = match[2].split(' ');
							if (!!func.unsafe) return [3 /*break*/, 4];
							i = 0;
							_d.label = 1;
						case 1:
							if (!(i < args.length)) return [3 /*break*/, 4];
							_a = args;
							_b = i;
							return [4 /*yield*/, resolveFunctions(args[i])];
						case 2:
							_a[_b] = _d.sent();
							_d.label = 3;
						case 3:
							i++;
							return [3 /*break*/, 1];
						case 4:
							return [4 /*yield*/, func.fn(args)];
						case 5:
							processedArgs = _d.sent();
							if (typeof processedArgs === 'string') {
								processedArgs = [processedArgs];
							}
							text =
								text.slice(0, match.index) +
								processedArgs.join(' ') +
								text.slice(match.index + match[0].length);
							return [3 /*break*/, 8];
						case 6:
							_c = text.slice(0, match.index);
							return [4 /*yield*/, func.fn()];
						case 7:
							text =
								_c +
								_d.sent() +
								text.slice(match.index + match[1].length + 1);
							_d.label = 8;
						case 8:
							return [3 /*break*/, 0];
						case 9:
							return [2 /*return*/, text];
					}
				});
			});
		}
		function processText(text) {
			var levels = [];
			var depth = 0;
			for (var i = 0; i < text.length; i++) {
				var c = text[i];
				if (c === '(' && !(i > 0 && text[i - 1] === '\\')) {
					depth++;
					if (depth > levels.length) levels.push([]);
					levels[depth - 1].push(i);
				}
				if (c === ')' && !(i > 0 && text[i - 1] === '\\')) depth--;
			}
			return levels;
		}
		function multiplyText(text) {
			var regex = /\\(\d+)/g;
			var match;
			while ((match = regex.exec(text)) !== null) {
				var multiplier = parseInt(match[1], 10);
				var startIndex = 0;
				var endIndex = match.index;
				var substring = text.slice(startIndex, endIndex);
				var multipliedText = substring.repeat(multiplier);
				text =
					text.slice(0, startIndex) +
					multipliedText +
					text.slice(endIndex + match[0].length);
			}
			return text;
		}
		function getChatText() {
			var editor = document.querySelector('[data-slate-editor="true"]');
			var output = '';
			function traverseNodes(node) {
				if (node.nodeName === 'P') {
					output += node.textContent;
				} else if (
					node.nodeName === 'SPAN' &&
					node.getAttribute('data-slate-string') !== null &&
					node.getAttribute('data-slate-length') != '0'
				) {
					output += node.textContent;
				} else {
					node.childNodes.forEach(function (child) {
						return traverseNodes(child);
					});
				}
			}
			traverseNodes(editor);
			return output;
		}
		function setChatText(text) {
			var editor = document.querySelector('[data-slate-editor="true"]');
			editor.focus();
			// Create a clipboard event
			var pasteEvent = new ClipboardEvent('paste', {
				bubbles: true,
				cancelable: true,
				clipboardData: new DataTransfer(),
			});
			// Set the paste data
			Object.defineProperty(pasteEvent, 'clipboardData', {
				value: {
					getData: function () {
						return text;
					},
					setData: function () {},
				},
			});
			// Dispatch the paste event
			editor.dispatchEvent(pasteEvent);
		}
		function sendMessage() {
			var btn = document.querySelector('[data-a-target="chat-send-button"');
			btn.click();
		}
		function sendChatMessage(text) {
			setChatText(text);
			setTimeout(sendMessage, 55);
		}
		function handleSnippetManipulation() {
			return __awaiter(this, void 0, void 0, function () {
				var text, editor, range, selection;
				return __generator(this, function (_a) {
					switch (_a.label) {
						case 0:
							text = getChatText();
							return [4 /*yield*/, transformText(text)];
						case 1:
							// multiplying
							text = _a.sent();
							editor = getEditor();
							editor.focus();
							range = document.createRange();
							range.selectNodeContents(editor);
							selection = window.getSelection();
							selection.removeAllRanges();
							selection.addRange(range);
							setTimeout(function () {
								return editor.dispatchEvent(
									new InputEvent('beforeinput', {
										inputType: 'insertFromPaste',
										data: text,
									}),
									100
								);
							});
							return [2 /*return*/];
					}
				});
			});
		}
		var keys_1, emoteDict, funcFict, editor;
		var _this = this;
		return __generator(this, function (_a) {
			{
				keys_1 = [];
				document.addEventListener(
					'keydown',
					function (e) {
						keys_1[e.key] = true;
						checkForCombo();
					},
					false
				);
				document.addEventListener(
					'keyup',
					function (e) {
						keys_1[e.key] = false;
					},
					false
				);
			}
			emoteDict = {
				o: 'OMEGALUL',
				ppp: 'Pepepains',
				fh: '4HEad',
				fho: '4House',
				pl: 'pepeLaugh',
				cl: 'Clueless',
				ms: 'monkaS',
				shrug: '¯\\_(ツ)_/¯',
				tea: 'TeaTime',
				warn: ':warning:',
				l: 'LUL',
				gg: 'Good Game',
				sad: 'Sadge',
			};
			funcFict = {
				uppercase: {
					fn: capitalizeArgs,
					argc: Infinity,
				},
				rand: {
					fn: function () {
						return __awaiter(_this, void 0, void 0, function () {
							return __generator(this, function (_a) {
								return [
									2 /*return*/,
									String(Math.floor(Math.random() * 100)),
								];
							});
						});
					},
					argc: 0,
				},
				rev: {
					fn: function (args) {
						return __awaiter(_this, void 0, void 0, function () {
							return __generator(this, function (_a) {
								return [
									2 /*return*/,
									args
										.map(function (arg) {
											return arg.split('').reverse().join('');
										})
										.reverse(),
								];
							});
						});
					},
					argc: Infinity,
				},
				drink: {
					fn: function (args) {
						return __awaiter(_this, void 0, void 0, function () {
							return __generator(this, function (_a) {
								return [
									2 /*return*/,
									''.concat(args.join(' '), ' teaTime'),
								];
							});
						});
					},
					argc: Infinity,
				},
				catFact: {
					fn: function () {
						return __awaiter(_this, void 0, void 0, function () {
							var data, json;
							return __generator(this, function (_a) {
								switch (_a.label) {
									case 0:
										return [
											4 /*yield*/,
											fetch('https://catfact.ninja/fact'),
										];
									case 1:
										data = _a.sent();
										return [4 /*yield*/, data.json()];
									case 2:
										json = _a.sent();
										return [2 /*return*/, json.fact];
								}
							});
						});
					},
					argc: 0,
					unsafe: true,
				},
				mock: {
					// Basically, toRandomCase
					fn: function (args) {
						return __awaiter(_this, void 0, void 0, function () {
							return __generator(this, function (_a) {
								return [
									2 /*return*/,
									args.map(function (arg) {
										return arg
											.split('')
											.map(function (c) {
												return Math.random() > 0.5
													? c.toLowerCase()
													: c.toUpperCase();
											})
											.join('');
									}),
								];
							});
						});
					},
					argc: Infinity,
					unsafe: true,
				},
				_: {
					fn: function () {
						return __awaiter(_this, void 0, void 0, function () {
							return __generator(this, function (_a) {
								return [2 /*return*/, '\\\\'];
							});
						});
					},
					argc: 0,
				},
				sorta: {
					fn: function (args) {
						return __awaiter(_this, void 0, void 0, function () {
							var buf;
							return __generator(this, function (_a) {
								buf = args.reduce(function (p, c) {
									return p + ' ' + c;
								});
								return [2 /*return*/, buf.split(' ').sort().join(' ')];
							});
						});
					},
					argc: Infinity,
				},
				sortn: {
					fn: function (args) {
						return __awaiter(_this, void 0, void 0, function () {
							var buf;
							return __generator(this, function (_a) {
								buf = args.reduce(function (p, c) {
									return p + ' ' + c;
								});
								return [
									2 /*return*/,
									buf
										.split(' ')
										.sort(function (a, b) {
											return parseInt(a) - parseInt(b);
										})
										.join(' '),
								];
							});
						});
					},
					argc: Infinity,
				},
				revw: {
					fn: function (args) {
						return __awaiter(_this, void 0, void 0, function () {
							return __generator(this, function (_a) {
								return [
									2 /*return*/,
									args
										.map(function (arg) {
											return arg.split(' ').reverse().join('');
										})
										.reverse(),
								];
							});
						});
					},
					argc: Infinity,
				},
			};
			window.setChatText = setChatText;
			window.sendMessage = sendMessage;
			window.getChatText = getChatText;
			window.sendChatMessage = sendChatMessage;
			window.getEditor = function () {
				return document.querySelector('[data-slate-editor="true"]');
			};
			editor = getEditor();
			return [2 /*return*/];
		});
	});
}
(function () {
	'use strict';
	console.log('STV2 loaded');
	setTimeout(main, 2000);
})();
