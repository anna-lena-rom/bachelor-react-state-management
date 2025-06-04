import * as React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../hooks/useTheme';

interface JotaiThemeToggleProps {
    className?: string;
}

const JotaiThemeToggle: React.FC<JotaiThemeToggleProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            type="button"
        >
            <span className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0">
                <FaSun />
            </span>

            <span className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100">
                <FaMoon />
            </span>
        </button>
    );
};

export default JotaiThemeToggle;
