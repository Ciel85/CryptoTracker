import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ticketContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ticketTitle: {
    color: "white",
    fontWeight: "bold",
    marginHorizontal: 5,
    fontSize: 17,
  },
  rankContainer: {
    backgroundColor: "#585858",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
  },
});

export default styles;
