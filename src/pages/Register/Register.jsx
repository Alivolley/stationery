import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiShow, BiHide } from "react-icons/bi";
import useRgister from "../../api/register/useRgister";
import LoadingBtn from "../../components/shared/LoadingBtn/LoadingBtn";
import { toast } from "react-toastify";

const Register = () => {
   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   const [showPassword, setShowPassword] = useState(false);

   const [getUsersList, loading] = useRgister();

   const submitRegister = (e) => {
      e.preventDefault();

      if (username && email && password && confirmPassword) {
         if (password !== confirmPassword) {
            toast.error("رمزهای عبور با یکدیگر همخوانی ندارند", {
               theme: "colored",
               rtl: true,
            });
         } else if (password.length < 8) {
            toast.error("رمز عبور باید بیش از ۸ حرف باشد .", {
               theme: "colored",
               rtl: true,
            });
         } else {
            getUsersList(username, email, password, confirmPassword);
         }
      }
   };

   const changeVisibility = () => {
      setShowPassword((prev) => !prev);
   };

   return (
      <Wrapper>
         <Box>
            <Title>فرم ثبت نام</Title>
            <hr />
            <Form onSubmit={submitRegister}>
               <Item>
                  <Label>نام :</Label>
                  <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
               </Item>
               <Item>
                  <Label>ایمیل :</Label>
                  <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
               </Item>
               <Item>
                  <Label>رمز عبور :</Label>
                  <Input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} />
                  <IconWrapper onClick={changeVisibility}>{showPassword ? <BiShow /> : <BiHide />}</IconWrapper>
               </Item>
               <Item>
                  <Label>تکرار رمز عبور :</Label>
                  <Input type={showPassword ? "text" : "password"} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                  <IconWrapper onClick={changeVisibility}>{showPassword ? <BiShow /> : <BiHide />}</IconWrapper>
               </Item>
               {loading ? <LoadingBtn /> : <SubmitBtn disabled={username && email && password && confirmPassword ? false : true}>ثبت نام</SubmitBtn>}
            </Form>

            <Text>
               از قبل حساب کاربری دارید؟ <GoToLogin to="/login">وارد شوید .</GoToLogin>
            </Text>
         </Box>
      </Wrapper>
   );
};

export default Register;

const Wrapper = styled.div`
   margin: 0 12rem;
   background-color: var(--secondary-color);
   padding: 2rem;
`;

const Box = styled.div`
   direction: rtl;
   width: fit-content;
   margin: 0 auto;
   border: 0.1rem solid gray;
   background-color: white;
   border-radius: 0.5rem;
   margin-top: 3rem;
`;

const Title = styled.h3`
   text-align: center;
   margin-top: 2rem;
   font-size: 2.5rem;
   font-weight: 700;
   margin-bottom: 2rem;
`;

const Form = styled.form`
   padding: 2rem;
   display: flex;
   flex-direction: column;
   gap: 3rem;
`;

const Item = styled.div`
   position: relative;
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 3rem;
`;

const Label = styled.label``;

const Input = styled.input`
   height: 3.5rem;
   font-size: 1.4rem;
   width: 21rem;
   padding: 0 1rem;
   border: 0.1rem solid black;
   border-radius: 0.2rem;

   &:focus {
      outline: 0.1rem solid var(--purple-color);
   }
`;

const SubmitBtn = styled.button`
   background-color: var(--purple-color);
   color: white;
   border: 0.2rem solid var(--purple-color);
   border-radius: 0.5rem;
   padding: 0.5rem 1.5rem;
   cursor: pointer;
   transition: all 0.2s;

   &:hover {
      background-color: white;
      color: black;
   }

   &:disabled {
      background-color: #92949553;
      border-color: #92949553;
      color: black;
      cursor: default;
   }
`;

const Text = styled.p`
   text-align: center;
   margin-top: 1rem;
   margin-bottom: 2.5rem;
`;

const GoToLogin = styled(Link)`
   text-decoration: none;
`;

const IconWrapper = styled.div`
   position: absolute;
   left: 0.5rem;
   cursor: pointer;
   font-size: 1.8rem;
   background-color: white;
`;
