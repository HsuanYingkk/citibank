from helper import loadpickle

def company_listall():
    ''' list all the companies '''
    # Retrieve data from pickle
    data = loadpickle()
    companies = data

    # Return the list
    return {
        "companies":companies
    }
# print(company_listall())