import {fireEvent, render, screen} from '@testing-library/react'
import Header from "../Header";
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import { BrowserRouter } from 'react-router';


test("Should render Header component with Login Button", () => {
    //render
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    //find
    const loginBtn = screen.getByRole('button', {name: 'Log In'});
    //assertion
    expect(loginBtn).toBeInTheDocument();
})

test("Should render Header component with cart items", () => {
    //render
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    //find
    //for specific string
    // const cartItems = screen.getByText("Cart (0 items)");

    //for  string which includes Cart
    const cartItems = screen.getByText(/Cart/);
    //assertion
    expect(cartItems).toBeInTheDocument();
})

test("Should Login button to logout on click", () => {
    //render
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    //find
    const logInBtn = screen.getByRole('button', {name: 'Log In'})

    fireEvent.click(logInBtn);

    const logOutBtn = screen.getByRole("button", {name: 'Log Out'});
    //assertion
    expect(logOutBtn).toBeInTheDocument();
})