import { IInputs, IOutputs } from "./generated/ManifestTypes";
import DataSetInterfaces = ComponentFramework.PropertyHelper.DataSetApi;
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./Components/App";

type DataSet = ComponentFramework.PropertyTypes.DataSet;

export class cpnHSTLTable
  implements ComponentFramework.StandardControl<IInputs, IOutputs>
{
  private _container: ReactDOM.Root;
  constructor() {}

  public init(
    context: ComponentFramework.Context<IInputs>,
    notifyOutputChanged: () => void,
    state: ComponentFramework.Dictionary,
    container: HTMLDivElement
  ): void {
    // Add control initialization code;
    this._container = ReactDOM.createRoot(container);
    this._container.render(React.createElement(App, context));
  }

  public updateView(context: ComponentFramework.Context<IInputs>): void {
    // Add code to update control view
  }

  public getOutputs(): IOutputs {
    return {};
  }

  public destroy(): void {
    // Add code to cleanup control if necessary
    this._container.unmount();
  }
}
