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
			dateOfBirth: Date;
			gender: string;
			email: string;
			married: boolean;
			kids: number;
			description: string;
			createdAt: Date;
			updatedAt: Date;
		};
	};
}
export const GET = (async (): Promise<Response> => {
	const url = createUrl('personal-info');
	const response = await fetchRequest(url);
	const jsonResponse: PersonalInfoResponse = await response.json();
	return json({ ...jsonResponse.data.attributes } as PersonalInfo);
}) satisfies RequestHandler;
