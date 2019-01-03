import { connect } from 'react-redux'
import Editor from '../components/Editor'
import { changeNew } from '../actions'

const mapStateToProps = (state, props) => {
    return {
        code: state.codes.newCode,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: data => dispatch(changeNew(data)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Editor)
