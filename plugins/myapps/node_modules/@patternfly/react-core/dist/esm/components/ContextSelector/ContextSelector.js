import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/ContextSelector/context-selector';
import { css } from '@patternfly/react-styles';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import { ContextSelectorToggle } from './ContextSelectorToggle';
import { ContextSelectorMenuList } from './ContextSelectorMenuList';
import { ContextSelectorContext } from './contextSelectorConstants';
import { Button, ButtonVariant } from '../Button';
import { TextInput } from '../TextInput';
import { InputGroup } from '../InputGroup';
import { KeyTypes } from '../../helpers/constants';
import { FocusTrap, getUniqueId } from '../../helpers';
import { Popper } from '../../helpers/Popper/Popper';
import { getOUIAProps, getDefaultOUIAId } from '../../helpers';
export class ContextSelector extends React.Component {
    constructor(props) {
        super(props);
        this.parentRef = React.createRef();
        this.popperRef = React.createRef();
        this.onEnterPressed = (event) => {
            if (event.key === KeyTypes.Enter) {
                this.props.onSearchButtonClick();
            }
        };
        this.state = {
            ouiaStateId: getDefaultOUIAId(ContextSelector.displayName)
        };
    }
    render() {
        const _a = this.props, { children, className, isOpen, isFullHeight, onToggle, onSelect, screenReaderLabel, toggleText, searchButtonAriaLabel, searchInputValue, onSearchInputChange, searchInputPlaceholder, onSearchButtonClick, menuAppendTo, ouiaId, ouiaSafe, isPlain, isText, footer, disableFocusTrap, isFlipEnabled, id, removeFindDomNode, zIndex } = _a, props = __rest(_a, ["children", "className", "isOpen", "isFullHeight", "onToggle", "onSelect", "screenReaderLabel", "toggleText", "searchButtonAriaLabel", "searchInputValue", "onSearchInputChange", "searchInputPlaceholder", "onSearchButtonClick", "menuAppendTo", "ouiaId", "ouiaSafe", "isPlain", "isText", "footer", "disableFocusTrap", "isFlipEnabled", "id", "removeFindDomNode", "zIndex"]);
        const uniqueId = id || getUniqueId();
        const toggleId = `pf-context-selector-toggle-id-${uniqueId}`;
        const screenReaderLabelId = `pf-context-selector-label-id-${uniqueId}`;
        const isStatic = isFlipEnabled && menuAppendTo !== 'inline';
        const menuContainer = (React.createElement("div", { className: css(styles.contextSelectorMenu, isStatic && styles.modifiers.static), id: uniqueId }, isOpen && (React.createElement(FocusTrap, { active: !disableFocusTrap, focusTrapOptions: { clickOutsideDeactivates: true, tabbableOptions: { displayCheck: 'none' } } },
            React.createElement("div", { className: css(styles.contextSelectorMenuSearch) },
                React.createElement(InputGroup, null,
                    React.createElement(TextInput, { value: searchInputValue, type: "search", placeholder: searchInputPlaceholder, onChange: onSearchInputChange, onKeyPress: this.onEnterPressed, "aria-label": searchButtonAriaLabel }),
                    React.createElement(Button, { variant: ButtonVariant.control, "aria-label": searchButtonAriaLabel, onClick: onSearchButtonClick },
                        React.createElement(SearchIcon, { "aria-hidden": "true" })))),
            React.createElement(ContextSelectorContext.Provider, { value: { onSelect } },
                React.createElement(ContextSelectorMenuList, { isOpen: isOpen }, children)),
            footer))));
        const popperContainer = (React.createElement("div", Object.assign({ className: css(styles.contextSelector, isOpen && styles.modifiers.expanded, className), ref: this.popperRef }, props), isOpen && menuContainer));
        const mainContainer = (React.createElement("div", Object.assign({ className: css(styles.contextSelector, isOpen && styles.modifiers.expanded, isFullHeight && styles.modifiers.fullHeight, className), ref: this.parentRef }, getOUIAProps(ContextSelector.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe), props),
            screenReaderLabel && (React.createElement("span", { id: screenReaderLabelId, hidden: true }, screenReaderLabel)),
            React.createElement(ContextSelectorToggle, { onToggle: onToggle, isOpen: isOpen, toggleText: toggleText, id: toggleId, parentRef: menuAppendTo === 'inline' ? this.parentRef : this.popperRef, "aria-labelledby": `${screenReaderLabelId} ${toggleId}`, isPlain: isPlain, isText: isText }),
            isOpen && menuAppendTo === 'inline' && menuContainer));
        const getParentElement = () => {
            if (this.parentRef && this.parentRef.current) {
                return this.parentRef.current.parentElement;
            }
            return null;
        };
        return menuAppendTo === 'inline' ? (mainContainer) : (React.createElement(Popper, { trigger: mainContainer, popper: popperContainer, appendTo: menuAppendTo === 'parent' ? getParentElement() : menuAppendTo, isVisible: isOpen, removeFindDomNode: removeFindDomNode, zIndex: zIndex }));
    }
}
ContextSelector.displayName = 'ContextSelector';
ContextSelector.defaultProps = {
    children: null,
    className: '',
    isOpen: false,
    onToggle: () => undefined,
    onSelect: () => undefined,
    screenReaderLabel: '',
    toggleText: '',
    searchButtonAriaLabel: 'Search menu items',
    searchInputValue: '',
    onSearchInputChange: () => undefined,
    searchInputPlaceholder: 'Search',
    onSearchButtonClick: () => undefined,
    menuAppendTo: 'inline',
    ouiaSafe: true,
    disableFocusTrap: false,
    footer: null,
    isPlain: false,
    isText: false,
    isFlipEnabled: true,
    removeFindDomNode: false,
    zIndex: 9999
};
//# sourceMappingURL=ContextSelector.js.map