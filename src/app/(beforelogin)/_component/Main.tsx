import Image from "next/image";
import Link from "next/link";
import XLogo from "../../../../public/logo_x.png"
import styles from "@/app/(beforelogin)/_component/main.module.css"

export default function Main(){
  return (
    <>
    <div className={styles.left}>
      <Image src={XLogo} alt="logo"/>
    </div>
    <div className={styles.right}>
      <h1>지금 일어나고 있는 일</h1>
      <h2>지금 가입하세요</h2>
      <Link className={styles.signup} href="/i/flow/signup">계정 만들기</Link>
      <h3>계정이 있으신가요?</h3>
      <Link className={styles.login} href="/login">로그인 하기</Link>
    </div>
  </>
  )  
}