export const Team = (props) => {
	return (
		<div id='team' className='text-center'>
			<div className='container'>
				<div className='col-md-8 col-md-offset-2 section-title'>
					<h2>Nuestro equipo</h2>
					<p>
						Conoce al equipo de trabajo que está detrás de Syndicapp
					</p>
				</div>
				<div style={{ textAlign: 'center', margin: '0 auto' }} id='row'>
					{props.data
						? props.data.map((d, i) => (
								<div
									key={`${d.name}-${i}`}
									style={{
										display: 'inline-block',
										verticalAlign: 'middle',
										float: 'none',
									}}
									className='col-md-3 col-sm-6 team'
								>
									<div className='thumbnail'>
										{' '}
										<img
											src={d.img}
											alt='...'
											className='team-img'
										/>
										<div className='caption'>
											<h4>{d.name}</h4>
											<p>{d.job}</p>
										</div>
									</div>
								</div>
						  ))
						: 'loading'}
				</div>
			</div>
		</div>
	);
};
