import React from "react";
import { connect } from "react-redux";
import {
  Button,
  StyleSheet,
  Text,
  Dimensions,
  View,
  WebView,
  FlatList
} from "react-native";
import { getPicsSaga } from "../../store/pics/actions.js";
import Flex from "../Flex/Flex.js";
import ListItem from "./ListItem.js";

const REDDIT_BASE_URL = "http://www.reddit.com";
class List extends React.Component {
  state = {
    webView: false
  };
  componentWillMount() {
    console.disableYellowBox = true;
    this.props.getPicsSaga();
  }

  renderWebView = () => {
    return (
      <Flex column style={{ alignItems: "stretch" }}>
        <WebView
          source={{
            uri: REDDIT_BASE_URL + this.state.webView
          }}
          startInLoadingState
          scalesPageToFit
          javaScriptEnabled
          style={{ width: Dimensions.get("window").width }}
        />
        <View
          style={{
            borderTopWidth: 1,
            borderTopColor: "#000000"
          }}
        >
          <Button title="close" color="#841584" onPress={this.hideWebView}>
            CLOSE
          </Button>
        </View>
      </Flex>
    );
  };

  hideWebView = () => {
    this.setState({ webView: null });
  };

  showWebView = url => () => {
    this.setState({ webView: url });
  };

  render() {
    if (!this.props.pics) {
      return null;
    }

    if (this.state.webView) {
      return this.renderWebView();
    }

    return (
      <View style={{ flex: 1, width: "100%" }}>
        <FlatList
          keyExtractor={item => item.data.created.toString()}
          data={this.props.pics}
          renderItem={({ item, index }) => (
            <ListItem
              item={item}
              index={index}
              onPress={this.showWebView(item.data.permalink)}
            />
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.pics.error,
    pics: state.pics.all
  };
};

export default connect(
  mapStateToProps,
  {
    getPicsSaga
  }
)(List);
