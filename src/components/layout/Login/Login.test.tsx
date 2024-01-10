import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // For extended DOM matchers
import { LoginLayout } from ".";

describe("LoginLayout component", () => {
	it("renders the logo and copyright text", () => {
		const { getByAltText, getByText } = render(<LoginLayout />);

		// Check if the logo is present
		expect(logoElement).toBeInTheDocument();

		// Check if the copyright text is present
		const copyrightElement = getByText("All right reserved / © DKC Lending");
		expect(copyrightElement).toBeInTheDocument();
	});
});
