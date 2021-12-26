import React from 'react';


function TitlePage(props) {
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <div className={"text-center text-dark"} id={"aboutTitle"}>
                {props.title}
            </div>
            <div
                className="d-flex align-items-center justify-content-center"
                id={"trait"}
            >
                <div
                    id={"leftTrait"}
                    className={"rounded-pill border border-4 w-50"}
                />
                <div
                    id={"roundCenter"}
                    className={"rounded-circle border p-2 bg-dark mx-auto"}
                />
                <div
                    id={"rightTrait"}
                    className={"rounded-pill border border-4 w-50"}
                />
            </div>
            <br className={"spacing"} />
        </div>
    );
}

export default TitlePage;