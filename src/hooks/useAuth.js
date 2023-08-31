import clienteAxios from "../config/axios";
import useSWR from 'swr'
export const useAuth = ({middleware,url,mutate})=>{
    const token = localStorage.getItem('AUTH_TOKEN')
    const {data:user, error} = useSWR('/api/user',()=>
        clienteAxios('/api/user',{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        .then(res=>res.data)
        .catch(error =>{
            throw Error(error?.response?.data?.errors)
        })
    )
    const login =async (datos, setErrores)=>{
        try {
            const {data} = await clienteAxios.post('/api/login',datos)
            localStorage.setItem('AUTH_TOKEN',data.token);
            setErrores([]);
            await mutate();
          } catch (error) {
            
            setErrores(Object.values(error.response.data.errors));
          }
    }
    const registro = ()=>{}
    const logout = ()=>{}
    console.log(user);
    console.log(error);
    return{
        login,
        registro,
        logout
    }
}