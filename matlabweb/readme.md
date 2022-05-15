### 后端启动

```
python manage.py runserver
```



#### 安装  django

```
在anaconda 中指定的虚拟环境下：
conda install django
```



### post/ get

[Django 表单 | 菜鸟教程 (runoob.com)](https://www.runoob.com/django/django-form.html)



### 前端传文件

参考：[使用formdata在vue和django之间传递文件 - 金色旭光 - 博客园 (cnblogs.com)](https://www.cnblogs.com/goldsunshine/p/14885251.html)

python json文件和list互换：json 文件存了一个List



### 前端画图数据获取参考

```python
'''画图'''
    for i in range(0,7):
        expdata = data[i]
        c=resc[i]
        time = expdata[:, 0]  # 实验值--时间
        cexp = expdata[:, 1:8]  # 实验值--各化学物的浓度，大小：(13*7)
        fig = plt.figure(i)
        plt.plot(time,cexp[:, 1], 'ko', t, c[:, 1],'k-', time, cexp[:,2], 'r+', t, c[:, 2], 'r-',time, cexp[:, 3],'gs', t, c[:,3], 'g-',time, cexp[:, 4],'bs', t, c[:, 4], 'b-',time, cexp[:, 5],'bs', t, c[:, 5], 'b-')
        plt.xlabel('time(min)')
        plt.ylabel('concentration(mol/l)')
    plt.show()
```

