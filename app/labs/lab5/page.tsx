import Environment from "./Environment";
import HttpClient from "./HttpClient";
import PathParameters from "./PathParameters";
import QueryParameters from "./QueryParameters";
import WorkingWithRemoteArraysAsync from "./WorkingWithRemoteArraysAsync";
import WorkingWithRemoteObjects from "./WorkingWithRemoteObjects";
import WorkingWithRemoteObjectsAsync from "./WorkingWithRemoteObjectsAsync";
import HelloRoute from "./HelloRoute";
import Calculator from "./Calculator";
export default function Lab5() {
  return (
    <div id="wd-lab5">
      <h2>Lab 5</h2>
      <Environment />
      <PathParameters />
      <QueryParameters />
      <WorkingWithRemoteObjects />
      <HttpClient />
      <WorkingWithRemoteObjectsAsync />
      <WorkingWithRemoteArraysAsync />
      <HelloRoute />
      <Calculator />
    </div>
  );
}