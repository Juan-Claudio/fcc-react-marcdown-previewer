import { createStore } from "redux"
import { connect } from "react-redux"
import { marked } from "marked"
import Editor from "../components/Editor"
import Preview from "../components/Preview"
import Nav from "../components/Nav"
import Main from "../components/Main"
//import Highlight from 'highlight.js'

//TYPES
const types = () =>
{
    return [
        'PARSE',
        'YSPLIT',
        'XSPLIT',
        'EDITOR_ONLY',
        'PREVIEW_ONLY'
    ]
}
const [PARSE, YSPLIT, XSPLIT, EDITOR_ONLY, PREVIEW_ONLY] = types()

//DEFAULT STATE
const defaultState = () =>
{
    return {
        preview_content: '',
        disposition: ['App-ysplit', 'Editor-left', 'Preview-right']
    }
}

//ACTIONS
const parseTextAreaContent = (textAreaContent) =>
{
    return {type:PARSE, textAreaContent}
}
const splitHorizontal = () => { return {type:XSPLIT} }
const splitVertical = () => { return {type:YSPLIT} }
const showOnlyEditor = () => {return {type:EDITOR_ONLY} }
const showOnlyPreview = () => { return {type:PREVIEW_ONLY} }

//REDUCER
const parseReducer = (state = defaultState(), action) =>
{
    switch(action.type)
    {
        case PARSE:
            let parsed_content = marked(
                action.textAreaContent.replace(/\n/g,'  \n')
            )
            //Highlight.highlightAll()
            return Object.assign(
                {},state,
                {preview_content: parsed_content}
            )
        case XSPLIT:
            return Object.assign(
                {}, state,
                {disposition: [
                    'App-xsplit',
                    'Editor-top',
                    'Preview-bottom'
                ]}
            )
        case YSPLIT:
            return Object.assign(
                {}, state,
                {disposition: [
                    'App-ysplit', 
                    'Editor-left', 
                    'Preview-right'
                ]}
            )
        case EDITOR_ONLY:
            return Object.assign(
                {}, state,
                {disposition: [
                    'App-onlyOne', 
                    'Editor-only', 
                    'Preview-none'
                ]}
            )
        case PREVIEW_ONLY:
            return Object.assign(
                {}, state,
                {disposition: [
                    'App-onlyOne',
                    'Editor-none',
                    'Preview-only'
                ]}
            )
        default: return state
    }
}

//CREATE STORE
const store = createStore(parseReducer)

//MAP STATE and DISPATCH to props
const mapStateToProps = (state) =>
{
    return {
        parsedTextAreaContent: state.preview_content,
        disposition: state.disposition
    }
}
const mapDispatchToProps = (dispatch) =>
{
    return {
        updateParsedTextAreaContent: (textAreaContent) =>
        {
            dispatch(parseTextAreaContent(textAreaContent))
        },
        splitHorizontal:()=>{ dispatch(splitHorizontal()) },
        splitVertical:()=>{ dispatch(splitVertical()) },
        showOnlyEditor:()=>{ dispatch(showOnlyEditor()) },
        showOnlyPreview:()=>{ dispatch(showOnlyPreview()) }
    }
}

//CONNECT
const EditorConnected = connect( mapStateToProps, mapDispatchToProps )(Editor)
const PreviewConnected = connect( mapStateToProps, null )(Preview)
const NavConnected = connect( null, mapDispatchToProps )(Nav)
const MainConnected = connect ( mapStateToProps, null )(Main)

export {store, EditorConnected, PreviewConnected, NavConnected, MainConnected}