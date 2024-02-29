import React from "react";
import { EditorConnected, PreviewConnected } from "../redux/StoreConnections";

export default class Main extends React.Component
{
    constructor(props)
    {
        super(props)
    }
    
    render()
    {
        return (
            <main className={this.props.disposition[0]}>
                <EditorConnected />
                <PreviewConnected />
            </main>
        )
    }
}