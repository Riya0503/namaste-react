import {fireEvent, render, screen} from '@testing-library/react'
import { act } from "react"
import RestaurantMenu from '../RestaurantMenu';
import Header from '../Header';
import Cart from '../Cart';
import resMenuMockData from '../mocks/resMenuMockData.json'
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import { BrowserRouter } from 'react-router';
import "@testing-library/jest-dom"



global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(resMenuMockData)
        }
    })
})

test("should render render Menu component", async() => {
    await act(async() => {
        render(
            <Provider store={appStore}>
                <BrowserRouter>
                    <RestaurantMenu/>
                </BrowserRouter>
            </Provider>
        )
    })

    const resMenuAccordianBtn = screen.getByText("Sides & Snacks (8)");
    fireEvent.click(resMenuAccordianBtn);

    expect(screen.getAllByTestId('resMenuItem').length).toBe(8)

})  


test("should update header component to 1 item on click of add", async() => {
    await act(async() => {
        render(
            <Provider store={appStore}>
                <BrowserRouter>
                    <Header/>
                    <RestaurantMenu/>
                </BrowserRouter>
            </Provider>
        )
    })


    const resMenuAccordianBtn = screen.getByText("Sides & Snacks (8)");
    fireEvent.click(resMenuAccordianBtn);
    //out of five button we are selecting 1st button
    const addBtn = screen.getAllByRole('button', { name: 'ADD +'})[0];

    expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();

    fireEvent.click(addBtn)

    expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();

})  

test("should update header component to 2 item on second click of add", async() => {
    await act(async() => {
        render(
            <Provider store={appStore}>
                <BrowserRouter>
                    <Header/>
                    <RestaurantMenu/>
                </BrowserRouter>
            </Provider>
        )
    })


    const resMenuAccordianBtn = screen.getByText("Sides & Snacks (8)");
    fireEvent.click(resMenuAccordianBtn);
    //out of five button we are selecting 1st button
    const addBtn = screen.getAllByRole('button', { name: 'ADD +'})[0];

    fireEvent.click(addBtn)

    expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();

})  


test("should render two items in cart page", async() => {
    await act(async() => {
        render(
            <Provider store={appStore}>
                <BrowserRouter>
                    <Header/>
                    <RestaurantMenu/>
                    <Cart/>
                </BrowserRouter>
            </Provider>
        )
    })


    const resMenuAccordianBtn = screen.getByText("Sides & Snacks (8)");
    fireEvent.click(resMenuAccordianBtn);
    //out of five button we are selecting 1st button

    expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId('resMenuItem').length).toBe(10)

    fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}));

    expect(screen.getAllByTestId('resMenuItem').length).toBe(8);

    expect(screen.getByText("Add Item to cart")).toBeInTheDocument()


})  