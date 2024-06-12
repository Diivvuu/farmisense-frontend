import styled from "styled-components";
import Dashboard from "./Dashboard";
import Login from "./login";

const Container = styled.div``;

export default function Main() {
  let loggedIn = localStorage.getItem("farmsenseUser");

  if (loggedIn) return <Dashboard />;

  return <Login />;
}
