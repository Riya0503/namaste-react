import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import fetchMockData from '../mocks/fetchMockData.json'
import { act } from "react"
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(fetchMockData);
        }
    })
})



test("should search Res List for Burger text input", async() => {
    await act(async () => render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ))

    const resCardBeforeSearch = screen.getAllByTestId('resCard');
    expect(resCardBeforeSearch.length).toBe(20);

    const searchBtn = screen.getByRole("button", {name: 'Search'})

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, {target: {value: 'burger'}});

    fireEvent.click(searchBtn);

    const resCardAfterSearch = screen.getAllByTestId('resCard');

    expect(resCardAfterSearch.length).toBe(1);
})




test("should render top rated restaurant", async() => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )
    })

    const topRatedFilterBtn = screen.getByText("Top Rated Restaurant");

    fireEvent.click(topRatedFilterBtn);

    const topRatedResCards = screen.getAllByTestId("resCard");
    expect(topRatedResCards.length).toBe(9)
})