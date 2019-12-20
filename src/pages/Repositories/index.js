import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as RepositoriesActions} from '~/store/ducks/repositories';

import {Container, Loading, NomeRepo} from './styles';

class Repositories extends Component {
  componentDidMount() {
    const {loadRepositoriesRequest} = this.props;

    loadRepositoriesRequest();
  }

  render() {
    const {repositories} = this.props;
    return (
      <Container>
        {repositories.loading ? (
          <Loading />
        ) : (
          repositories.data.map(repository => (
            <NomeRepo key={repository.id}>{repository.name}</NomeRepo>
          ))
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  repositories: state.repositories,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Repositories);
