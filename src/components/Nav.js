import React from "react";
import DispositionBtn from "./DispositionBtn";
import '../styles/Nav.css';
import ic_split from '../img/square-half.svg';
import ic_square from '../img/square.svg';
import ic_fill from '../img/square-fill.svg';

export default class Nav extends React.Component
{
    constructor(props)
    {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(view)
    {
        switch(view)
        {
            case 'ysplit':
                this.props.splitVertical();return;
            case 'xsplit':
                this.props.splitHorizontal();return;
            case 'editorOnly':
                this.props.showOnlyEditor();return;
            case 'previewOnly':
                this.props.showOnlyPreview();return;
            default:
                return
        }
    }

    render()
    {
        const buttons_attr = [
            [
                ic_split,
                "ronded square half left black and right white",
                "vertical split view",
                () => {this.handleClick('ysplit')}
            ],
            [
                ic_split,
                "ronded square half bottom black and top white",
                "horizontal split view",
                () => {this.handleClick('xsplit')}
            ],
            [
                ic_fill,
                "white filled ronded square",
                "only editor visible",
                () => {this.handleClick('editorOnly')}
            ],
            [
                ic_square,
                "black filled ronded square",
                "only preview visible",
                () => {this.handleClick('previewOnly')}
            ]
        ]

        return (
            <nav>
                {
                    buttons_attr.map((val, idx) => 
                    {
                        return (
                            <DispositionBtn key={idx} idx={idx} 
                                    handleClick={val[3]}
                                    title={val[2]}
                                    alt={val[1]}
                                    src={val[0]}
                            />
                        )
                    })
                }
            </nav>
        )
    }
}