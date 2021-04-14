import { PeopleState } from '../../actions/types';

const mapStateToProps = (state: PeopleState) => ({
    peoples: state.peoples
})

export default mapStateToProps;