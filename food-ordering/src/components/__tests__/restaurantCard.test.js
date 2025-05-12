import { render, screen } from "@testing-library/react"
import RestaurantCard, {withPromotedLabel} from "../RestaurantCard"
import dataSetMock from '../mocks/dataSetMock.json'
import dataSetPromotedMock from '../mocks/dataSetPromtedMock.json'
import '@testing-library/jest-dom'

test("Should render Restaurant card with props", () => {
    render(<RestaurantCard dataSet={dataSetMock}/>);

    const name = screen.getByText("Chaayos Chai+Snacks=Relax");

    expect(name).toBeInTheDocument();
})

test("Should render Promoted Restaurant card with props", () => {
    const PromotedRestaurantCard = withPromotedLabel(RestaurantCard)
    
    render(<PromotedRestaurantCard dataSet={dataSetPromotedMock}/>);

    const name = screen.getByText("Promoted");

    expect(name).toBeInTheDocument();
})