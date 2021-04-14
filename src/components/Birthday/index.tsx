import { connect, ConnectedProps, Provider as div } from 'react-redux';
import { clear } from '../../actions/actionCreator';
import mapStateToProps from '../mapStateToProps';
import { People } from '../People';


const connector = connect(mapStateToProps, { clear })

type PropsBirthday = ConnectedProps<typeof connector>;


const Birthday = ({ peoples, clear }: PropsBirthday) => {
    return (
        <div>
            {peoples.map(person => (
                <People {...person} />
            ))}
            <button onClick={clear}>
                clear
            </button>
        </div>
    )
}

export default connector(Birthday);