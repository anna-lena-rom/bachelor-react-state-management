import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MobXCounter from "./MobxCounter";
import { counterStore } from "../../state/mobxStore";

describe('MobXCounter', () => {
    beforeEach(() => {
        counterStore.count = 0;
    });

    test('should render MobXCounter component', () => {
        render(<MobXCounter />);
        expect(screen.getByText('MobX Counter')).toBeInTheDocument();
        expect(screen.getByText('0')).toBeInTheDocument();
    });

    test('should increment counter', async () => {
        render(<MobXCounter />);
        const incrementButton = screen.getByText('+');
        await userEvent.click(incrementButton);
        expect(screen.getByText('1')).toBeInTheDocument();
    });

    test('should decrement counter', async () => {
        render(<MobXCounter />);
        const decrementButton = screen.getByText('-');
        await userEvent.click(decrementButton);
        expect(screen.getByText('-1')).toBeInTheDocument();
    });
});