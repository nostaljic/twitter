"use client";
import { useRouter } from "next/navigation";
import Main from "@/app/(beforelogin)/_component/Main";
//import { redirect } from "next/navigation";


export default function Login() {
//    redirect("/i/flow/login")
    const router = useRouter();
    router.replace('/i/flow/login')
    return (
        <Main></Main>
    );
}