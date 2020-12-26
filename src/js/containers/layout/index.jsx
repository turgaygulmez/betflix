import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { DefaultLayout } from "../../components/layouts";

import { getNavigation } from "../../store/navigation/actions";
import { selectNavigation } from "../../store/navigation/reducer";
import { setFilters } from "../../store/movies/actions";

class Layout extends React.PureComponent {
  constructor(props) {
    super(props);

    this.setFilter = this.setFilter.bind(this);
  }

  setFilter(data) {
    const { onSetFilters, history, location } = this.props;

    onSetFilters(data);

    if (location.pathname !== "/") {
      history.push(`/`);
    }
  }
  componentDidMount() {
    const { navigation, onLoadNavigation } = this.props;

    if (navigation && !navigation.length) {
      onLoadNavigation();
    }
  }

  render() {
    const { navigation = [], children } = this.props;
    return (
      <DefaultLayout
        navigation={navigation}
        children={children}
        onSetFilters={this.setFilter}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    navigation: selectNavigation(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoadNavigation: () => dispatch(getNavigation()),
  onSetFilters: (data) => dispatch(setFilters(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Layout));
