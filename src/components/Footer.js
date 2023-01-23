import React from 'react'
import './Footer.scss';

import { Button } from 'react-bootstrap';
import { ArrowBarUp } from 'react-bootstrap-icons';

function Footer() {
    return (
        <div className="Footer">
            <div className="FooterButton my-4">
                <Button className="GoToUp" onClick={e => {
                    window.scrollTo({ top: 0 })
                }}>
                    <ArrowBarUp />
                </Button>
            </div>
        </div>
    );
}

export { Footer }
