import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/TreeView/tree-view';
import { canUseDOM } from '../../helpers/util';
import { handleArrows } from '../../helpers';
import { KeyTypes } from '../../helpers/constants';
export class TreeViewRoot extends React.Component {
    constructor() {
        super(...arguments);
        this.displayName = 'TreeViewRoot';
        this.treeRef = React.createRef();
        this.handleKeys = (event) => {
            var _a, _b, _c, _d, _e, _f, _g;
            if (!this.treeRef.current.contains(event.target)) {
                return;
            }
            const activeElement = document.activeElement;
            const key = event.key;
            const treeItems = Array.from((_a = this.treeRef.current) === null || _a === void 0 ? void 0 : _a.getElementsByClassName('pf-c-tree-view__node')).filter(el => !el.classList.contains('pf-m-disabled'));
            if (key === KeyTypes.Space) {
                activeElement.click();
                event.preventDefault();
            }
            handleArrows(event, treeItems, (element) => activeElement === element, undefined, [], undefined, true, true);
            if (['ArrowLeft', 'ArrowRight'].includes(key)) {
                const isExpandable = (_c = (_b = activeElement === null || activeElement === void 0 ? void 0 : activeElement.firstElementChild) === null || _b === void 0 ? void 0 : _b.firstElementChild) === null || _c === void 0 ? void 0 : _c.classList.contains('pf-c-tree-view__node-toggle');
                const isExpanded = (_d = activeElement === null || activeElement === void 0 ? void 0 : activeElement.closest('li')) === null || _d === void 0 ? void 0 : _d.classList.contains('pf-m-expanded');
                if (key === 'ArrowLeft') {
                    if (isExpandable && isExpanded) {
                        activeElement.click();
                    }
                    else {
                        const parentList = (_e = activeElement === null || activeElement === void 0 ? void 0 : activeElement.closest('ul')) === null || _e === void 0 ? void 0 : _e.parentElement;
                        if ((parentList === null || parentList === void 0 ? void 0 : parentList.tagName) !== 'DIV') {
                            const parentButton = parentList === null || parentList === void 0 ? void 0 : parentList.querySelector('button');
                            activeElement.tabIndex = -1;
                            if (parentButton) {
                                parentButton.tabIndex = 0;
                                parentButton.focus();
                            }
                        }
                    }
                }
                else {
                    if (isExpandable && !isExpanded) {
                        activeElement.tabIndex = -1;
                        activeElement.click();
                        const childElement = (_g = (_f = activeElement === null || activeElement === void 0 ? void 0 : activeElement.closest('li')) === null || _f === void 0 ? void 0 : _f.querySelector('ul > li')) === null || _g === void 0 ? void 0 : _g.querySelector('button');
                        if (childElement) {
                            childElement.tabIndex = 0;
                            childElement.focus();
                        }
                    }
                }
                event.preventDefault();
            }
        };
        this.handleKeysCheckbox = (event) => {
            var _a, _b, _c, _d, _e;
            if (!this.treeRef.current.contains(event.target)) {
                return;
            }
            const activeElement = document.activeElement;
            const key = event.key;
            if (key === KeyTypes.Space) {
                activeElement.click();
                event.preventDefault();
            }
            const treeNodes = Array.from((_a = this.treeRef.current) === null || _a === void 0 ? void 0 : _a.getElementsByClassName('pf-c-tree-view__node'));
            handleArrows(event, treeNodes, (element) => element.contains(activeElement), (element) => element.querySelector('button,input'), [], undefined, true, true);
            if (['ArrowLeft', 'ArrowRight'].includes(key)) {
                if (key === 'ArrowLeft') {
                    if ((activeElement === null || activeElement === void 0 ? void 0 : activeElement.tagName) === 'INPUT') {
                        ((_b = activeElement === null || activeElement === void 0 ? void 0 : activeElement.parentElement) === null || _b === void 0 ? void 0 : _b.previousSibling) &&
                            activeElement.parentElement.previousSibling.focus();
                    }
                    else if (activeElement === null || activeElement === void 0 ? void 0 : activeElement.previousSibling) {
                        if (((_c = activeElement.previousElementSibling) === null || _c === void 0 ? void 0 : _c.tagName) === 'SPAN') {
                            activeElement.previousSibling.firstChild.focus();
                        }
                        else {
                            activeElement.previousSibling.focus();
                        }
                    }
                }
                else {
                    if ((activeElement === null || activeElement === void 0 ? void 0 : activeElement.tagName) === 'INPUT') {
                        ((_d = activeElement.parentElement) === null || _d === void 0 ? void 0 : _d.nextSibling) && activeElement.parentElement.nextSibling.focus();
                    }
                    else if (activeElement === null || activeElement === void 0 ? void 0 : activeElement.nextSibling) {
                        if (((_e = activeElement.nextElementSibling) === null || _e === void 0 ? void 0 : _e.tagName) === 'SPAN') {
                            activeElement.nextSibling.firstChild.focus();
                        }
                        else {
                            activeElement.nextSibling.focus();
                        }
                    }
                }
                event.preventDefault();
            }
        };
        this.variantStyleModifiers = {
            default: '',
            compact: styles.modifiers.compact,
            compactNoBackground: [styles.modifiers.compact, styles.modifiers.noBackground]
        };
    }
    componentDidMount() {
        var _a;
        if (canUseDOM) {
            window.addEventListener('keydown', this.props.hasChecks || this.props.hasSelectableNodes ? this.handleKeysCheckbox : this.handleKeys);
        }
        if (this.props.hasChecks || this.props.hasSelectableNodes) {
            const firstToggle = this.treeRef.current.getElementsByClassName('pf-c-tree-view__node-toggle')[0];
            if (firstToggle) {
                firstToggle.tabIndex = 0;
            }
            if (this.props.hasChecks) {
                const firstInput = this.treeRef.current.getElementsByTagName('INPUT')[0];
                if (firstInput) {
                    firstInput.tabIndex = 0;
                }
            }
            if (this.props.hasSelectableNodes) {
                const firstTextButton = this.treeRef.current.getElementsByClassName('pf-c-tree-view__node-text')[0];
                if (firstTextButton) {
                    firstTextButton.tabIndex = 0;
                }
            }
        }
        else {
            ((_a = this.treeRef.current) === null || _a === void 0 ? void 0 : _a.getElementsByClassName('pf-c-tree-view__node')[0]).tabIndex = 0;
        }
    }
    componentWillUnmount() {
        if (canUseDOM) {
            window.removeEventListener('keydown', this.props.hasChecks || this.props.hasSelectableNodes ? this.handleKeysCheckbox : this.handleKeys);
        }
    }
    render() {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _a = this.props, { children, hasChecks, hasGuides, variant, className, hasSelectableNodes } = _a, props = __rest(_a, ["children", "hasChecks", "hasGuides", "variant", "className", "hasSelectableNodes"]);
        return (React.createElement("div", Object.assign({ className: css(styles.treeView, hasGuides && styles.modifiers.guides, this.variantStyleModifiers[variant], className), ref: this.treeRef }, props), children));
    }
}
//# sourceMappingURL=TreeViewRoot.js.map