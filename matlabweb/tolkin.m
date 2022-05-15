
function dcdt=tolkin(t,c,k,i,T)%c/t求倒数
% k.*exp(E0.*100*(-3.9619e-004))
% k0.*exp(-Ea/(R*T(1)))
R=8.314;
i;
T;
k;
c;
t;
T(i);%不同的温度
%动力学方程，
r1=k(1).*exp(-k(8)./(R*T(i))).*c(5).*c(1)+k(2).*exp(-k(9)/(R*T(i))).*c(7);
r2=k(3).*exp(-k(10)/(R*T(i))).*c(5);
r3=k(4).*exp(-k(11)/(R*T(i))).*c(5);
r4=k(5).*exp(-k(12)/(R*T(i))).*c(5)*c(2);
r5=k(6).*exp(-k(13)/(R*T(i))).*c(3)*c(4);
r6=k(7).*exp(-k(14)/(R*T(i))).*c(5)*c(3);

dcdt(1)=-r1;%求出甲苯
dcdt(2)=r2+r6-r4;
dcdt(3)=r3-r5-r6+k(15).*exp(-k(16)./(R*T(i))).*c(7);
dcdt(4)=r4-r5;
dcdt(5)=r1-r2-r3-r4;
dcdt(6)=r5;
dcdt(7)=0;
dcdt=dcdt';