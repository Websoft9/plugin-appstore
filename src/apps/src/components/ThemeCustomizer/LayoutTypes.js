// @flow
import React from 'react';
import { Form } from 'react-bootstrap';
import * as layoutConstants from '../../constants/layout';

type LayoutTypesProps = {
    changeLayoutType: (value: any) => void,
    layoutType: string,
    layoutConstants: typeof layoutConstants,
};

const LayoutTypes = ({
    changeLayoutType,
    layoutType,
    layoutConstants,
}: LayoutTypesProps): React$Element<React$FragmentType> => {
    return (
        <>
            <h5 className="mt-3">Layout</h5>

            <hr className="mt-1" />

            <Form.Check className="form-check form-switch mb-1">
                <Form.Check.Input
                    type="radio"
                    onChange={(e) => changeLayoutType(e.target.value)}
                    name="layout-type"
                    value={layoutConstants.LAYOUT_VERTICAL}
                    id="vertical-layout"
                    checked={layoutType === layoutConstants.LAYOUT_VERTICAL}
                />
                <Form.Check.Label htmlFor="vertical-layout">Vertical Layout</Form.Check.Label>
            </Form.Check>

            <Form.Check className="form-check form-switch mb-1">
                <Form.Check.Input
                    type="radio"
                    onChange={(e) => changeLayoutType(e.target.value)}
                    name="layout-type"
                    value={layoutConstants.LAYOUT_HORIZONTAL}
                    id="horizontal-layout"
                    checked={layoutType === layoutConstants.LAYOUT_HORIZONTAL}
                />
                <Form.Check.Label htmlFor="horizontal-layout">Horizontal Layout</Form.Check.Label>
            </Form.Check>

            <Form.Check className="form-check form-switch mb-1">
                <Form.Check.Input
                    type="radio"
                    onChange={(e) => changeLayoutType(e.target.value)}
                    name="layout-type"
                    value={layoutConstants.LAYOUT_DETACHED}
                    id="detached-layout"
                    checked={layoutType === layoutConstants.LAYOUT_DETACHED}
                />
                <Form.Check.Label htmlFor="detached-layout">Detached Layout</Form.Check.Label>
            </Form.Check>

            <Form.Check className="form-check form-switch mb-1">
                <Form.Check.Input
                    type="radio"
                    onChange={(e) => changeLayoutType(e.target.value)}
                    name="layout-type"
                    value={layoutConstants.LAYOUT_FULL}
                    id="full-mode-layout"
                    checked={layoutType === layoutConstants.LAYOUT_FULL}
                />
                <Form.Check.Label htmlFor="full-mode-layout">Full Layout</Form.Check.Label>
            </Form.Check>
        </>
    );
};

export default LayoutTypes;
