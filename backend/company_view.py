from helper import loadpickle

def company_view(id):
    ''' list all the companies with the ID '''
    # Retrieve data from pickle
    data = loadpickle()
    company = []
    for line in data:
        if line['ID'] == int(id):
            company.append(line)

    # Return the list
    return {
        "companies":company
    }