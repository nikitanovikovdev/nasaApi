import React from "react";
import SimpleReactCalendar from 'simple-react-calendar';

class Calendar extends React.Component{
        constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        }
        handleChange(date) {
                this.props.dateChange(date);
        }

            render() {
                return(
                    <div>
                            <SimpleReactCalendar onSelect={param1 => {
                                    const postDate = new Date(param1);
                                    console.log(postDate)
                                    let dateDay = postDate.getDate();
                                    let dateYear = postDate.getFullYear();
                                    let dateMonth = postDate.getMonth() + 1;
                                    console.log('dateDay ', dateDay);
                                    console.log('dateYear ', dateYear);
                                    console.log('dateMonth ', dateMonth);
                                    this.handleChange(`${dateYear}-${dateMonth}-${dateDay}`)
                            }
                            }/>
                    </div>
                )
}
}
export default Calendar;

