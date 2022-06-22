import re
from helper import loadpickle

def company_search_keyword(keyword):
    ''' list all the companies with the given keyword '''
    # Retrieve data from pickle
    data = loadpickle()
    
    companies = []
    # Iterate through the list
    for company in data:
        # Append to the list if matches the keyword
        if re.search(keyword, company['name']):
            companies.append(company)

    # Return a list of companies that matches the keyword
    return {
        "companies":companies
    }

# print(company_search_keyword('天元'))