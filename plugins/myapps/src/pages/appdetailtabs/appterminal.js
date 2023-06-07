import React, { useEffect, useRef, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';

const handleIframe = (iframe) => {
    var iframeWindow = iframe.contentWindow;

    var pageWrapper = iframeWindow.document.getElementById("page-wrapper");
    if (pageWrapper) {
        setTimeout(function () {
            var sideview = pageWrapper.querySelector("#sideview");
            if (sideview) {
                pageWrapper.removeChild(sideview);
            }

            var pageHeaders = pageWrapper.querySelectorAll("page-header");
            for (var i = 0; i < pageHeaders.length; i++) {
                var pageHeader = pageHeaders[i];
                var parent = pageHeader.parentNode;
                parent.removeChild(pageHeader);
            }

            var rdWidgetHeaders = pageWrapper.querySelectorAll("rd-widget-header");
            for (var i = 0; i < rdWidgetHeaders.length; i++) {
                var rdWidgetHeade = rdWidgetHeaders[i];
                var parent = rdWidgetHeade.parentNode;
                parent.removeChild(rdWidgetHeade);
            }

            pageWrapper.style.setProperty("padding-left", "0px");
            pageWrapper.removeAttribute("ng-class");
            pageWrapper.className = "";

            iframe.style.display = "block";
        }, 1000); // 延迟1秒执行
    }
};

const AppTerminal = (props): React$Element<React$FragmentType> => {
    const iframeRef = useRef(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (iframeRef.current) {
            if (iframeRef.current.attachEvent) {
                iframeRef.current.attachEvent("onload", function () {
                    handleIframe(iframeRef.current);
                    setLoading(false);
                });
            }
            else {
                iframeRef.current.onload = function () {
                    handleIframe(iframeRef.current);
                    setLoading(false);
                };
            }
        }
    }, [iframeRef]);

    return (
        <>
            {
                loading && (
                    <div className="d-flex align-items-center justify-content-center m-5">
                        <Spinner animation="border" variant="secondary" />
                    </div>
                )
            }
            <div class="myProtainerTerminal" key="myProtainerTerminal" >
                <iframe
                    id="myIframe"
                    title="myProtainerTerminal"
                    src="/portainer/#!/12/docker/containers/81104709115ba86d3708730a01daf3cc9a6a6fe3495abc9ca8996d3b25a0c94e/exec"
                    style={{ display: "none" }}
                    ref={iframeRef}
                />
            </div >
        </>
    );
};

export default AppTerminal;
