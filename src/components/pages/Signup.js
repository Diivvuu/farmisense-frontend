import styled from "styled-components";
import AuthPageBase from "../AuthPageBase";
import MaterialInput from "../../MaterialInput";
import { useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import Button from "../Button";
import BarLoader from "../BarLoader";
import makeRequest from "../../controllers/makeRequest";
import { toast } from "react-toastify";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  align-items: center;
`;

const MainInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  margin-top: 50px;
  width: 70%;
`;
const PrimaryButton = styled(Button)`
  padding: 10px 20px;
  font-size: 21px;
  text-transform: capitalize;
  border-radius: 10px;
  cursor: pointer;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color1);
  color: var(--color3);
`;
const AdditionalButtons = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 20px;
`;
const NewUserLabel = styled.div``;
const SecondaryButton = styled(Button)`
  padding: 5px 20px;
  cursor: pointer;
  font-size: 21px;
  text-transform: capitalize;
  border-radius: 10px;
  background-color: var(--color3);
  color: var(--color1);
`;

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  if (loading)
    return (
      <AuthPageBase>
        <BarLoader />
      </AuthPageBase>
    );

  return (
    <AuthPageBase>
      <Container>
        <MainInputs>
          <MaterialInput
            value={name}
            onNewValue={setName}
            placeholder={"Type Name"}
            label="Name"
          />

          <MaterialInput
            value={email}
            onNewValue={setEmail}
            placeholder={"Type Email"}
            label="Email"
          />

          <MaterialInput
            value={username}
            onNewValue={setUsername}
            placeholder={"Type Username"}
            label="Username"
          />
          <MaterialInput
            value={password}
            onNewValue={setPassword}
            placeholder={"Type Password"}
            label="Password"
          />
          <PrimaryButton onClick={doSignup}>Signup</PrimaryButton>
        </MainInputs>

        <AdditionalButtons>
          <NewUserLabel>Existing User?</NewUserLabel>
          <SecondaryButton
            onClick={() => {
              navigate("/");
            }}
          >
            Login
          </SecondaryButton>
        </AdditionalButtons>
      </Container>
    </AuthPageBase>
  );

  async function doSignup() {
    if (!username || !password || !email || !name)
      return toast("Fill required fields");

    setLoading(true);

    try {
      let authData = await makeRequest("/signup", "POST", {
        username: username.toLowerCase(),
        password,
        email: email.toLowerCase(),
        name,
      });

      if (authData.data) {
        toast(
          "Your account has been created. Please go to login page and login"
        );
      }
      console.log(authData);
    } catch (e) {
      toast(e.message);
    }

    setLoading(false);
  }
}
