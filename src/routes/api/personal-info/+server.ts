import { createUrl, fetchRequest } from '$lib/http';
import type { PersonalInfo } from '$lib/model/personal-info';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

interface PersonalInfoResponse {
	data: {
		id: number;
		attributes: {
			firstName: string;
			lastName: string;
			nationality: string;
			dateOfBirth: string;
			gender: string;
			email: string;
			married: boolean;
			kids: number;
			description: string;
			createdAt: string;
			updatedAt: string;
		};
	};
}
export const GET = (async (): Promise<Response> => {
	const url = createUrl('personal-info');

	return fetchRequest(url)
		.then((response) => response.json())
		.then((jsonResponse: PersonalInfoResponse) => {
			const {
				firstName,
				lastName,
				nationality,
				dateOfBirth,
				gender,
				email,
				married,
				kids,
				description,
			} = jsonResponse.data.attributes;

			return json({
				firstName,
				lastName,
				nationality,
				dateOfBirth,
				gender,
				email,
				married,
				kids,
				description,
			} as PersonalInfo);
		});
}) satisfies RequestHandler;
