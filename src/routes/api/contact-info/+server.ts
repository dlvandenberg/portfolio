import { createUrl, fetchRequest } from '$lib/http';
import type { ContactInfo } from '$lib/model/contact-info';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

interface ContactInfoResponse {
	data: {
		id: number;
		attributes: {
			info: string;
			email: string;
			resumeUrl?: string;
			createdAt: Date;
			updatedAt: Date;
			locale: string;
		};
	};
}

export const GET = (async (): Promise<Response> => {
	const url = createUrl('contact-info');
	const response = await fetchRequest(url);
	const { info, email, resumeUrl } = ((await response.json()) as ContactInfoResponse).data
		.attributes;
	return json({ info, email, resumeUrl } as ContactInfo);
}) satisfies RequestHandler;
