function  [outputt,outputc,outputk,outpute]=mainPXKinetics(k0,T,data)
%输入初值
% k0 = [3.9410e+009  1.4531e+008  3053700000  20515000000  432760  585110  5575100  9015 ];  % Arrhenius constant, 1/min,k0(2)ork0(5),1/(kmol/m3.min)
% Ea = [96335   93745  89522  97733  48514  73059  62138  320790];   % Activation energy, kJ/kmol

%k0=[3.9410e+09 7.2655E+13 3.0537e+09   2.0515e+10 4.3276e+05 5.8511e+05 5.5751e+06 96335    93745    89522    97733    48514    73059    62138 4500e+06 320790]
%MaxIter：最大疊代次數. MaxFunEvals：函數求值運算（Function Evaluation）的最高次數

options=optimset('DiffMinChange',1e-20,'TolPCG ',1.0e-20,'MaxFunEvals ',1.0e+50,'MaxIter',1e+100)
%误差的平方之和
%在点 x0 处开始并尝试求 fun 中描述的函数的局部最小值 x，使用 options 所指定的优化选项执行最小化
[k,fval,flag] = fminsearch(@PXKinetics,k0,options)
K0=k(:,1:7) %把矩阵K的第1~7列存入K0，k0为计算后的k0
E0=k(:,8:14)%把矩阵K的第8~14列存入K0
outputk=K0;
outpute=E0;

datat={};
datac=cell(1,7);
for i=1:7
    
    expdata=data(:,:,i); %13*8
    time=expdata(:,1);%第一列(13*1)

    cexp=expdata(:,2:8);%后7列(13*7)
    c0=cexp(1,:);%把矩阵cexp的第1行存入c0(1*7)
    %T=[170 175 180 185 190 170 170]+273;%(1*7)
    [t c]=ode45(@tolkin,time,c0,[],k,i,T)%得到模型参数
    datat= [ datat  t];    
    datac{i}=c;
      
    %figure(i)%创建一个新的窗口
    %x=time,y=实验值cexp(:,2)；x=t,y=计算值c(:,2)甲苯的
    %plot(time,cexp(:,2),'ko',t,c(:,2),'k-',time,cexp(:,3),'r+',t,c(:,3),'r-',time,cexp(:,4),'gs',t,c(:,4),'g-',time,cexp(:,5),'bs',t,c(:,5),'b-',time,cexp(:,6),'bs',t,c(:,6),'b-')
%xlabel('time(min)');
%ylabel('concentration(mol/l)');
%figure(i)
end
outputt=datat;
outputc=datac;