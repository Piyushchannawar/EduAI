import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useState } from "react"

const Login = () => {
    const [signupInput, setSignupInput] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [loginInput, setLoginInput] = useState({
        email: '',
        password: ''
    });

   const changeInputHandler = (e,type) => {
    const {name, value} = e.target;

     if(type === 'signup') {
        setSignupInput({...signupInput, [name]: value});
     } else if(type === 'login') {
        setLoginInput({...loginInput, [name]: value});
     }
   }

   const handleRegistration = (types) => {
    const inputData = types === "signup" ? signupInput : loginInput;
    console.log(inputData);
   }

  return (
    <div className="flex items-center w-full justify-center">
    <Tabs defaultValue="signup" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="signup">Signup</TabsTrigger>
        <TabsTrigger value="login">Login</TabsTrigger>
      </TabsList>
      <TabsContent value="signup">
        <Card>
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>
              Create a new account.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input onChange={(e) => changeInputHandler(e, 'signup')}
                name="name"
                value={signupInput.name}
              type="text" placeholder="Piyush" required="true" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Email</Label>
               <Input 
               onChange={(e) => changeInputHandler(e, 'signup')}
               name="email"
               value={signupInput.email}
               type="email" placeholder="Piyush@gmail.com" required="true"/>
            </div>
             <div className="space-y-1">
              <Label htmlFor="username">Password</Label>
               <Input onChange={(e) => changeInputHandler(e, 'signup')}
               name="password"
                value={signupInput.password}
               type="password" placeholder="123456" required="true"/>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={() => handleRegistration("signup")}>Sign Up</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Login to your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Email</Label>
               <Input onChange={(e) => changeInputHandler(e, 'login')}
               name="email"
               value={loginInput.email}
               type="email" placeholder="Piyush@gmail.com" required="true"/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Password</Label>
               <Input onChange={(e) => changeInputHandler(e, 'login')}
               name="password"
               value={loginInput.password}
               type="password" placeholder="123456" required="true"/>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={() => handleRegistration("login")}>Login</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
    </div>
  )
}

export default Login;