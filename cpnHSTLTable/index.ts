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
  private selectedItem: number;
  private noficationOutputChanged: () => void;
  constructor() {}

  public init(
    context: ComponentFramework.Context<IInputs>,
    notifyOutputChanged: () => void,
    state: ComponentFramework.Dictionary,
    container: HTMLDivElement
  ): void {
    // Add control initialization code;
    container.setAttribute("style", "height: 100%; width: 100%;");
    this._container = ReactDOM.createRoot(container);
    this.noficationOutputChanged = notifyOutputChanged;
  }

  public updateView(context: ComponentFramework.Context<IInputs>): void {
    // Add code to update control view
    this._container.render(
      React.createElement(App, {
        context,
        setSelectedItem: this.setSelectedItems.bind(this),
      })
    );
  }

  public setSelectedItems(selectedItem: number): void {
    this.selectedItem = selectedItem;
    this.noficationOutputChanged();
  }

  public getOutputs(): IOutputs {
    return {
      selectedItem: this.selectedItem,
    };
  }

  public destroy(): void {
    // Add code to cleanup control if necessary
    this._container.unmount();
  }
}
