export class ApiService {
	static async get<T>(value: string): Promise<T> {
		let responseBody;
		const url = `https://www.omdbapi.com/?apiKey=fbcde9ca&s=${value}`
		const response = await fetch(url);
		try { responseBody = await response.json() } 
		catch(error) { throw new Error() }
		return responseBody;
	}
}