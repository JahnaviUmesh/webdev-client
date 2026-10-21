export default function VariableTypes() {
    let numberVariable = 123;
    let floatingPointNumber = 234.345;
    let stringVariable = "Hello World!";
    let booleanVariable = true;
    let isNumber = typeof numberVariable;
    let isString = typeof stringVariable;
    let isBoolean = typeof booleanVariable;
    let secondStringVar = "Jahnavi";
    let secondNumberVar = 2026;
    let isSecondString = typeof secondStringVar;
    let isSecondNumber = typeof secondNumberVar;
    let sampleCount = 42;
    let sampleLabel = "Lab 3";
    let isSampleCount = typeof sampleCount;
    let isSampleLabel = typeof sampleLabel;
    return (
      <div id="wd-variable-types">
        <h4>Variables Types</h4>
        numberVariable = {numberVariable}           <br />
        floatingPointNumber = {floatingPointNumber} <br />
        stringVariable = {stringVariable}           <br />
        booleanVariable = {booleanVariable + ""}    <br />
        isNumber = {isNumber}                       <br />
        isString = {isString}                       <br />
        isBoolean = {isBoolean}                     <br />
        secondString = {secondStringVar}            <br />
        secondNumber = {secondNumberVar}            <br />
        isSecondString = {isSecondString}           <br />
        isSecondNumber = {isSecondNumber}           <br />
        sampleCount = {sampleCount}                 <br />
        sampleLabel = {sampleLabel}                 <br />
        isSampleCount = {isSampleCount}             <br />
        isSampleLabel = {isSampleLabel}
        <hr />
      </div>
    );
}