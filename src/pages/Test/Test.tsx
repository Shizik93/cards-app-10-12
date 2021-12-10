import React from "react";
import SuperInputText from "../../common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../common/c3-SuperCheckbox/SuperCheckbox";
import SuperEditableSpan from "../../common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperSelect from "../../common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../../common/c6-SuperRadio/SuperRadio";
import SuperRange from "../../common/c7-SuperRange/SuperRange";
import {SuperDoubleRange} from "../../common/c8-SuperDoubleRange/SuperDoubleRange";
import style from './test.module.css'
export const Test = () => {
  return(
      <div className={style.test}>
        <SuperInputText/>
          <SuperButton>+</SuperButton>
          <SuperCheckbox/>
          <SuperEditableSpan/>
          <SuperSelect/>
          <SuperRadio/>
          <SuperRange/>
          <SuperDoubleRange/>


      </div>
  )
}