import React from 'react';
import servicios from '../data/servicios';
import SectionTitle from './SectionTitle';
import ServiceItem from './ServiceItem';

function Service() {
	return (
		<div className="py-12">
			<SectionTitle id="Habilidades">Habilidades</SectionTitle>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				{servicios.map(servicios => (
					<ServiceItem
						key={servicios.title}
						title={servicios.title}
						icon={servicios.icon}
						description={servicios.description}
					/>
				))}
			</div>
		</div>
	);
}

export default Service;