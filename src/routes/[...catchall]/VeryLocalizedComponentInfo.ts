import type { ComponentInfo } from '@builder.io/sdk-svelte';

export const VeryLocalizedComponentInfo: ComponentInfo = {
	name: 'VeryLocalizedComponent',
	inputs: [
		{
			name: 'title',
			type: 'text',
			defaultValue: 'Default Title',
			required: true,
			localized: true
		},
		{
			name: 'description', // Correcting the spelling
			type: 'richText', // Assuming a rich text for descriptions
			defaultValue: 'Default Description',
			required: true,
			localized: true
		},
		{
			name: 'author',
			type: 'object',
			defaultValue: {
				firstName: 'Default First Name',
				lastName: 'Default Last Name',
				role: 'Default Role',
				age: 124
			},
			subFields: [
				{
					name: 'firstName',
					type: 'text',
					required: true,
					localized: true
				},
				{
					name: 'lastName',
					type: 'text',
					required: true,
					localized: true
				},
				{
					name: 'role',
					type: 'text',
					required: true,
					localized: true
				},
				{
					name: 'age',
					type: 'number',
					required: true,
					localized: true
				}
			],
			required: true
		},
		{
			name: 'hobbies',
			type: 'list',
			defaultValue: [
				{
					name: 'Default Hobby Name',
					description: 'Default Hobby Description'
				},
				{
					name: 'Default Hobby Name2',
					description: 'Default Hobby Description2'
				}
			],
			subFields: [
				{
					name: 'name',
					type: 'text',
					required: true,
					localized: true
				},
				{
					name: 'description', // Correcting the spelling
					type: 'richText', // Assuming a rich text for descriptions
					required: true,
					localized: true
				}
			],
			required: true
		},
		{
			name: 'favoriteTechStack',
			type: 'list',
			defaultValue: [
				{
					name: 'Svelte',
					description: 'A compiler for building user interfaces.'
				}
			],
			localized: true,
			subFields: [
				{
					name: 'name',
					type: 'text',
					defaultValue: 'Svelte',
					localized: true
				},
				{
					name: 'description',
					type: 'text',
					defaultValue: 'A compiler for building user interfaces.',
					localized: true
				}
			]
		},
		// Additional creative field: inspirational quote
		{
			name: 'inspirationalQuote',
			type: 'object',
			defaultValue: {
				text: 'The best way to predict the future is to invent it.',
				author: 'Alan Kay'
			},
			subFields: [
				{
					name: 'text',
					type: 'text',
					defaultValue: 'The best way to predict the future is to invent it.',
					localized: true
				},
				{
					name: 'author',
					type: 'text',
					defaultValue: 'Alan Kay',
					localized: true
				}
			]
		},

		{
			name: 'backgroundColor',
			type: 'color',
			defaultValue: '#ffffff', // Default to white
			localized: true
		},
		{
			name: 'eventDate',
			type: 'date',
			defaultValue: '2024-01-01', // A placeholder date
			localized: true
		},
		{
			name: 'registrationLink',
			type: 'object',
			defaultValue: {
				url: 'https://example.com/register',
				text: 'Register Here!'
			},
			subFields: [
				{
					name: 'url',
					type: 'url',
					defaultValue: 'https://example.com/register',
					localized: true
				},
				{
					name: 'text',
					type: 'text',
					defaultValue: 'Register Here!',
					localized: true
				}
			]
		},
		{
			name: 'gallery',
			type: 'list',
			defaultValue: [
				{
					imageUrl: 'https://example.com/default.jpg',
					caption: 'Default Caption'
				}
			],
			subFields: [
				{
					name: 'imageUrl',
					type: 'file',
					defaultValue: 'https://example.com/default.jpg',
					localized: true
				},
				{
					name: 'caption',
					type: 'text',
					defaultValue: 'Default Caption',
					localized: true
				}
			]
		},
		{
			name: 'videoIntroduction',
			type: 'object',
			defaultValue: {
				videoUrl: 'https://example.com/default.mp4',
				description: 'A brief introduction video.'
			},
			subFields: [
				{
					name: 'videoUrl',
					type: 'file',
					localized: true
				},
				{
					name: 'description',
					type: 'text',
					defaultValue: 'A brief introduction video.',
					localized: true
				}
			]
		}
	]
};

export default VeryLocalizedComponentInfo;
