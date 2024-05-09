import { Button, Typography, Collapse } from "antd";
import style from "./intro.module.css";

const { Title, Paragraph } = Typography;

const Intro = () => {
const usesound=()=>{
    let audio = new Audio("你的音频文件的URL");
    audio.play();
}
  const text = `
  本项目的原理其实挺简单的，本质上是用yolov5加上开源鸟类数据集进行训练之后得出的一个分类模型，需要的资源是20块钱租一台4090服务器
训练几个小时就成，因为我用的数据集本身比较小的原因（只有200个类别），实际上这几个小时就能达到差不多的水平了， 这里可能需要讲的
  是数据集的处理？因为我用的数据集很贴心的每个文件夹的名字都是该类别的名称，所以训练起来还是蛮方便的。
`;
  const text2 = `
训练完模型之后实际上后面的流程就是水到渠成了，我实际上是先做了一个app的（用reactnative）,然后才着手做这个网站，
因此网站的话只需要把app的接口再次调用一遍就行，本质上就是传输图片和视频
`;
  const text3 = `
  这不用我多说吧
`;

  const items = [
    {
      key: "1",
      label: "原理介绍",
      children: <p>{text}</p>,
    },
    {
      key: "2",
      label: "实现流程",
      children: <p>{text2}</p>,
    },
    {
      key: "3",
      label: "使用方法",
      children: (
        <p>
          {text3}<Button onClick={usesound} type="primary">导航</Button>
        </p>
      ),
    },
  ];
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div className={style.container}>
      <Typography>
        <Title>Welcome to my Introduction Page!</Title>
        <Paragraph>
          This is an introduction page built with Ant Design. You can use
          various components provided by Ant Design to build beautiful and
          responsive UIs.
        </Paragraph>
      </Typography>
      <Collapse items={items} defaultActiveKey={["1"]} onChange={onChange} />
    </div>
  );
};

export default Intro;
