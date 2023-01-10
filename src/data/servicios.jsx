import React from 'react';
import { MdWeb } from 'react-icons/md';
import { FaCalendarTimes, FaHandHoldingHeart } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';



export default [
	{
		title: 'Front end',
		icon: <MdWeb className="w-full h-full" />,
		description:
			'Creación de piezas y elementos visuales centrados en el entorno web',
	},
	{
		title: 'Back end',
		icon: <FaHandHoldingHeart className="w-full h-full" />,
		description:
			'Interfaz del usuario',
	},
	{
		title: 'FIGMA',
		icon: <VscCode className="w-full h-full" />,
		description:
			'Diseño pre construido',
	},
	{
		title: 'SCRUM',
		icon: <FaCalendarTimes className="w-full h-full" />,
		description:
			'Metodologia SCRUM en proyectos',
	},
	{
		title: 'JavaScript',
		icon: <VscCode className="w-full h-full" />,
		description:
			' mejorando la experiencia del usuario de un sitio web.',
	},
	{
		title: 'VITE',
		icon: <VscCode className="w-full h-full" />,
		description:
			'Manejo de VITE con REACT',
	},
	
];