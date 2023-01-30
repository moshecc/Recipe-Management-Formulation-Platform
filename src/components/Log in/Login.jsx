import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { signInWithGoogle } from '../../Firebase';
import { FcGoogle } from "react-icons/fc";


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
  }

  
}

export default function login() {
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
            <Typography level="h3" component="h1">
              <b style={{color:"black"}}>Welcome!</b>
            </Typography>
            <Typography level="body2" style={{color:"wheat"}}>Sign in to continue.</Typography>
          </div>
          <FormControl>
            <FormLabel style={{color:"black"}}>Email</FormLabel>
            <Input
              // html input attribute
              name="email"
              type="email"
              placeholder="johndoe@email.com"
            />
          </FormControl>
          <FormControl>
            <FormLabel style={{color:"black"}}>Password</FormLabel>
            <Input
              // html input attribute
              name="password"
              type="password"
              placeholder="password"
            />
          </FormControl>

          <Button sx={{ mt: 1 /* margin top */ }}>Log in</Button>
          <button onClick={signInWithGoogle} className='btn bg-info'><h6><FcGoogle/>  Log in wite google</h6></button>

          <Typography
            endDecorator={<Link href="/sign-up">Sign up</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
            style={{color:"wheat"}}
          >
            Don&apos;t have an account?
          </Typography>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}