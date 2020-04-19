import React from 'react';
import Card from '../../components/card';
import './index.scss';

export default function () {
  return (
    <div className="index">
      <Card
        title="Imaging"
        target="https://github.com/minetsh/Imaging"
        description="Android 端，图片编辑、涂鸦、马赛克、文字、贴图、裁剪库"
      />
      <Card
        title="PopupMenuView"
        target="https://github.com/minetsh/PopupMenuView"
        description="一个类似 iOS 中弹框气泡菜单（UIMenuController）的控件"
      />
      <Card
        title="IntensifyImageView"
        target="https://github.com/minetsh/IntensifyImageView"
        description="Picture Preview Lib，用于显示原图级别的图片预览库，大图显示，大图预览，大图加载，类似微博长图，宽图，可用于显示大分辨率图片等。"
      />
      <Card title="Json" target="/json" description="在线解析 Json 对象工具" />
      <Card title="About" description="Felix Front-end developer，minxtth@gmail.com" />
    </div>
  );
}
