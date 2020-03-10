# AliyunSVideoDemo

### 1.新建ionic项目
ionic start

### 2.添加Android平台
ionic cordova prepare android

### 3.添加插件
ionic cordova plugin add https://github.com/hellomooning/AliyunSVideoBase.git

### 4.调用
#### 视频拍摄
cordova.plugins.AliyunSVideoBase.startRecord();

#### 视频剪辑
cordova.plugins.AliyunSVideoBase.startCrop();

## Preview
| page1 | page2 | page3 |
| -------- | -------- | -------- |
| ![home](https://raw.githubusercontent.com/hellomooning/AliyunSVideoBaseDemo/master/screenshot/1.jpg)     | ![page2](https://raw.githubusercontent.com/hellomooning/AliyunSVideoBaseDemo/master/screenshot/2.jpg)     | ![page3](https://raw.githubusercontent.com/hellomooning/AliyunSVideoBaseDemo/master/screenshot/3.jpg)     |
