import express from 'express';
import fetch from 'node-fetch';
const router = express.Router()
router.get('/global', async (req, res) => {
  try {
    const url = 'https://api.coingecko.com/api/v3/global';
    
    const fetch_response = await fetch(url);
    if (!fetch_response.ok) {
      res.status(404).json({msg:'Unable to load Global Data : HTTP ERROR'})
    } else {
      const json = await fetch_response.json()
      
      res.status(200).json(json) 
    }
  } catch (error) {
    console.log(error);
  }
 
})
router.get('/exchanges', async (req, res) => {
  try {
    const url = 'https://api.coingecko.com/api/v3/exchanges?per_page=10&page=1';
    
    const fetch_response = await fetch(url);
    if (!fetch_response.ok) {
      res.status(404).json({msg:'Unable to load Global Data : HTTP ERROR'})
    } else {
      const json = await fetch_response.json()
      
      res.status(200).json(json) 
    }
  } catch (error) {
    console.log(error);
  }
 
})
router.get('/trends', async (req, res) => {
  try {
    const url = 'https://api.coingecko.com/api/v3/search/trending';
    
    const fetch_response = await fetch(url);
    if (!fetch_response.ok) {
      res.status(404).json({msg:'Unable to load Global Data : HTTP ERROR'})
    } else {
      const json = await fetch_response.json()
      
      res.status(200).json(json) 
    }
  } catch (error) {
    console.log(error);
  }
 
})
router.get('/topCoins', async (req, res) => {
  try {
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24%2C7d';
    
    const fetch_response = await fetch(url);
    if (!fetch_response.ok) {
      res.status(404).json({msg:'Unable to load Global Data : HTTP ERROR'})
    } else {
      const json = await fetch_response.json()
      
      res.status(200).json(json) 
    }
  } catch (error) {
    console.log(error);
  }
 
})
router.get('/catList', async (req, res) => {
  try {
    const url = 'https://api.coingecko.com/api/v3/coins/categories/list';
    
    const fetch_response = await fetch(url);
    if (!fetch_response.ok) {
      res.status(404).json({msg:'Unable to load Global Data : HTTP ERROR'})
    } else {
      const json = await fetch_response.json()
      
      res.status(200).json(json) 
    }
  } catch (error) {
    console.log(error);
  }
 
})
router.get('/catInfo', async (req, res) => {
  try {
    const url = 'https://api.coingecko.com/api/v3/coins/categories?order=name_asc';
    
    const fetch_response = await fetch(url);
    if (!fetch_response.ok) {
      res.status(404).json({msg:'Unable to load Global Data : HTTP ERROR'})
    } else {
      const json = await fetch_response.json()
      
      res.status(200).json(json) 
    }
  } catch (error) {
    console.log(error);
  }
 
})
router.get('/binanceInfo', async (req, res) => {
  try {
    const url = 'https://api.binance.com/api/v1/exchangeInfo';
    
    const fetch_response = await fetch(url);
    if (!fetch_response.ok) {
      res.status(404).json({msg:'Unable to load Global Data : HTTP ERROR'})
    } else {
      const json = await fetch_response.json()
      
      res.status(200).json(json) 
    }
  } catch (error) {
    console.log(error);
  }
 
})
export { router as default}