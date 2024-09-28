import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Header from "./components/Header.jsx";
import "./index.css";
import About from "./routes/About.jsx";
import Home from "./routes/Home.jsx";
import NotFound from "./routes/NotFound.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: (
			<>
				<Header />
				<NotFound />
			</>
		),
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
