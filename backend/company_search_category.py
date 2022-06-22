import re
from helper import loadpickle

def company_search_category(label):
    ''' list all the companies with the given label '''
    # Retrieve data from pickle
    data = loadpickle()

    companies = []
    # Iterate through the list
    for company in data:
        if company['category'] == label:
            companies.append(company)

    # Return the id of the recipes that match the label
    return {
        "companies":companies
    }

# print(company_search_category('包装材料'))