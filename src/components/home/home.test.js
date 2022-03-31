import React from "react";
import {unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import {getByText, getByTestId} from "@testing-library/react";

let container = null;
beforeEach(() => {
    // met en place un élément DOM comme cible de rendu
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // nettoie en sortie de test
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

const home = document.getElementById("home")

it("should verify home id exist", ()=>{
    // eslint-disable-next-line jest/valid-expect
    expect(home)
})