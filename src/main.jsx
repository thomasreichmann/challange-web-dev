import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import "./index.css";
import Home from "./routes/home/index.jsx";
import Login from "./routes/Login.jsx";
import Next from "./routes/Next.jsx";
import NotFound from "./routes/NotFound.jsx";
import Projeto from "./routes/Projeto.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: (
			<>
				<Header />
				<NotFound />
				<Footer />
			</>
		),
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/next",
				element: <Next />,
			},
			{
				path: "/projeto",
				element: <Projeto />,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
