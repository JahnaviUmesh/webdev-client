"use client";
import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import ContextExamples from "./context/ContextExamples";
import Counter from "./Counter";
import CounterBroken from "./CounterBroken";
import DateStateVariable from "./DateStateVariable";
import Effect from "./Effect";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import PropDrilling from "./PropDrilling";
import ReduxExamples from "./redux/ReduxExamples";
import StringStateVariables from "./StringStateVariables";
import UrlEncoding from "./UrlEncoding";
import ZustandExamples from "./zustand/ZustandExamples";

export default function Lab4() {
  const sayHello = (message: string) => {
    alert(message);
  };
  const sayMyName = () => {
    alert("I'm Jahnavi!");
  };
  const sampleFromParent = () => {
    alert("Sample from parent");
  };
  return (
    <div id="wd-lab4">
      <h2>Lab 4</h2>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions
        message="Hello from parent"
        theFunction={sayHello}
        theNameFunction={sayMyName}
        theOtherFunction={sampleFromParent}
      />
      <CounterBroken />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ParentStateComponent />
      <PropDrilling />
      <UrlEncoding />
      <ContextExamples />
      <ZustandExamples />
      <ReduxExamples />
      <Effect />
    </div>
  );
}