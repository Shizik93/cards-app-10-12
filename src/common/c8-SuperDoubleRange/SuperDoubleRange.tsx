import React from 'react'
import style from './SuperDoubleRange.module.css'
import SuperRange from "../c7-SuperRange/SuperRange";


type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number[]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

export const SuperDoubleRange = (props:SuperDoubleRangePropsType) => {
    // сделать самому, можно подключать библиотеки

    const onChangeMax=(max:number)=>{
        if(props.onChangeRange&&props.value)
        if(props.value[0] <= props.value[1] - 5) {
            props.onChangeRange([props.value[0], max])
        } else {
            max >= 5 ? props.onChangeRange([max - 5, max]) : props.onChangeRange([0, max])
        }
    }
    const onChangeMin = (min:number) => {
        if(props.onChangeRange&&props.value)
      if(props.value[0]<=props.value[1]-5){
          props.onChangeRange([min,props.value[1]])
      }
      else{
          min<=95?props.onChangeRange([min,min+5]):props.onChangeRange([min,props.value[1]])
      }
    }

    return (
     <div className={style.wrapper}>
    <SuperRange  value={props.value&&props.value[0]} onChangeRange={onChangeMin}/>
    <SuperRange className={style.double} value={props.value&&props.value[1]} onChangeRange={onChangeMax}/>
     </div>
    )
}


