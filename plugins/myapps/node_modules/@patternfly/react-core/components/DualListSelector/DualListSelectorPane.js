import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DualListSelector/dual-list-selector';
import { css } from '@patternfly/react-styles';
import { DualListSelectorTree } from './DualListSelectorTree';
import { getUniqueId } from '../../helpers';
import { DualListSelectorListWrapper } from './DualListSelectorListWrapper';
import { DualListSelectorContext, DualListSelectorPaneContext } from './DualListSelectorContext';
import { DualListSelectorList } from './DualListSelectorList';
import { SearchInput } from '../SearchInput';
export const DualListSelectorPane = (_a) => {
    var { isChosen = false, className = '', status = '', actions, searchInput, children, onOptionSelect, onOptionCheck, title = '', options = [], selectedOptions = [], isSearchable = false, searchInputAriaLabel = '', onFilterUpdate, onSearchInputChanged, onSearchInputClear, filterOption, id = getUniqueId('dual-list-selector-pane'), isDisabled = false, listMinHeight } = _a, props = __rest(_a, ["isChosen", "className", "status", "actions", "searchInput", "children", "onOptionSelect", "onOptionCheck", "title", "options", "selectedOptions", "isSearchable", "searchInputAriaLabel", "onFilterUpdate", "onSearchInputChanged", "onSearchInputClear", "filterOption", "id", "isDisabled", "listMinHeight"]);
    const [input, setInput] = React.useState('');
    const { isTree } = React.useContext(DualListSelectorContext);
    // only called when search input is dynamically built
    const onChange = (e, newValue) => {
        let filtered;
        if (isTree) {
            filtered = options
                .map(opt => Object.assign({}, opt))
                .filter(item => filterInput(item, newValue));
        }
        else {
            filtered = options.filter(option => {
                if (displayOption(option)) {
                    return option;
                }
            });
        }
        onFilterUpdate(filtered, isChosen ? 'chosen' : 'available', newValue === '');
        if (onSearchInputChanged) {
            onSearchInputChanged(newValue, e);
        }
        setInput(newValue);
    };
    // only called when options are passed via options prop and isTree === true
    const filterInput = (item, input) => {
        if (filterOption) {
            return filterOption(item, input);
        }
        else {
            if (item.text.toLowerCase().includes(input.toLowerCase()) || input === '') {
                return true;
            }
        }
        if (item.children) {
            return ((item.children = item.children.map(opt => Object.assign({}, opt)).filter(child => filterInput(child, input)))
                .length > 0);
        }
    };
    // only called when options are passed via options prop and isTree === false
    const displayOption = (option) => {
        if (filterOption) {
            return filterOption(option, input);
        }
        else {
            return option
                .toString()
                .toLowerCase()
                .includes(input.toLowerCase());
        }
    };
    return (React.createElement("div", Object.assign({ className: css(styles.dualListSelectorPane, isChosen ? styles.modifiers.chosen : 'pf-m-available', className) }, props),
        title && (React.createElement("div", { className: css(styles.dualListSelectorHeader) },
            React.createElement("div", { className: "pf-c-dual-list-selector__title" },
                React.createElement("div", { className: css(styles.dualListSelectorTitleText) }, title)))),
        (actions || searchInput || isSearchable) && (React.createElement("div", { className: css(styles.dualListSelectorTools) },
            (isSearchable || searchInput) && (React.createElement("div", { className: css(styles.dualListSelectorToolsFilter) }, searchInput ? (searchInput) : (React.createElement(SearchInput, { onChange: isDisabled ? undefined : onChange, onClear: onSearchInputClear ? onSearchInputClear : e => onChange(e, ''), isDisabled: isDisabled, "aria-label": searchInputAriaLabel, type: "search" })))),
            actions && React.createElement("div", { className: css(styles.dualListSelectorToolsActions) }, actions))),
        status && (React.createElement("div", { className: css(styles.dualListSelectorStatus) },
            React.createElement("div", { className: css(styles.dualListSelectorStatusText), id: `${id}-status` }, status))),
        React.createElement(DualListSelectorPaneContext.Provider, { value: { isChosen } },
            !isTree && (React.createElement(DualListSelectorListWrapper, Object.assign({ "aria-labelledby": `${id}-status`, options: options, selectedOptions: selectedOptions, onOptionSelect: (e, index, id) => onOptionSelect(e, index, isChosen, id), displayOption: displayOption, id: `${id}-list`, isDisabled: isDisabled }, (listMinHeight && {
                style: { '--pf-c-dual-list-selector__menu--MinHeight': listMinHeight }
            })), children)),
            isTree && (React.createElement(DualListSelectorListWrapper, Object.assign({ "aria-labelledby": `${id}-status`, id: `${id}-list` }, (listMinHeight && {
                style: { '--pf-c-dual-list-selector__menu--MinHeight': listMinHeight }
            })), options.length > 0 ? (React.createElement(DualListSelectorList, null,
                React.createElement(DualListSelectorTree, { data: isSearchable
                        ? options
                            .map(opt => Object.assign({}, opt))
                            .filter(item => filterInput(item, input))
                        : options, onOptionCheck: onOptionCheck, id: `${id}-tree`, isDisabled: isDisabled }))) : (children))))));
};
DualListSelectorPane.displayName = 'DualListSelectorPane';
//# sourceMappingURL=DualListSelectorPane.js.map