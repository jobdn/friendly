import { render, screen } from "@testing-library/react";

import { Input } from "./Input";

describe("Input component", () => {
  it("should render input component successfully", () => {
    const inputLabel = "E-mail";
    render(<Input label={inputLabel} />);

    const inputEl = screen.getByLabelText(inputLabel);

    expect(inputEl).toBeInTheDocument();
  });
});
