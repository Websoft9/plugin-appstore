import { __assign } from "tslib";
import { useCallback, useMemo, useRef } from 'react';
import { mergeOptions } from "../../utilities/index.js";
import { useInternalState } from "./useQuery.js";
import { useApolloClient } from "./useApolloClient.js";
var EAGER_METHODS = [
    'refetch',
    'reobserve',
    'fetchMore',
    'updateQuery',
    'startPolling',
    'subscribeToMore',
];
export function useLazyQuery(query, options) {
    var _a;
    var execOptionsRef = useRef();
    var optionsRef = useRef();
    var queryRef = useRef();
    var merged = execOptionsRef.current ? mergeOptions(options, execOptionsRef.current) : options;
    var document = (_a = merged === null || merged === void 0 ? void 0 : merged.query) !== null && _a !== void 0 ? _a : query;
    optionsRef.current = merged;
    queryRef.current = document;
    var internalState = useInternalState(useApolloClient(options && options.client), document);
    var useQueryResult = internalState.useQuery(__assign(__assign({}, merged), { skip: !execOptionsRef.current }));
    var initialFetchPolicy = useQueryResult.observable.options.initialFetchPolicy ||
        internalState.getDefaultFetchPolicy();
    var result = Object.assign(useQueryResult, {
        called: !!execOptionsRef.current,
    });
    var eagerMethods = useMemo(function () {
        var eagerMethods = {};
        var _loop_1 = function (key) {
            var method = result[key];
            eagerMethods[key] = function () {
                if (!execOptionsRef.current) {
                    execOptionsRef.current = Object.create(null);
                    internalState.forceUpdate();
                }
                return method.apply(this, arguments);
            };
        };
        for (var _i = 0, EAGER_METHODS_1 = EAGER_METHODS; _i < EAGER_METHODS_1.length; _i++) {
            var key = EAGER_METHODS_1[_i];
            _loop_1(key);
        }
        return eagerMethods;
    }, []);
    Object.assign(result, eagerMethods);
    var execute = useCallback(function (executeOptions) {
        execOptionsRef.current = executeOptions ? __assign(__assign({}, executeOptions), { fetchPolicy: executeOptions.fetchPolicy || initialFetchPolicy }) : {
            fetchPolicy: initialFetchPolicy,
        };
        var options = mergeOptions(optionsRef.current, __assign({ query: queryRef.current }, execOptionsRef.current));
        var promise = internalState
            .executeQuery(__assign(__assign({}, options), { skip: false }))
            .then(function (queryResult) { return Object.assign(queryResult, eagerMethods); });
        promise.catch(function () { });
        return promise;
    }, []);
    return [execute, result];
}
//# sourceMappingURL=useLazyQuery.js.map