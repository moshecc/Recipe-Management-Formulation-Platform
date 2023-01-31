import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { FcGoogle } from "react-icons/fc";
import { FaGhost } from "react-icons/fa";
import { RiLoginCircleFill } from "react-icons/ri";
import { signInWithPopup } from "firebase/auth";
import {auth , googleProvider} from "../../Firebase"
import { useContext } from 'react';
import { ContextData } from '../../context/MyContext';



function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }}

export default function Login() {

  const {SetUser} = useContext(ContextData);

  const signInWithGoogle = () =>{
    signInWithPopup(auth, googleProvider)
      .then((result) => {
          console.log(result);

       })
      .catch((erorr) => {
        console.log(erorr);    
        alert("error");
      });
  };


  return (
    <CssVarsProvider>
      <main>
        <ModeToggle />
        <Sheet
        style={{backgroundColor: "rgba(0, 0, 0,0.35)"}}
          sx={{
            width: 320,
            mx: 'auto', // margin left & right
            my: 4, // margin top & botom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h4">
              <b style={{color:"black"}}>Welcome!</b>
            </Typography>
            <Typography level="body2" style={{color:"wheat"}}>Sign /Log in to continue.</Typography>
          </div>
          <Button className='btn bg-primary m-1'><RiLoginCircleFill/>  LogIn</Button>
          <Button onClick={signInWithGoogle} className='btn bg-primary'><h6><FcGoogle/>  Sign in with Google</h6></Button>
          <Button className='btn bg-primary'><h6><FaGhost/>  Sign in as a Guest</h6></Button>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}