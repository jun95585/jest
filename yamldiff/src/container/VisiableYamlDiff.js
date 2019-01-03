import { connect } from 'react-redux'
import YamlDiff from '../components/YamlDiff'
import { changeOrigin, changeNew } from '../actions'

const mapStateToProps = (state, props) => {
    return {
       ...state.codes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(YamlDiff)
