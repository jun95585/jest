import { connect } from 'react-redux'
import Editor from '../components/OriginEditor'
import { changeOrigin, changeNew } from '../actions'

const mapStateToProps = (state, props) => {
    return {
        code: state.codes.originCode,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: data => dispatch(changeOrigin(data)),
        copyToNew: data => dispatch(changeNew(data)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Editor)
