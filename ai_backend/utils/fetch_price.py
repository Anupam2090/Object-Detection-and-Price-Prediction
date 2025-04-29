import os
import requests
import google.generativeai as genai
from bs4 import BeautifulSoup
from dotenv import load_dotenv

load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
USER_AGENT = os.getenv("AMAZON_HEADERS_USER_AGENT")

# Function to fetch price using Gemini API
def fetch_price_from_gemini(object_name):
    try:
        model = genai.GenerativeModel('gemini-1.5-pro')  # or 'gemini-2.5-pro-preview-03-25'
        prompt = f"What is the average market price of a {object_name} in INR (Indian Rupees)? Only return the numeric value without extra text."
        response = model.generate_content(prompt)
        price_text = response.text.strip()
        
        # Extract only numeric part
        price = ''.join(c for c in price_text if c.isdigit())
        if price:
            return int(price)
    except Exception as e:
        print(f"Error fetching from Gemini: {e}")
    return None

# Function to fetch price using Amazon scraping
def fetch_price_from_amazon(object_name):
    try:
        search_query = object_name.replace(' ', '+')
        url = f"https://www.amazon.in/s?k={search_query}"
        headers = {"User-Agent": USER_AGENT}
        response = requests.get(url, headers=headers)
        soup = BeautifulSoup(response.text, 'html.parser')

        price_element = soup.select_one('.a-price-whole')
        if price_element:
            price = price_element.get_text().replace(',', '').strip()
            if price.isdigit():
                return int(price)
    except Exception as e:
        print(f"Error scraping Amazon: {e}")
    return None

# Main function to get price
def get_price(object_name):
    # Step 1: Try Gemini API
    price = fetch_price_from_gemini(object_name)
    if price:
        return price
    
    # Step 2: Try Amazon scraping
    price = fetch_price_from_amazon(object_name)
    if price:
        return price
    
    # Step 3: No price found
    return "Price not available"
