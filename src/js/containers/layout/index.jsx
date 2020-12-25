import React from "react";
import { connect } from "react-redux";

import { DefaultLayout } from "../../components/layouts";

import { getNavigation } from "./actions";
import { selectNavigation } from "./reducer";

class Layout extends React.PureComponent {
  componentDidMount() {
    const { navigation, onLoadNavigation } = this.props;

    if (navigation && !navigation.length) {
      onLoadNavigation();
    }
  }

  render() {
    const { navigation = [], children } = this.props;
    return <DefaultLayout navigation={navigation} children={children} />;
  }
}

const mapStateToProps = (state) => {
  return {
    navigation: selectNavigation(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoadNavigation: () => dispatch(getNavigation())
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
