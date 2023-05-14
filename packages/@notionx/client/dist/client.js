"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var class_transformer_1 = require("class-transformer");
var p_queue_1 = __importDefault(require("p-queue"));
var p_retry_1 = __importStar(require("p-retry"));
var database_1 = require("./classes/database");
var normalize_database_schema_1 = require("./helpers/normalize-database-schema");
var normalize_filters_1 = require("./helpers/normalize-filters");
var normalize_sorts_1 = require("./helpers/normalize-sorts");
var serialize_1 = require("./helpers/serialize");
var Client = /** @class */ (function () {
    function Client(options) {
        this.options = options;
        this.queue = new p_queue_1.default({ interval: 100, intervalCap: 4 });
    }
    Client.prototype.database = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("/databases/".concat(id))];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, (0, class_transformer_1.plainToInstance)(database_1.Database, response, {
                                excludeExtraneousValues: true,
                            })];
                }
            });
        });
    };
    Client.prototype.queryDatabase = function (databaseId, schema, options) {
        return __awaiter(this, void 0, void 0, function () {
            var normalizedShema, normalizedFilters, normalizedSorts, results;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        normalizedShema = (0, normalize_database_schema_1.normalizeDatabaseSchema)(schema);
                        normalizedFilters = (0, normalize_filters_1.normalizeFilters)(normalizedShema, options === null || options === void 0 ? void 0 : options.filter);
                        normalizedSorts = (0, normalize_sorts_1.normalizeSorts)(normalizedShema, options === null || options === void 0 ? void 0 : options.sorts);
                        return [4 /*yield*/, this.request("/databases/".concat(databaseId, "/query"), {
                                method: 'POST',
                                body: JSON.stringify({
                                    filter: normalizedFilters,
                                    sorts: normalizedSorts,
                                }),
                            })];
                    case 1:
                        results = (_a.sent()).results;
                        return [2 /*return*/, results.map(function (result) {
                                return (0, serialize_1.deserializePage)(_this, normalizedShema, result);
                            })];
                }
            });
        });
    };
    Client.prototype.page = function (pageId, schema) {
        return __awaiter(this, void 0, void 0, function () {
            var normalizedSchema, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        normalizedSchema = (0, normalize_database_schema_1.normalizeDatabaseSchema)(schema);
                        return [4 /*yield*/, this.request("/pages/".concat(pageId))];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, (0, serialize_1.deserializePage)(this, normalizedSchema, result)];
                }
            });
        });
    };
    /**
     * Request the Notion API.
     * Include a queuing and retrying system to respect Rate Limiting.
     */
    Client.prototype.request = function (path, init) {
        var _this = this;
        return this.queue.add(function () {
            return (0, p_retry_1.default)(function () { return __awaiter(_this, void 0, void 0, function () {
                var response, _a;
                var _b, _c, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0: return [4 /*yield*/, fetch("".concat((_b = this.options.apiUrl) !== null && _b !== void 0 ? _b : 'https://api.notion.com', "/").concat((_c = this.options.apiVersion) !== null && _c !== void 0 ? _c : 'v1').concat(path), __assign(__assign({}, init), { headers: {
                                    'Content-Type': 'application/json',
                                    Authorization: "Bearer ".concat(this.options.auth),
                                    'Notion-Version': (_d = this.options.notionVersion) !== null && _d !== void 0 ? _d : '2022-06-28',
                                } }))];
                        case 1:
                            response = _e.sent();
                            if (!!response.ok) return [3 /*break*/, 3];
                            /**
                             * TODO: Add retryable errors
                             */
                            if ([0].includes(response.status)) {
                                throw new Error('TODO');
                            }
                            _a = p_retry_1.AbortError.bind;
                            return [4 /*yield*/, response.text()];
                        case 2: throw new (_a.apply(p_retry_1.AbortError, [void 0, _e.sent()]))();
                        case 3: return [2 /*return*/, response.json()];
                    }
                });
            }); }, {
                retries: 5,
                onFailedAttempt: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (res) { return setTimeout(res, 1000); })];
                }); }); },
            });
        });
    };
    return Client;
}());
exports.Client = Client;
//# sourceMappingURL=client.js.map