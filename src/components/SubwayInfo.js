import { useEffect, useState } from "react";
import sarea from '../data/sarea.json'
import TailCard from "../UI/TailCard";

export default function SubwayInfo() {
    const apikey = process.env.REACT_APP_API_KEY;
    const [ops,setOps] = useState();
    const [sdata,setSdata] = useState();
    const [card, setCard] = useState();
    

    useEffect(()=>{
        makeOption();
    },[])

    useEffect(()=>{
        if(sdata === undefined)return;
        const k =["co2","co","no2","no","nox"]
        const kname = ["이산화탄소","일산화탄소","이산화질소","일산화질소","칠소산화물"]
        let tm = k.map((item,idx)=><div className="flex flex-col" key={item}>
                                    <h3 className="bg-sky-500/20 text-violet-900/75 rounded-md font-semibold  flex justify-center items-center">{item}</h3>
                                    <div>{kname[idx]}</div>
                                    <div>{sdata[item]}</div>
                                    </div>)
        setCard(tm)
    },[sdata])
    
    const fetchData =async (areaIdx)=>{
        let url ='https://apis.data.go.kr/6260000/IndoorAirQuality/getIndoorAirQualityByStation?'
        url+=`serviceKey=${apikey}`
        url+='&pageNo=1&numOfRows=5&resultType=json'
        url+=`&controlnumber=2024010918`
        url+=`&areaIndex=${areaIdx}`

        const resp = await fetch(url);
        const data = await resp.json();
        //always check
        // console.log(url)
        // console.log(data.getIndoorAirQualityByStation.body.items.item)
        setSdata(data.getIndoorAirQualityByStation.body.items.item[0]);
    }
    const makeOption = ()=>{
        // console.log(sarea[0]["측정소"])
        let tm = sarea.map((a,idx)=><option key={`sareaOps${idx}`}
                                            value={a['코드']}>
                                        {a["측정소"]}
                                    </option>);
        setOps(tm);
        
    }

    const handleSelOps=(e)=>{
        //changed된 값을 받아서 적용
        // console.log(e.target.value)
        //받은 항목을 data에서 찾아서 뽑아내기
        fetchData(e.target.value);
        // if(sdata==null) return;
        // let tm = sdata.map((c)=>console.log(c))
        // let tm = sdata.map((c,idx)=><TailCard  k={`card${idx}`}
        //                                         theme ={'white'}
        //                                         title ={c.office}
        //                                         subtitle ={c.site}
        //                                         by ={c.city}
        //                                         tags={c.slice(5,13)}
        //                             />);
        // setCard(tm);
    }
   
    
    return (
        <div className='flex flex-col justify-top my-10 items-center'>
            <div>지하철 대기 정보</div>
            <div className="w-1/2">
                <select id="region" onChange={handleSelOps}>
                    <option defaultValue>지역 선택</option>
                    {ops}
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-8 gap-4 my-10">
                {card}
            </div>
        </div>
    )
}
/*
https://apis.data.go.kr/6260000/IndoorAirQuality/getIndoorAirQualityByStation?serviceKey=W4298Kl3xl0gOfyeKSAkiQQObfABjtbHzbcmfAuJAhKztl9AzOAGLFDS2xyrwq4xA%2B53iQM0jx8vzT28xfYdVg%3D%3D&pageNo=1&numOfRows=5&resultType=json&controlnumber=2024010918&areaIndex=201193

sarea.json: areaIndex
*/