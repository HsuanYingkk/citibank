from copyreg import pickle
import os
import pickle

def loadData():
    f = open('data.csv', 'r', encoding='utf-8')
    data = []
    for line in f.readlines():
        tmp = line.split(',')
        lineDic = dict()
        lineDic['category'] = tmp[0]
        lineDic['name'] = tmp[1]
        lineDic['ID'] = int(float(tmp[2]))
        lineDic['year'] = int(float(tmp[3]))
        lineDic['一期國債'] = tmp[4]
        lineDic['收盤價'] = tmp[5]
        lineDic['基本每股收益'] = tmp[6]
        lineDic['每股淨資產'] = tmp[7]
        lineDic['每股現金流'] = tmp[8]
        lineDic['ROE'] = tmp[9]
        lineDic['總營收'] = tmp[10]
        lineDic['總利潤'] = tmp[11]
        lineDic['淨利潤'] = tmp[12]
        lineDic['總資產'] = tmp[13]
        lineDic['總負債'] = tmp[14]
        lineDic['負債率'] = tmp[15]
        lineDic['股東權益合計'] = tmp[16]
        lineDic['營業性現金流'] = tmp[17]
        lineDic['投資性現金流'] = tmp[18]
        lineDic['融資性現金流'] = tmp[19]
        lineDic['淨現金流'] = tmp[20]
        lineDic['商道'] = tmp[21]
        lineDic['中財'] = tmp[22]
        lineDic['盟浪'] = tmp[23]
        lineDic['股份'] = tmp[24]
        lineDic['上限'] = tmp[25]
        lineDic['下線'] = tmp[26]
        data.append(lineDic)
    f.close()
    with open('data.pickle', 'wb') as f:
        pickle.dump(data, f)
    
# with open('data.pickle', 'rb') as f:
#     data = pickle.load(f)

# print(data)