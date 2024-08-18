export default function bs_list(haystack: number[], needle: number): boolean {
	let low: number = 0;
	let high: number = haystack.length;
	do{
		let middle: number = Math.floor(low+(high-low)/2)
		if(haystack[middle] === needle){
			return true;
		}
		else if(needle > haystack[middle]){
			low = middle + 1;
		}
		else{
			high = middle;
		}
	}while(low < high)
	return false;
}
