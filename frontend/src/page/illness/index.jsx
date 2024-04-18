import { useState } from 'react';
import axios from 'axios';
import { Input, Descriptions, Card, Button  } from "antd";
import style from './ill.module.css'
const Ill = () => {
    const [data, setData] = useState({});
    const [keyword, setKeyword] = useState('');
    const Key='L6Ai2V5E4BXRCxRgFq71tsh0kcojhtHi'
    const search=() => {
        axios.get('https://api.a20safe.com/api.php',{
            params: {
              api: 60,
              key: Key,
              keyword: keyword
            }
          })
            .then((response) => {
                setData(response);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            })
    }
    const isEmpty = (obj) => {
        return Object.keys(obj).length === 0;
    }
    const DetailDisplay = () => {
        // 开始循环遍历data
        if(!isEmpty(data)){
        const renderData = data[0].result.map((item, index) => {
           return (
              <Descriptions.Item key={index} label={item.attribute}>
                 {item.value}
              </Descriptions.Item>
           )
        })
     
        return (
           <Descriptions title={data[0].entity}>
              {renderData}
           </Descriptions>
        );
    }else{
        return(
            <div>NO DATA</div>
        )
    }
     }
    // render the data
    return (
        <div>
            <Card>
                <div className={style.seach}>
                    <Input
                        placeholder="请输入关键词"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                    <Button type='primary' onClick={search}>搜索</Button>
                </div>
                <br></br>
                <Card>
                <div>
                <DetailDisplay></DetailDisplay>
                </div>
                </Card>
            </Card>
        </div>
    );  
}

export default Ill