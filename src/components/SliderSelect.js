import React, { Fragment } from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = ({ data, setData }) => {
  return (
    <Fragment>
      <SliderComponent
        unit="$"
        amount={data.homeValue}
        value={data.homeValue}
        label={"Home Value"}
        min={1000}
        max={10000}
        defaultValue={data.homeValue}
        step={100}
        onChange={(e) => setData({
          ...data,
          downPayment: e.target.value*0.2,
          loanAmount: e.target.value*0.8,
          homeValue: e.target.value,
        })}
      />

      <SliderComponent
        unit="$"
        amount={data.downPayment}
        value={data.downPayment}
        label={"Down Payment"}
        min={0}
        max={data.homeValue}
        defaultValue={data.downPayment}
        step={100}
        onChange={(e) => setData({
          ...data,
          loanAmount: data.homeValue - e.target.value,
          
          downPayment: e.target.value,
        })}
      />

      <SliderComponent
        unit="$"
        amount={data.loanAmount}
        value = {data.loanAmount}
        label={"Loan Amount"}
        min={0}
        max={data.homeValue}
        defaultValue={data.loanAmount}
        step={100}
        onChange={(e) => setData({
          ...data,
          downPayment: data.homeValue - e.target.value,
          loanAmount: e.target.value,
        })}
      />

      <SliderComponent
      label = "Interest Rate"
      min = {2}
      max = {18}
      defaultValue={data.interestRate}
      value = {data.interestRate}
      step= {0.5}
      onChange={(e)=>setData({
        ...data,
        interestRate: e.target.value
      })}
      unit = '%'
      amount = {data.interestRate}


        
      />
    </Fragment>
  );
};

export default SliderSelect;
