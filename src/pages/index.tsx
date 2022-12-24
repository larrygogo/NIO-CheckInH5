import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import {useEffect, useState} from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [nickName, setNickName] = useState<string>('')
  const [avatar, setAvatar] = useState<string>('')

  useEffect(() => {
    window.h5sdk.ready(() => { // ready方法不需要每次都调用
      tt.getUserInfo({
        withCredentials: false,
        success(res) {
          console.log(JSON.stringify(res));
          setAvatar(res.userinfo.avatarUrl)
          setNickName(res.userinfo.nickName)

        },
        fail(res) {
          console.log(`getUserInfo fail: ${JSON.stringify(res)}`);
        }
      });
    });
  }, [])


  return (
    <div>
      {nickName}
    </div>
  )
}
