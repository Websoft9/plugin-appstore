// @flow
import React from 'react';
import { Form } from 'react-bootstrap';
import * as layoutConstants from '../../constants/layout';

interface LeftSideBarTypeProps {
    changeLeftSiderbarType: (value: any) => void;
    leftSideBarType: string;
    layoutConstants: typeof layoutConstants.SideBarTypes;
}

const LeftSideBarType = ({
    changeLeftSiderbarType,
    leftSideBarType,
    layoutConstants,
}: LeftSideBarTypeProps): React$Element<React$FragmentType> => {
    return (
        <>
            <Form.Check className="form-check form-switch mb-1 mt-3">
                <Form.Check.Input
                    type="radio"
                    name="leftsidebar-size"
                    id="default-check"
                    value={layoutConstants.LEFT_SIDEBAR_TYPE_FIXED}
                    onChange={(e) => changeLeftSiderbarType(e.target.value)}
                    checked={leftSideBarType === layoutConstants.LEFT_SIDEBAR_TYPE_FIXED}
                />
                <Form.Check.Label htmlFor="default-check">Fixed</Form.Check.Label>
            </Form.Check>

            <Form.Check className="form-check form-switch mb-1">
                <Form.Check.Input
                    type="radio"
                    name="leftsidebar-size"
                    id="condensed-check"
                    value={layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED}
                    onChange={(e) => changeLeftSiderbarType(e.target.value)}
                    checked={leftSideBarType === layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED}
                />
                <Form.Check.Label htmlFor="condensed-check">Condensed</Form.Check.Label>
            </Form.Check>

            <Form.Check className="form-check form-switch mb-1">
                <Form.Check.Input
                    type="radio"
                    name="leftsidebar-size"
                    id="compact-check"
                    value={layoutConstants.LEFT_SIDEBAR_TYPE_SCROLLABLE}
                    onChange={(e) => changeLeftSiderbarType(e.target.value)}
                    checked={leftSideBarType === layoutConstants.LEFT_SIDEBAR_TYPE_SCROLLABLE}
                />
                <Form.Check.Label htmlFor="compact-check">Scrollable</Form.Check.Label>
            </Form.Check>
        </>
    );
};

export default LeftSideBarType;
