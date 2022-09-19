export class ApiService {
	static async getByName<T>(movieName: string): Promise<T> {
		let responseBody;
		const url = `https://www.omdbapi.com/?apiKey=fbcde9ca&s=${movieName}&type=movie`
		const response = await fetch(url);
		try { responseBody = await response.json() } 
		catch(error) { throw new Error() }
		return responseBody;
	}

	static async getByID<T>(movieId: string): Promise<T> {
		let responseBody;
		const url = `https://www.omdbapi.com/?apiKey=fbcde9ca&i=${movieId}`
		const response = await fetch(url);
		try { responseBody = await response.json() } 
		catch(error) { throw new Error() }
		return responseBody;
	}
}