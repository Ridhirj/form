import styled from "styled-components";

const Label = styled.label`
  display: flex;
  align-items: center;
  // outline: 2px solid black;
  width: max-content;
  gap: 10px;
  cursor: pointer;
  `;

  const Switch = styled.div`
  position: relative;
  width: 65px;
  height: 30px;
  background: hsl(213, 96%, 18%);
  border-radius: 32px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: white;
    transform: translate(0, -50%);
  }
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${Switch} {
    background: hsl(213, 96%, 18%);

    &:before {
      transform: translate(32px, -50%);
    }
  }
`;

const ToggleSwitch = ({ checked, setChecked }) => {
  return (
    <Label>
      <Input checked={checked} type="checkbox" onChange={setChecked} />
      <Switch />
    </Label>
  );
};

export default ToggleSwitch;