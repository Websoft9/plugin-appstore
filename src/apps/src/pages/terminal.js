import { FormSelect, FormSelectOption, NumberInput, Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem } from "@patternfly/react-core";
import cockpit from "cockpit";
import React from "react";
import '../lib/cockpit-dark-theme';
import "../lib/css/terminal.scss";
import '../lib/patternfly/patternfly-4-cockpit.scss';

import { Terminal } from "../lib/cockpit-components-terminal";

const _ = cockpit.gettext;

class UserTerminal extends React.Component {
    createChannel(user) {
        return cockpit.channel({
            payload: "stream",
            spawn: [user.shell || "/bin/bash"],
            environ: [
                "TERM=xterm-256color",
            ],
            directory: user.home || "/",
            pty: true
        });
    }

    constructor(props) {
        super(props);

        let theme = localStorage.getItem('terminal:theme');
        let size = localStorage.getItem('terminal:font-size');

        if (theme === null || theme === "") {
            theme = document.cookie.replace(/(?:(?:^|.*;\s*)theme_cookie\s*=\s*([^;]*).*$)|^.*$/, "$1");
            if (theme !== "") {
                localStorage.setItem('terminal:theme', theme);
                this.invalidateCookie("theme_cookie");
            }
        }
        if (size === null || size === "") {
            size = document.cookie.replace(/(?:(?:^|.*;\s*)size_cookie\s*=\s*([^;]*).*$)|^.*$/, "$1");
            if (size !== "") {
                localStorage.setItem('terminal:font-size', size);
                this.invalidateCookie("size_cookie");
            }
        }

        this.state = {
            title: 'Terminal',
            theme: theme || "black-theme",
            size: parseInt(size) || 16,
        };
        this.onTitleChanged = this.onTitleChanged.bind(this);
        this.onResetClick = this.onResetClick.bind(this);
        this.onThemeChanged = this.onThemeChanged.bind(this);
        this.onPlus = this.onPlus.bind(this);
        this.onMinus = this.onMinus.bind(this);

        this.terminalRef = React.createRef();
        this.resetButtonRef = React.createRef();

        this.minSize = 6;
        this.maxSize = 40;
    }

    componentDidMount() {
        cockpit.user().done(function (user) {
            this.setState({ user, channel: this.createChannel(user) });
        }.bind(this));
    }

    onTitleChanged(title) {
        this.setState({ title });
    }

    invalidateCookie(key) {
        const cookie = key + "=''" +
            "; path=/; Max-Age=0;";
        document.cookie = cookie;
    }

    onPlus() {
        this.setState((state, _) => {
            localStorage.setItem('terminal:font-size', state.size + 1);
            return { size: state.size + 1 };
        });
    }

    onMinus() {
        this.setState((state, _) => {
            localStorage.setItem('terminal:font-size', state.size - 1);
            return { size: state.size - 1 };
        });
    }

    onThemeChanged(value) {
        this.setState({ theme: value });
        localStorage.setItem('terminal:theme', value);
    }

    onResetClick(event) {
        if (event.button !== 0)
            return;

        if (!this.state.channel.valid && this.state.user)
            this.setState(prevState => ({ channel: this.createChannel(prevState.user) }));
        else
            this.terminalRef.current.reset();

        this.resetButtonRef.current.blur();
        this.terminalRef.current.focus();
    }

    render() {
        alert("channel:" + this.state.channel)
        alert("terminalRef:" + this.terminalRef)
        alert("theme:" + this.state.theme)
        alert("size:" + this.state.size)

        const terminal = this.state.channel
            ? <Terminal ref={this.terminalRef}
                channel={this.state.channel}
                theme={this.state.theme}
                fontSize={this.state.size}
                parentId="the-terminal"
                onTitleChanged={this.onTitleChanged} />
            : <span>Loading...</span>;

        return (
            <div className="console-ct-container">
                <div className="terminal-group">
                    <tt className="terminal-title">{this.state.title}</tt>
                    <Toolbar id="toolbar">
                        <ToolbarContent>
                            <ToolbarGroup>
                                <ToolbarItem variant="label" id="size-select">
                                    {_("Font size")}
                                </ToolbarItem>
                                <ToolbarItem>
                                    <NumberInput
                                        className="font-size"
                                        value={this.state.size}
                                        min={this.minSize}
                                        max={this.maxSize}
                                        onMinus={this.onMinus}
                                        onPlus={this.onPlus}
                                        inputAriaLabel={_("Font size")}
                                        minusBtnAriaLabel={_("Decrease by one")}
                                        plusBtnAriaLabel={_("Increase by one")}
                                        widthChars={2}
                                    />
                                </ToolbarItem>
                            </ToolbarGroup>
                            <ToolbarGroup>
                                <ToolbarItem variant="label" id="theme-select">
                                    {_("Appearance")}
                                </ToolbarItem>
                                <ToolbarItem>
                                    <FormSelect id="fs" onChange={this.onThemeChanged}
                                        aria-labelledby="theme-select"
                                        value={this.state.theme}>
                                        <FormSelectOption id="Black" value='black-theme' label={_("Black")} />
                                        <FormSelectOption id="Dark" value='dark-theme' label={_("Dark")} />
                                        <FormSelectOption id="Light" value='light-theme' label={_("Light")} />
                                        <FormSelectOption id="White" value='white-theme' label={_("White")} />
                                    </FormSelect>
                                </ToolbarItem>
                            </ToolbarGroup>
                            <ToolbarItem>
                                <button ref={this.resetButtonRef}
                                    className="pf-c-button pf-m-secondary terminal-reset"
                                    onClick={this.onResetClick}>{_("Reset")}</button>
                            </ToolbarItem>
                        </ToolbarContent>
                    </Toolbar>
                </div>
                <div className={"terminal-body " + this.state.theme} id="the-terminal">
                    {terminal}
                </div>
            </div>
        );
    }
}
// UserTerminal.displayName = "UserTerminal";

// const root = createRoot(document.getElementById('terminal'));
// root.render(<UserTerminal />);
// document.body.removeAttribute("hidden");

export default UserTerminal;