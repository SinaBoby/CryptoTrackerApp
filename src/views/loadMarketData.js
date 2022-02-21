export async function fetchTrends() {
  try{
     const response = await fetch('https://api.coingecko.com/api/v3/search/trending')
     if(!response.ok){
       throw "HTTP ERROR"
     }else {
       return response.json()
     }
  }catch(error){
    console.log(error)
  }
}
export async function fetchExchanges() {
  try{
     const response = await fetch('https://api.coingecko.com/api/v3/exchanges?per_page=10&page=1')
     if(!response.ok){
       throw "HTTP ERROR"
     }else {
       return response.json()
     }
  }catch(error){
    console.log(error)
  }
}
export async function fetchGlobal() {
  try{
     const response = await fetch('https://api.coingecko.com/api/v3/global')
     if(!response.ok){
       throw "HTTP ERROR"
     }else {
       return response.json()
     }
  }catch(error){
    console.log(error)
  }
}