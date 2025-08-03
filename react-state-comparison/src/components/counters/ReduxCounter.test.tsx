import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ReduxCounter from "./ReduxCounter";
import { Provider } from "react-redux";
import { store } from "../../state/reduxStore";

describe('ReduxCounter', () => {
    test('should render ReduxCounter component', () => {
        render(
            <Provider store={store}>
                <ReduxCounter />
            </Provider>
        );
        expect(screen.getByText('Redux Counter')).toBeInTheDocument();
        expect(screen.getByText('0')).toBeInTheDocument();
    });

    test('should increment counter', async () => {
        render(
            <Provider store={store}>
                <ReduxCounter />
            </Provider>
        );
        const incrementButton = screen.getByText('+');
        await userEvent.click(incrementButton);
        expect(screen.getByText('1')).toBeInTheDocument();
    });

    test('should decrement counter', async () => {
        render(
            <Provider store={store}>
                <ReduxCounter />
            </Provider>
        );
        const decrementButton = screen.getByText('-');
        await userEvent.click(decrementButton);
        expect(screen.getByText('0')).toBeInTheDocument();
    });
});
