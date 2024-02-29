import React from "react";

export default class DispositionBtn extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return (
            <button id={'btn'+this.props.idx} 
                    onClick={this.props.handleClick}
                    title={this.props.title}
            >
                <img src={this.props.src} width={32} height={32} alt={this.props.alt} />
            </button>
        )
    }
}