import type { Work } from '../../domain/model';
import { workRepository } from '../../infrastructure';

export const workDataService = {
	getAll,
};

async function getAll(): Promise<Work[]> {
	const files = await workRepository.getAll();
	const works: Work[] = files.map(({ metadata, content }) => {
		const { company, dateFrom, jobTitle, name, tags, dateTo } = metadata;
		return {
			company,
			content,
			dateFrom,
			jobTitle,
			name,
			tags,
			dateTo,
		};
	});

	return works;
}
