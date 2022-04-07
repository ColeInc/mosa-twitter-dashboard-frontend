import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./NavigationBar";

describe("NavigationBar Component", () => {
    it(`renders Create Tweet Component inside Dashboard component`, () => {
        render(
            <BrowserRouter>
                <NavigationBar />
            </BrowserRouter>
        );
        const navBarElement = screen.getByText("Dashboard", {
            exact: true,
        });
        expect(navBarElement).toBeInTheDocument();
    });
});
