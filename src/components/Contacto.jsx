import React from 'react';

function Contacto() {
	return (
		<div className="py-5 bg-blend-overlay  text-center text-gray-300 rounded-t-lg ">
			<a href="#Contacto" className="text-teal-500 block text-xl md:text-2xl font-semibold">
				Mafe Pantoja
			</a>
			<a
				href="mfpc_@hotmail.com"
				className="text-sm md:text-md text-teal-500 hover:text-blue-600"
			>
				mfpc_@hotmail.com
			</a>
			<p className="text-xs mt-2 text-teal-500">
				© Blog Creative {new Date().getFullYear()}. 
			</p>
		</div>
	);
}

export default Contacto;
