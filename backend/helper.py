import pickle
import os
def loadpickle():
    here = os.path.dirname(os.path.abspath(__file__))
    filename = os.path.join(here, 'data.pickle')
    with open(filename, 'rb') as f:
        data = pickle.load(f)
    return data
