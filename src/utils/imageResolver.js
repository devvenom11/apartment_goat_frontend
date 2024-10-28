export const imageResolver = (source) => {
	const path =
		'' + source?.data?.attributes?.url; 
	const alt = source?.data?.attributes?.alternativeText;
	return { path,    alt };
};