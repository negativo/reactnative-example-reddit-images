import React from "react";
import moment from "moment";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import Flex from "../Flex/Flex";
import ListItemMeta from "./ListItemMeta";

const styles = StyleSheet.create({
  date: {
    fontSize: 10,
    paddingTop: 2
  },
  title: {
    fontWeight: "bold",
    padding: 5
  },
  item: {
    marginBottom: 2
  }
});
export default class ListItem extends React.Component {
  render() {
    const { item, index } = this.props;
    if (!item.data.created || item.data.thumbnail === "self") {
      return null;
    }

    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Flex
          row
          style={[
            styles.item,
            {
              backgroundColor: index % 2 === 0 ? "#fff" : "#E0F0FC"
            }
          ]}
        >
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: item.data.url }}
          />
          <Flex column>
            <Text
              style={[{ alignSelf: "flex-end", paddingRight: 2 }, styles.date]}
            >
              {moment.unix(item.data.created).format("MMMM Do YYYY, h:mm:ss a")}
            </Text>
            <Text style={styles.title}>
              {item.data.title.substring(0, 100)}
            </Text>
            <ListItemMeta data={item.data} />
          </Flex>
        </Flex>
      </TouchableOpacity>
    );
  }
}
