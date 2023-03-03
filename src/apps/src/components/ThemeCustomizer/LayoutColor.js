// @flow
import React from 'react';
import { Form } from 'react-bootstrap';

// constants
import * as layoutConstants from '../../constants/layout';

type LayoutColorProps = {
    changeLayoutColorScheme: (value: any) => void,
    layoutColor: string,
    layoutConstants: typeof layoutConstants,
};

const LayoutColor = ({
    changeLayoutColorScheme,
    layoutColor,
    layoutConstants,
}: LayoutColorProps): React$Element<React$FragmentType> => {
    return (
        <>
            <h5 className="mt-4">Color Scheme</h5>

            <hr className="mt-1" />

            <Form.Check className="form-check form-switch mb-1">
                <Form.Check.Input
                    type="radio"
                    onChange={(e) => changeLayoutColorScheme(e.target.value)}
                    name="layout-color"
                    value={layoutConstants.LAYOUT_COLOR_LIGHT}
                    id="light-mode"
                    checked={layoutColor === layoutConstants.LAYOUT_COLOR_LIGHT}
                />
                <Form.Check.Label htmlFor="vertical-layout">Light Mode</Form.Check.Label>
            </Form.Check>

            <Form.Check className="form-check form-switch mb-1">
                <Form.Check.Input
                    type="radio"
                    onChange={(e) => changeLayoutColorScheme(e.target.value)}
                    name="layout-color"
                    value={layoutConstants.LAYOUT_COLOR_DARK}
                    id="dark-mode"
                    checked={layoutColor === layoutConstants.LAYOUT_COLOR_DARK}
                />
                <Form.Check.Label htmlFor="horizontal-layout">Dark Mode</Form.Check.Label>
            </Form.Check>
        </>
    );
};

export default LayoutColor;
