import React from "react";
import { useTheme } from "./Context/ThemeContext    ";


const Sections = () => {
const { theme } = useTheme();

return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
    {/* Section 1 */}
    <div className={`p-5 rounded-lg shadow-md transition duration-300
                    ${theme === "light" ? "bg-blue-100 text-black" : "bg-blue-900 text-white"}`}>
        <h2 className="text-xl font-bold">Section 1</h2>
        <p>This section changes color based on the theme.</p>
    </div>

    {/* Section 2 */}
    <div className={`p-5 rounded-lg shadow-md transition duration-300
                    ${theme === "light" ? "bg-green-100 text-black" : "bg-green-900 text-white"}`}>
        <h2 className="text-xl font-bold">Section 2</h2>
        <p>This section also changes color when toggling the theme.</p>
    </div>
    </div>
);
};

export default Sections;
