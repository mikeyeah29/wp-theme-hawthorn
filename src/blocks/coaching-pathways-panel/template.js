export function getPanelTemplate( position ) {
	const isRight = position === 'right';

	return [
		[
			'core/paragraph',
			{
				className: 'coaching-pathways__eyebrow',
				content: isRight ? 'For organisations' : 'For individuals',
			},
		],
		[
			'core/heading',
			{
				className: 'coaching-pathways__heading',
				content: isRight
					? 'Team and leadership coaching'
					: 'One-to-one coaching',
				level: 3,
			},
		],
		[
			'core/paragraph',
			{
				className: 'coaching-pathways__content',
				content: isRight
					? 'Strengthen leadership, relationships and performance across your organisation.'
					: 'Create space to think, grow and move forward with focused personal support.',
			},
		],
		[
			'core/buttons',
			{},
			[
				[
					'core/button',
					{
						className: 'is-style-hawthorn-arrow',
						text: isRight
							? 'Explore organisational coaching'
							: 'Explore individual coaching',
					},
				],
			],
		],
	];
}

export const TEMPLATE = [
	[
		'hawthorn/coaching-pathways-panel',
		{ position: 'left' },
		getPanelTemplate( 'left' ),
	],
	[
		'hawthorn/coaching-pathways-panel',
		{ position: 'right' },
		getPanelTemplate( 'right' ),
	],
	[ 'hawthorn/coaching-pathways-connector' ],
	[
		'hawthorn/coaching-pathways-panel',
		{ position: 'bottom' },
		[
			[
				'core/heading',
				{
					className: 'coaching-pathways__heading',
					content: 'Not sure where to begin?',
					level: 3,
				},
			],
			[
				'core/paragraph',
				{
					className: 'coaching-pathways__content',
					content:
						'Let’s find the coaching pathway that best fits where you are and where you want to go.',
				},
			],
		],
	],
];
