import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import { Button, ButtonVariant } from '../Button';
import { Badge } from '../Badge';
import AngleDownIcon from '@patternfly/react-icons/dist/esm/icons/angle-down-icon';
import AngleUpIcon from '@patternfly/react-icons/dist/esm/icons/angle-up-icon';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';
import ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';
import { AdvancedSearchMenu } from './AdvancedSearchMenu';
import { TextInputGroup, TextInputGroupMain, TextInputGroupUtilities } from '../TextInputGroup';
import { InputGroup } from '../InputGroup';
import { Popper } from '../../helpers';
const SearchInputBase = (_a) => {
    var { className, value = '', attributes = [], formAdditionalItems, hasWordsAttrLabel = 'Has words', advancedSearchDelimiter, placeholder, hint, onChange, onSearch, onClear, onToggleAdvancedSearch, isAdvancedSearchOpen, resultsCount, onNextClick, onPreviousClick, innerRef, expandableInput, 'aria-label': ariaLabel = 'Search input', resetButtonLabel = 'Reset', openMenuButtonAriaLabel = 'Open advanced search', previousNavigationButtonAriaLabel = 'Previous', isPreviousNavigationButtonDisabled = false, isNextNavigationButtonDisabled = false, nextNavigationButtonAriaLabel = 'Next', submitSearchButtonLabel = 'Search', isDisabled = false, appendTo, removeFindDomNode = false, zIndex = 9999, type = 'text', name } = _a, props = __rest(_a, ["className", "value", "attributes", "formAdditionalItems", "hasWordsAttrLabel", "advancedSearchDelimiter", "placeholder", "hint", "onChange", "onSearch", "onClear", "onToggleAdvancedSearch", "isAdvancedSearchOpen", "resultsCount", "onNextClick", "onPreviousClick", "innerRef", "expandableInput", 'aria-label', "resetButtonLabel", "openMenuButtonAriaLabel", "previousNavigationButtonAriaLabel", "isPreviousNavigationButtonDisabled", "isNextNavigationButtonDisabled", "nextNavigationButtonAriaLabel", "submitSearchButtonLabel", "isDisabled", "appendTo", "removeFindDomNode", "zIndex", "type", "name"]);
    const [isSearchMenuOpen, setIsSearchMenuOpen] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState(value);
    const searchInputRef = React.useRef(null);
    const ref = React.useRef(null);
    const searchInputInputRef = innerRef || ref;
    const searchInputExpandableToggleRef = React.useRef(null);
    const [focusAfterExpandChange, setFocusAfterExpandChange] = React.useState(false);
    const { isExpanded, onToggleExpand, toggleAriaLabel } = expandableInput || {};
    React.useEffect(() => {
        var _a, _b;
        // this effect and the focusAfterExpandChange variable are needed to focus the input/toggle as needed when the
        // expansion toggle is fired without focusing on mount
        if (!focusAfterExpandChange) {
            return;
        }
        else if (isExpanded) {
            (_a = searchInputInputRef === null || searchInputInputRef === void 0 ? void 0 : searchInputInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
        else {
            (_b = searchInputExpandableToggleRef === null || searchInputExpandableToggleRef === void 0 ? void 0 : searchInputExpandableToggleRef.current) === null || _b === void 0 ? void 0 : _b.focus();
        }
        setFocusAfterExpandChange(false);
    }, [focusAfterExpandChange, isExpanded, searchInputInputRef, searchInputExpandableToggleRef]);
    React.useEffect(() => {
        setSearchValue(value);
    }, [value]);
    React.useEffect(() => {
        if (attributes.length > 0 && !advancedSearchDelimiter) {
            // eslint-disable-next-line no-console
            console.error('An advancedSearchDelimiter prop is required when advanced search attributes are provided using the attributes prop');
        }
    });
    React.useEffect(() => {
        setIsSearchMenuOpen(isAdvancedSearchOpen);
    }, [isAdvancedSearchOpen]);
    const onChangeHandler = (event, value) => {
        if (onChange) {
            onChange(event, value);
        }
        setSearchValue(value);
    };
    const onToggle = (e) => {
        const isOpen = !isSearchMenuOpen;
        setIsSearchMenuOpen(isOpen);
        if (onToggleAdvancedSearch) {
            onToggleAdvancedSearch(e, isOpen);
        }
    };
    const onSearchHandler = (event) => {
        event.preventDefault();
        if (onSearch) {
            onSearch(event, value, getAttrValueMap());
        }
        setIsSearchMenuOpen(false);
    };
    const splitStringExceptInQuotes = (str) => {
        let quoteType;
        return str.match(/\\?.|^$/g).reduce((p, c) => {
            if (c === "'" || c === '"') {
                if (!quoteType) {
                    quoteType = c;
                }
                if (c === quoteType) {
                    p.quote = !p.quote;
                }
            }
            else if (!p.quote && c === ' ') {
                p.a.push('');
            }
            else {
                p.a[p.a.length - 1] += c.replace(/\\(.)/, '$1');
            }
            return p;
        }, { a: [''] }).a;
    };
    const getAttrValueMap = () => {
        const attrValue = {};
        const pairs = splitStringExceptInQuotes(searchValue);
        pairs.map((pair) => {
            const splitPair = pair.split(advancedSearchDelimiter);
            if (splitPair.length === 2) {
                attrValue[splitPair[0]] = splitPair[1].replace(/(^'|'$)/g, '');
            }
            else if (splitPair.length === 1) {
                attrValue.haswords = attrValue.hasOwnProperty('haswords')
                    ? `${attrValue.haswords} ${splitPair[0]}`
                    : splitPair[0];
            }
        });
        return attrValue;
    };
    const onEnter = (event) => {
        if (event.key === 'Enter') {
            onSearchHandler(event);
        }
    };
    const onClearInput = (e) => {
        if (onClear) {
            onClear(e);
        }
        if (searchInputInputRef && searchInputInputRef.current) {
            searchInputInputRef.current.focus();
        }
    };
    const onExpandHandler = (event) => {
        setSearchValue('');
        onToggleExpand(event, isExpanded);
        setFocusAfterExpandChange(true);
    };
    const renderUtilities = value && (resultsCount || (!!onNextClick && !!onPreviousClick) || (!!onClear && !expandableInput));
    const buildTextInputGroup = (_a = {}) => {
        var searchInputProps = __rest(_a, []);
        return (React.createElement(TextInputGroup, Object.assign({ isDisabled: isDisabled }, searchInputProps),
            React.createElement(TextInputGroupMain, { hint: hint, icon: React.createElement(SearchIcon, null), innerRef: searchInputInputRef, value: searchValue, placeholder: placeholder, "aria-label": ariaLabel, onKeyDown: onEnter, onChange: onChangeHandler, type: type, name: name }),
            renderUtilities && (React.createElement(TextInputGroupUtilities, null,
                resultsCount && React.createElement(Badge, { isRead: true }, resultsCount),
                !!onNextClick && !!onPreviousClick && (React.createElement("div", { className: "pf-c-text-input-group__group" },
                    React.createElement(Button, { variant: ButtonVariant.plain, "aria-label": previousNavigationButtonAriaLabel, isDisabled: isDisabled || isPreviousNavigationButtonDisabled, onClick: onPreviousClick },
                        React.createElement(AngleUpIcon, null)),
                    React.createElement(Button, { variant: ButtonVariant.plain, "aria-label": nextNavigationButtonAriaLabel, isDisabled: isDisabled || isNextNavigationButtonDisabled, onClick: onNextClick },
                        React.createElement(AngleDownIcon, null)))),
                !!onClear && !expandableInput && (React.createElement(Button, { variant: ButtonVariant.plain, isDisabled: isDisabled, "aria-label": resetButtonLabel, onClick: onClearInput },
                    React.createElement(TimesIcon, null)))))));
    };
    const expandableToggle = (React.createElement(Button, { variant: ButtonVariant.plain, "aria-label": toggleAriaLabel, "aria-expanded": isExpanded, icon: isExpanded ? React.createElement(TimesIcon, null) : React.createElement(SearchIcon, null), onClick: onExpandHandler, ref: searchInputExpandableToggleRef }));
    const buildExpandableSearchInput = (_a = {}) => {
        var searchInputProps = __rest(_a, []);
        return (React.createElement(InputGroup, Object.assign({}, searchInputProps),
            buildTextInputGroup(),
            expandableToggle));
    };
    const buildSearchTextInputGroup = (_a = {}) => {
        var searchInputProps = __rest(_a, []);
        if (expandableInput) {
            return buildExpandableSearchInput(Object.assign({}, searchInputProps));
        }
        return buildTextInputGroup(Object.assign({}, searchInputProps));
    };
    const buildSearchTextInputGroupWithExtraButtons = (_a = {}) => {
        var searchInputProps = __rest(_a, []);
        return (React.createElement(InputGroup, Object.assign({}, searchInputProps),
            buildTextInputGroup(),
            (attributes.length > 0 || onToggleAdvancedSearch) && (React.createElement(Button, { className: isSearchMenuOpen && 'pf-m-expanded', variant: ButtonVariant.control, "aria-label": openMenuButtonAriaLabel, onClick: onToggle, isDisabled: isDisabled, "aria-expanded": isSearchMenuOpen },
                React.createElement(CaretDownIcon, null))),
            !!onSearch && (React.createElement(Button, { type: "submit", variant: ButtonVariant.control, "aria-label": submitSearchButtonLabel, onClick: onSearchHandler, isDisabled: isDisabled || !searchValue },
                React.createElement(ArrowRightIcon, null))),
            expandableInput && expandableToggle));
    };
    const searchInputProps = Object.assign(Object.assign({}, props), { className: className && css(className), innerRef: searchInputRef });
    if (!!expandableInput && !isExpanded) {
        return React.createElement(InputGroup, Object.assign({}, searchInputProps), expandableToggle);
    }
    if (!!onSearch || attributes.length > 0 || !!onToggleAdvancedSearch) {
        if (attributes.length > 0) {
            const AdvancedSearch = (React.createElement("div", null,
                React.createElement(AdvancedSearchMenu, { value: value, parentRef: searchInputRef, parentInputRef: searchInputInputRef, onSearch: onSearch, onClear: onClear, onChange: onChange, onToggleAdvancedMenu: onToggle, resetButtonLabel: resetButtonLabel, submitSearchButtonLabel: submitSearchButtonLabel, attributes: attributes, formAdditionalItems: formAdditionalItems, hasWordsAttrLabel: hasWordsAttrLabel, advancedSearchDelimiter: advancedSearchDelimiter, getAttrValueMap: getAttrValueMap, isSearchMenuOpen: isSearchMenuOpen })));
            const AdvancedSearchWithPopper = (React.createElement("div", Object.assign({ className: css(className), ref: searchInputRef }, props),
                React.createElement(Popper, { trigger: buildSearchTextInputGroupWithExtraButtons(), popper: AdvancedSearch, isVisible: isSearchMenuOpen, enableFlip: true, appendTo: () => appendTo || searchInputRef.current, removeFindDomNode: removeFindDomNode, zIndex: zIndex })));
            const AdvancedSearchInline = (React.createElement("div", Object.assign({ className: css(className), ref: searchInputRef }, props),
                buildSearchTextInputGroupWithExtraButtons(),
                AdvancedSearch));
            return appendTo !== 'inline' ? AdvancedSearchWithPopper : AdvancedSearchInline;
        }
        return buildSearchTextInputGroupWithExtraButtons(Object.assign({}, searchInputProps));
    }
    return buildSearchTextInputGroup(searchInputProps);
};
SearchInputBase.displayName = 'SearchInputBase';
export const SearchInput = React.forwardRef((props, ref) => (React.createElement(SearchInputBase, Object.assign({}, props, { innerRef: ref }))));
SearchInput.displayName = 'SearchInput';
//# sourceMappingURL=SearchInput.js.map