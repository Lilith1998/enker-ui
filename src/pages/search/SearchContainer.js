import { connect } from 'react-redux'

import Search from './Search';

const mapStateToProps = state => ({
    // TODO: pass logged in user data
})

const mapDispatchToProps = dispatch => ({
  // TODO: action to start chat
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);