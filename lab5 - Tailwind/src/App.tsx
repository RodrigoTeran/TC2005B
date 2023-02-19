import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import IndexPage from "./pages/Index/Index";

const App: React.FunctionComponent = () => {
	return (
		<BrowserRouter>
			<main className="w-screen h-screen bg-slate-100 flex justify-center items-center p-16 shadow-md shadow-black">
				<Routes>
					<Route path='/' element={<IndexPage />} />
				</Routes>
			</main>
		</BrowserRouter>
	)
}

export default App
