const BASE_URL = 'https://api.materialsproject.org/materials/summary/';

export const fetchMaterialsService = async (params) => {
    const queryParams = new URLSearchParams(params).toString();
    const response = await fetch(`${BASE_URL}?${queryParams}`);
    if (!response.ok) {
        throw new Error('Failed to fetch materials');
    }
    const data = await response.json();
    return data.materials || [];
};
