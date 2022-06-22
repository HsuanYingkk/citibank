from helper import loadpickle

def company_categories ():
    ''' list all the companies '''
    # Retrieve data from pickle
    data = loadpickle()
    categories = []
    for i in data:
        if i['category'] not in categories:
            categories.append(i['category'])
    valueRemoved = categories[0]
    categories.remove(valueRemoved)

    # Return the list
    return {
        "categories":categories 
    }

# print(company_categories())