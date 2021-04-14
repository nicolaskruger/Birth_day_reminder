import { connect, ConnectedProps, Provider as div } from 'react-redux';
import { clear } from '../../actions/actionCreator';
import mapStateToProps from '../mapStateToProps';
import { People } from '../People';
import './style.css'


const connector = connect(mapStateToProps, { clear })

type PropsBirthday = ConnectedProps<typeof connector>;


const Birthday = ({ peoples, clear }: PropsBirthday) => {
    return (
        <div className="Birthday__div">
            {peoples.map(person => (
                <People {...person} />
            ))}
            <button className="Birthday__button" onClick={clear}>
                clear
            </button>
        </div>
    )
}

export default connector(Birthday);