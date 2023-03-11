import type { PersonalInfo } from '../../domain/model';
import { personalInfoRepository } from '../../infrastructure';

export const personalInfoDataService = {
	get,
};

async function get(): Promise<PersonalInfo> {
	const {
		content,
		metadata: { dateOfBirth, email, firstName, gender, kids, lastName, married, nationality },
	} = await personalInfoRepository.get();

	const personalInfo: PersonalInfo = {
		content,
		dateOfBirth,
		email,
		firstName,
		gender,
		kids,
		lastName,
		married,
		nationality,
	};
	return personalInfo;
}
