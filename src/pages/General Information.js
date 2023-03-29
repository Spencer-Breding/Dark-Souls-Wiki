import React from 'react';
import "./General Information.css";

const desc = "General Information covers the basics of Dark Souls and its game systems.";

const General = () => {
    return (
        <React.Fragment>
            <div className="general">
                <h2 className="title">General Information</h2>
                <div className="title-divider">
                    <div class="shadow"></div>
                </div>
                <text className="description">{desc}</text>
            </div>
        </React.Fragment>
        );
}

export default General;