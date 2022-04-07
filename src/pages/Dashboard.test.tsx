import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";

describe("Dashboard Component", () => {
    it(`renders Create Tweet Component inside Dashboard component`, () => {
        render(
            <BrowserRouter>
                <Dashboard />
            </BrowserRouter>
        );
        const createTweetElement = screen.getByText("CREATE TWEET", {
            exact: true,
        });
        expect(createTweetElement).toBeInTheDocument();
    });
    it(`renders Upcoming Tweets Component inside Dashboard component`, () => {
        render(
            <BrowserRouter>
                <Dashboard />
            </BrowserRouter>
        );
        const upcomingTweetsElement = screen.getByText(/UpcomingTweets/i);
        expect(upcomingTweetsElement).toBeInTheDocument();
    });
    it(`renders "IMPRESSIONS" text in StatisticsHeader`, () => {
        render(
            <BrowserRouter>
                <Dashboard />
            </BrowserRouter>
        );
        const statsHeaderElement = screen.getByText("IMPRESSIONS", {
            exact: true,
        });
        expect(statsHeaderElement).toBeInTheDocument();
    });
});
