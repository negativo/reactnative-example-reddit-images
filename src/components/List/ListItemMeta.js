import React from "react";
import { StyleSheet, Text } from "react-native";
import Icon from "../../../node_modules/react-native-vector-icons/dist/FontAwesome";
import Flex from "../Flex/Flex";

const styles = StyleSheet.create({
  meta: {
    color: "#878A8C",
    fontWeight: "bold"
  },
  date: {
    fontSize: 10,
    paddingTop: 2
  },
  icon: {
    color: "#878A8C",
    paddingRight: 2,
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
export default props => {
  const { data } = props;
  return (
    <Flex row style={{ alignItems: "flex-end", padding: 2 }}>
      <Flex row style={{ flexGrow: 2 }}>
        <Icon
          color={styles.icon.color}
          name="user"
          type="font-awesome"
          size={14}
        />
        <Text style={styles.meta}>{data.author}</Text>
      </Flex>
      <Flex row style={{ flexGrow: 1 }}>
        <Icon
          color={styles.icon.color}
          name="star"
          type="font-awesome"
          size={14}
        />
        <Text style={styles.meta}>{data.score}</Text>
      </Flex>
      <Flex row style={{ flexGrow: 1 }}>
        <Icon
          color={styles.icon.color}
          name="comments"
          type="font-awesome"
          size={14}
        />
        <Text style={styles.meta}>{data.num_comments}</Text>
      </Flex>
    </Flex>
  );
};
