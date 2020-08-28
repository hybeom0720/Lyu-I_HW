import React, {useEffect} from 'react';
import Axios from 'axios';
import {useDispatch} from 'react-redux'
import {auth} from '../_actions/user_action'

export default function (SpecificComponent, option, adminRoute = null){
    //null => 아무나 출입 가능
    //true => 로그인한 유저만 출입 가능한 페이지
    //false => 로그인한 유저는 출입 불가능한 페이지

    function AuthenticationCheck(props){

        const dispatch = useDispatch();

        useEffect(() => {
            
            dispatch(auth()).then(response =>{
                console.log(response)

                if(!response.payload.isAuth){
                    //로그인안한상태
                    if (option){
                        props.history.push('/login')
                    }
                }else{
                    //로그인
                    if (adminRoute && !response.payload.isAdmin){
                        props.history.push('/')
                    } else{
                        if (option === false){
                            alert("로그인한 사람은 못들어갑니다.")
                            props.history.push('/')
                        }
                    }
                }
            })
            Axios.get('/api/users/auth')
        }, [])
        
        return (
            <SpecificComponent />
        )
    }

    return AuthenticationCheck
}