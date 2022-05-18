# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators import csrf
import json
import os
import numpy as np
import matlab.engine
import matplotlib.pyplot as plt
from django.views.decorators.csrf import csrf_exempt

cdata= []
# k0 e0  1*16
k0_e0=[]
# matlab.double([3.9410e+09, 7.2655E+13, 3.0537e+09,   2.0515e+10, 4.3276e+05, 5.8511e+05, 5.5751e+06, 96335,    93745,    89522,    97733,    48514,    73059,    62138, 4500e+06, 320790])
# T 1*7
T =[]
# matlab.double([170+273,175+273,180+273,185+273,190+273,170+273,170+273])
eng = matlab.engine.start_matlab()

def draw_final():
    os.system("pltrun.py")


'''post'''
# 接收文件
@csrf_exempt
def cdata_post(request):
    data = {}
    file = request.FILES.get('file')  # 获取文件对象，包括文件名文件大小和文件内容
    # print(file.name)  # 文件名
    # print(file.size)  # 文件大小
    # 将文件写入本地
    f = open("data.json", 'wb')
    for line in file.chunks():  # 由于文件不是一次性上传的，因此一块一块的写入
        f.write(line)
    f.close()

    data['code'] = 200
    sample = json.dumps(data)
    return HttpResponse(sample, content_type="application/json")  # 返回给前端


'''get'''
@csrf_exempt
def return_datas(request):
    request.encoding = 'utf-8'
    data1 = []
    data2 = []
    data = {}

    '''传入k0_e0,T,data，输出有两个，为时间，浓度'''
    # 以可读方式打开文件
    fp = open("data.json", 'r')
    json_data = json.load(fp)
    global cdata, k0_e0, T
    cdata = json_data["cdata"]
    k0_e0 = json_data["k0_e0"]
    T = json_data["T"]
    # print(cdata)
    # print(k0_e0)
    # print(T)
    fp.close()

    cdata = np.array(cdata).reshape(7, 13, 8)
    # 矩阵转置，将7*13*8转为13*8*7，以适于matlab计算
    cdata1 = cdata.transpose(1, 2, 0)
    cdata1 = cdata1.tolist()
    cdata1 = matlab.double(cdata1)
    k0_e0=matlab.double(k0_e0)
    T=matlab.double(T)
    res_t, res_c,res_k,res_e = eng.mainPXKinetics(k0_e0, T, cdata1, nargout=4)
    # t为7*13*1
    res_t = np.array(res_t).reshape(7, 13, 1)
    res_c = np.array(res_c).reshape(7, 13, 7)
    res_k = np.array(res_k).reshape(1, 7).tolist()
    res_e = np.array(res_e).reshape(1, 7).tolist()
    res_k = res_k[0]
    res_e = res_e[0]
    res_t = res_t[0]

    # '''画图'''
    cwd = os.getcwd()
    for i in range(0, 7):
        expdata = cdata[i]
        c = res_c[i]
        time = expdata[:, 0]  # 实验值--时间
        cexp = expdata[:, 1:8]  # 实验值--各化学物的浓度，大小：(13*7)
        fig = plt.figure(i)
        plt.plot(time, cexp[:, 1], 'ko', res_t, c[:, 1], 'k-', time, cexp[:, 2], 'r+', res_t, c[:, 2], 'r-', time, cexp[:, 3],
                 'gs', res_t, c[:, 3], 'g-', time, cexp[:, 4], 'bs', res_t, c[:, 4], 'b-', time, cexp[:, 5], 'bs', res_t, c[:, 5],
                 'b-')
        plt.xlabel('time(min)')
        plt.ylabel('concentration(mol/l)')
        plt.savefig('static/'+str(i) + '.png')
    # draw_final()

    for i in range(0, 7):
        data4 = {}
        # data4["title"]='图'+str(i+1)
        data4["url"]=str(i)+'.png'
        data1.append(data4)
    data["picture"]=data1

    # res_k=[1,2,3,4,5,6,7]
    # res_e = [1, 2, 3, 4, 5, 6, 7]
    print(res_e)
    print(res_k)
    inti=1
    for i,j in zip(res_k,res_e):
        data3={}
        data3['kValue'] = i #(1*7)
        data3['eValue'] = j #(1*7)
        data2.append(data3)
        inti += 1
    data['KE']=data2
    sample = json.dumps(data)  # json.dumps()把一个Python对象编，码转换成Json字符串。
    return HttpResponse(sample, content_type="application/json")  # 返回给前端
