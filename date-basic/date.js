var date01 = new Date();

//30分鐘前, 先開起另一個要放30分鐘前時間的date
var date02 = new Date();
date02.setMinutes(date01.getMinutes() - 30);
