import React from "react";
import TestComponent from "../../src/components/TestComponent";
import { shallow } from "enzyme";
import { expect } from "chai";

describe("components/TestComponent", () => {
  it("should render without an issue", () => {
    const subject = shallow(<TestComponent />);
    expect(subject).to.not.be.null;
  });
});

