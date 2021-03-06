import React from 'react';



import Article from '../../components/article/Article';
import Button from '../../components/createButton/CreateButton';
import FormField from '../../components/formField/FormField';

import list from './list';


import './style.css';

export default class ToDo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value : '',
            itemList: [...list.data],


        };
    }
    onChange =(event) => {
        this.setState({
            value: event.target.value
        })
    };
    onSubmit = (event) =>{

        event.preventDefault();
        this.setState({

            value:'',
            itemList: [
                {id: getNextId(),
                    status:"inbox",
                taskName: `${this.state.value}`},
                ...this.state.itemList
            ]

        })
    };



    renderList = (tasks) => {
        return tasks.map((item, index) => {
            return (
                <Article key={index} taskName={item.taskName} status={item.status} id={item.id}/>
            );
        });
    };

    render() {
        return (
            <React.Fragment>
                <form
                    className='form'
                    onSubmit = {this.onSubmit}
                    >
                    <FormField
                        value={this.state.value}
                        className ='form__field'
                        placeholder = 'Type your new task'
                        onChange={this.onChange}
                        id="form-field"
                        required={true}
                        />
                    <Button
                        className="form__button"
                        type = "submit"
                        value='Create'
                        id="form-button"

                        />
                </form>
                {this.renderList(this.state.itemList)}
            </React.Fragment>
        );
    };
};
// function guid() {
//     function _p8(s) {
//         var p = (Math.random().toString(16)+"000000000").substr(2,8);
//         return s ? "-" + p.substr(0,4) + "-" + p.substr(4,4) : p ;
//     }
//     return _p8() + _p8(true) + _p8(true) + _p8();
// }_

function getNextId() {
    const randId = Math.random().toString();
    return `taskID_${randId.substring(2, randId.length)}`;

}
