(self.webpackChunkapps=self.webpackChunkapps||[]).push([[903],{80900:function(){function e(){var e;("all"==window.debugging||null!==(e=window.debugging)&&void 0!==e&&e.includes("style"))&&console.debug(["cockpit-dark-theme: ".concat(document.documentElement.id,":")].concat(Array.prototype.slice.call(arguments)).join(" "))}function t(t){var n,i,s,o=t||localStorage.getItem("shell:style")||"auto";s=!!(null!==(n=(i=window).matchMedia)&&void 0!==n&&n.call(i,"(prefers-color-scheme: dark)").matches&&"auto"===o||"dark"===o),function(t,n){e("Setting cockpit theme to ".concat(n?"dark":"light")),n?t.classList.add("pf-theme-dark"):t.classList.remove("pf-theme-dark")}(document.documentElement,s)}window.addEventListener("storage",(function(n){"shell:style"===n.key&&(e("Storage element 'shell:style' changed from  ".concat(n.oldValue," to ").concat(n.newValue)),t())})),window.addEventListener("cockpit-style",(function(n){var i=n.detail.style;e("Event received from shell with 'cockpit-style'  ".concat(i)),t(i)})),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(){var n,i;e("Operating system theme preference changed to ".concat(null!==(n=(i=window).matchMedia)&&void 0!==n&&n.call(i,"(prefers-color-scheme: dark)").matches?"dark":"light")),t()})),t()},84903:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var i=n(47313),s=n(58467),o=n(15671),a=n(43144),r=n(97326),l=n(60136),c=n(27277),h=n(85576),u=n(48892),d=n(75071),m=n(44374),f=n(52211),p=n(10561),v=n(81305),g=n(37346),b=n.n(g),k=n(34470),w=n(83138),x=n(60786),C=n(97752),y=n(29439),T=n(46417),z=b().gettext,S=function(e){var t=e.parentId,n=e.getText,s=e.setText,o=i.useState(!1),a=(0,y.Z)(o,2),r=a[0],l=a[1],c=i.useState(null),h=(0,y.Z)(c,2),u=h[0],d=h[1],m=i.useRef(null);return i.useEffect((function(){var e=function(e){e.preventDefault(),l(!0),d(e)},n=function(e){e&&0===e.button&&(!(e.target.contains===m.current)&&l(!1))},i=document.getElementById(t);return i.addEventListener("contextmenu",e),document.addEventListener("click",n),function(){i.removeEventListener("contextmenu",e),document.removeEventListener("click",n)}}),[t]),i.useEffect((function(){if(u){var e=u.clientX,t=u.clientY,n=window.innerWidth,i=window.innerHeight,s=m.current.offsetWidth,o=m.current.offsetHeight,a=n-e>s,r=!a,l=i-t>o,c=!l;a&&(m.current.style.left="".concat(e+5,"px")),r&&(m.current.style.left="".concat(e-s-5,"px")),l&&(m.current.style.top="".concat(t+5,"px")),c&&(m.current.style.top="".concat(t-o-5,"px"))}}),[u]),r&&(0,T.jsxs)("div",{ref:m,className:"contextMenu",children:[(0,T.jsxs)("button",{className:"contextMenuOption",onClick:n,children:[(0,T.jsxs)("div",{className:"contextMenuName",children:[" ",z("Copy")," "]}),(0,T.jsx)("div",{className:"contextMenuShortcut",children:z("Ctrl+Insert")})]}),(0,T.jsxs)("button",{className:"contextMenuOption",onClick:s,children:[(0,T.jsxs)("div",{className:"contextMenuName",children:[" ",z("Paste")," "]}),(0,T.jsx)("div",{className:"contextMenuShortcut",children:z("Shift+Insert")})]})]})},j=b().gettext,M={yellow:"#b58900",brightRed:"#cb4b16",red:"#dc322f",magenta:"#d33682",brightMagenta:"#6c71c4",blue:"#268bd2",cyan:"#2aa198",green:"#859900"},R={"black-theme":{background:"#000000",foreground:"#ffffff"},"dark-theme":Object.assign({},M,{background:"#002b36",foreground:"#fdf6e3",cursor:"#eee8d5",selection:"#ffffff77",brightBlack:"#002b36",black:"#073642",brightGreen:"#586e75",brightYellow:"#657b83",brightBlue:"#839496",brightCyan:"#93a1a1",white:"#eee8d5",brightWhite:"#fdf6e3"}),"light-theme":Object.assign({},M,{background:"#fdf6e3",foreground:"#002b36",cursor:"#073642",selection:"#00000044",brightWhite:"#002b36",white:"#073642",brightCyan:"#586e75",brightBlue:"#657b83",brightYellow:"#839496",brightGreen:"#93a1a1",black:"#eee8d5",brightBlack:"#fdf6e3"}),"white-theme":{background:"#ffffff",foreground:"#000000",selection:"#00000044",cursor:"#000000"}},E=function(e){(0,l.Z)(n,e);var t=(0,c.Z)(n);function n(e){var s;(0,o.Z)(this,n),(s=t.call(this,e)).onChannelMessage=s.onChannelMessage.bind((0,r.Z)(s)),s.onChannelClose=s.onChannelClose.bind((0,r.Z)(s)),s.connectChannel=s.connectChannel.bind((0,r.Z)(s)),s.disconnectChannel=s.disconnectChannel.bind((0,r.Z)(s)),s.reset=s.reset.bind((0,r.Z)(s)),s.focus=s.focus.bind((0,r.Z)(s)),s.onWindowResize=s.onWindowResize.bind((0,r.Z)(s)),s.resizeTerminal=s.resizeTerminal.bind((0,r.Z)(s)),s.onFocusIn=s.onFocusIn.bind((0,r.Z)(s)),s.onFocusOut=s.onFocusOut.bind((0,r.Z)(s)),s.setText=s.setText.bind((0,r.Z)(s)),s.getText=s.getText.bind((0,r.Z)(s)),s.setTerminalTheme=s.setTerminalTheme.bind((0,r.Z)(s));var a=new x.Terminal({cols:e.cols||80,rows:e.rows||25,screenKeys:!0,cursorBlink:!0,fontSize:e.fontSize||16,fontFamily:"Menlo, Monaco, Consolas, monospace",screenReaderMode:!0,showPastingModal:!1});return s.terminalRef=i.createRef(),a.onData(function(e){this.props.channel.valid&&this.props.channel.send(e)}.bind((0,r.Z)(s))),e.onTitleChanged&&a.onTitleChange(e.onTitleChanged),s.terminal=a,s.state={showPastingModal:!1,cols:e.cols||80,rows:e.rows||25},s}return(0,a.Z)(n,[{key:"componentDidMount",value:function(){this.terminal.open(this.terminalRef.current),this.terminal.loadAddon(new C.CanvasAddon),this.connectChannel(),this.props.rows||(window.addEventListener("resize",this.onWindowResize),this.onWindowResize()),this.setTerminalTheme(this.props.theme||"black-theme"),this.terminal.focus()}},{key:"resizeTerminal",value:function(e,t){this.terminal.resize(e,t),this.props.channel.control({window:{rows:t,cols:e}})}},{key:"componentDidUpdate",value:function(e,t){if(e.fontSize!==this.props.fontSize){this.terminal.options.fontSize=this.props.fontSize;var n=this.calculateDimensions();n.cols!==this.state.cols||n.rows!==this.state.rows?this.onWindowResize():this.resizeTerminal(n.cols-1,n.rows)}t.cols===this.state.cols&&t.rows===this.state.rows||this.resizeTerminal(this.state.cols,this.state.rows),e.theme!==this.props.theme&&this.setTerminalTheme(this.props.theme),e.channel!==this.props.channel&&(this.terminal.reset(),this.disconnectChannel(e.channel),this.connectChannel(),this.props.channel.control({window:{rows:this.state.rows,cols:this.state.cols}})),this.terminal.focus()}},{key:"render",value:function(){var e=this;return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(k.u,{title:j("Paste error"),position:"top",variant:"small",isOpen:this.state.showPastingModal,onClose:function(){return e.setState({showPastingModal:!1})},actions:[(0,T.jsx)(w.zx,{variant:"secondary",onClick:function(){return e.setState({showPastingModal:!1})},children:j("Close")},"cancel")],children:j("Your browser does not allow paste from the context menu. You can use Shift+Insert.")}),(0,T.jsx)("div",{ref:this.terminalRef,className:"console-ct",onFocus:this.onFocusIn,onContextMenu:this.contextMenu,onBlur:this.onFocusOut},this.terminal),(0,T.jsx)(S,{parentId:this.props.parentId,setText:this.setText,getText:this.getText})]})}},{key:"componentWillUnmount",value:function(){this.disconnectChannel(),this.terminal.dispose(),window.removeEventListener("resize",this.onWindowResize),this.onFocusOut()}},{key:"setText",value:function(){var e=this;try{navigator.clipboard.readText().then((function(t){return e.props.channel.send(t)})).catch((function(t){return e.setState({showPastingModal:!0})})).finally((function(){return e.terminal.focus()}))}catch(t){this.setState({showPastingModal:!0})}}},{key:"getText",value:function(){var e=this;try{navigator.clipboard.writeText(this.terminal.getSelection()).catch((function(e){return console.error("Text could not be copied, use Ctrl+Insert ",e?e.toString():"")})).finally((function(){return e.terminal.focus()}))}catch(t){console.error("Text could not be copied, use Ctrl+Insert:",t.toString())}}},{key:"onChannelMessage",value:function(e,t){this.terminal.write(t)}},{key:"onChannelClose",value:function(e,t){var n=this.terminal;n.write("\x1b[31m"+(t.problem||"disconnected")+"\x1b[m\r\n"),n.cursorHidden=!0,n.refresh(n.rows,n.rows)}},{key:"connectChannel",value:function(){var e=this.props.channel;null!==e&&void 0!==e&&e.valid&&(e.addEventListener("message",this.onChannelMessage.bind(this)),e.addEventListener("close",this.onChannelClose.bind(this)),e.send("docker exec -it ".concat(this.props.AppId," bash\n")),this.reset())}},{key:"disconnectChannel",value:function(e){void 0===e&&(e=this.props.channel),e&&(e.removeEventListener("message",this.onChannelMessage),e.removeEventListener("close",this.onChannelClose)),e.close()}},{key:"reset",value:function(){this.terminal.reset(),this.props.channel.send(String.fromCharCode(12))}},{key:"focus",value:function(){this.terminal&&this.terminal.focus()}},{key:"calculateDimensions",value:function(){var e=this.terminal._core._renderService.dimensions.css.cell.height,t=this.terminal._core._renderService.dimensions.css.cell.width;return e&&t&&0!==t&&0!==e?{rows:Math.floor((this.terminalRef.current.parentElement.clientHeight-10)/e),cols:Math.floor((this.terminalRef.current.parentElement.clientWidth-10-12)/t)}:{rows:this.state.rows,cols:this.state.cols}}},{key:"onWindowResize",value:function(){this.setState(this.calculateDimensions())}},{key:"setTerminalTheme",value:function(e){this.terminal.options.theme=R[e]}},{key:"onBeforeUnload",value:function(e){return e.preventDefault(),e.returnValue="",""}},{key:"onFocusIn",value:function(){window.addEventListener("beforeunload",this.onBeforeUnload)}},{key:"onFocusOut",value:function(){window.removeEventListener("beforeunload",this.onBeforeUnload)}}]),n}(i.Component),I=(n(80900),b().gettext);b().translate();var Z=function(e){(0,l.Z)(n,e);var t=(0,c.Z)(n);function n(e){var s;(0,o.Z)(this,n),s=t.call(this,e);var a=localStorage.getItem("terminal:theme"),l=localStorage.getItem("terminal:font-size");return null!==a&&""!==a||""!==(a=document.cookie.replace(/(?:(?:^|.*;\s*)theme_cookie\s*=\s*([^;]*).*$)|^.*$/,"$1"))&&(localStorage.setItem("terminal:theme",a),s.invalidateCookie("theme_cookie")),null!==l&&""!==l||""!==(l=document.cookie.replace(/(?:(?:^|.*;\s*)size_cookie\s*=\s*([^;]*).*$)|^.*$/,"$1"))&&(localStorage.setItem("terminal:font-size",l),s.invalidateCookie("size_cookie")),s.state={title:"Terminal",theme:a||"black-theme",size:parseInt(l)||16},s.onTitleChanged=s.onTitleChanged.bind((0,r.Z)(s)),s.onResetClick=s.onResetClick.bind((0,r.Z)(s)),s.onThemeChanged=s.onThemeChanged.bind((0,r.Z)(s)),s.onPlus=s.onPlus.bind((0,r.Z)(s)),s.onMinus=s.onMinus.bind((0,r.Z)(s)),s.terminalRef=i.createRef(),s.resetButtonRef=i.createRef(),s.minSize=6,s.maxSize=40,s}return(0,a.Z)(n,[{key:"createChannel",value:function(e){return b().channel({payload:"stream",spawn:[e.shell||"/bin/bash"],environ:["TERM=xterm-256color"],directory:e.home||"/",pty:!0})}},{key:"componentDidMount",value:function(){b().user().done(function(e){this.setState({user:e,channel:this.createChannel(e)})}.bind(this))}},{key:"onTitleChanged",value:function(e){this.setState({title:e})}},{key:"invalidateCookie",value:function(e){var t=e+"=''; path=/; Max-Age=0;";document.cookie=t}},{key:"onPlus",value:function(){this.setState((function(e,t){return localStorage.setItem("terminal:font-size",e.size+1),{size:e.size+1}}))}},{key:"onMinus",value:function(){this.setState((function(e,t){return localStorage.setItem("terminal:font-size",e.size-1),{size:e.size-1}}))}},{key:"onThemeChanged",value:function(e){this.setState({theme:e}),localStorage.setItem("terminal:theme",e)}},{key:"onResetClick",value:function(e){var t=this;0===e.button&&(!this.state.channel.valid&&this.state.user?this.setState((function(e){return{channel:t.createChannel(e.user)}})):this.terminalRef.current.reset(),this.resetButtonRef.current.blur(),this.terminalRef.current.focus())}},{key:"render",value:function(){var e=this.state.channel?(0,T.jsx)(E,{ref:this.terminalRef,channel:this.state.channel,theme:this.state.theme,fontSize:this.state.size,parentId:"the-terminal",onTitleChanged:this.onTitleChanged,AppId:this.props.AppId}):(0,T.jsx)("span",{children:"Loading..."});return(0,T.jsxs)("div",{className:"console-ct-container",children:[(0,T.jsxs)("div",{className:"terminal-group",children:[(0,T.jsxs)("tt",{className:"terminal-title",children:["The terminal for : ",this.props.AppId]}),(0,T.jsx)(h.o,{id:"toolbar",children:(0,T.jsxs)(u.c,{children:[(0,T.jsxs)(d.k,{children:[(0,T.jsx)(m.E,{variant:"label",id:"size-select",children:I("Font size")}),(0,T.jsx)(m.E,{children:(0,T.jsx)(f.Y,{className:"font-size",value:this.state.size,min:this.minSize,max:this.maxSize,onMinus:this.onMinus,onPlus:this.onPlus,inputAriaLabel:I("Font size"),minusBtnAriaLabel:I("Decrease by one"),plusBtnAriaLabel:I("Increase by one"),widthChars:2})})]}),(0,T.jsxs)(d.k,{children:[(0,T.jsx)(m.E,{variant:"label",id:"theme-select",children:I("Appearance")}),(0,T.jsx)(m.E,{children:(0,T.jsxs)(p.i,{id:"select-theme",onChange:this.onThemeChanged,"aria-labelledby":"theme-select",value:this.state.theme,children:[(0,T.jsx)(v.j,{value:"black-theme",label:I("Black")}),(0,T.jsx)(v.j,{value:"dark-theme",label:I("Dark")}),(0,T.jsx)(v.j,{value:"light-theme",label:I("Light")}),(0,T.jsx)(v.j,{value:"white-theme",label:I("White")})]})})]}),(0,T.jsx)(m.E,{children:(0,T.jsx)("button",{ref:this.resetButtonRef,className:"pf-c-button pf-m-secondary terminal-reset",onClick:this.onResetClick,children:I("Reset")})})]})})]}),(0,T.jsx)("div",{className:"terminal-body "+this.state.theme,id:"the-terminal",children:e})]})}}]),n}(i.Component),L=Z,N=function(e){var t=(0,s.TH)(),n=new URLSearchParams(t.search).get("id");return(0,T.jsx)("div",{className:"ct-page-fill",id:"terminal",children:(0,T.jsx)(L,{AppId:n})})}}}]);